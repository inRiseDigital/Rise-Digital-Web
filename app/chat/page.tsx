"use client";

import { useEffect, useRef, useState, KeyboardEvent } from "react";
import { AutosizeTextarea } from "./components/ui/autosize-textarea";
import { Button } from "./components/ui/button";
import { ScrollArea } from "./components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Mic as MicIcon, Send as SendIcon, Paperclip as AttachmentIcon } from "lucide-react";
import {getGroqChatCompletion} from "./services/chatService";

interface Message {
  message: string;
  type: "bot" | "user";
}

export default function Chat() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [userInput, setUserInput] = useState("");
  const [conversation, setConversation] = useState<Message[]>([]);

  // Scroll to the top when messages update
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [conversation]);

  const addMessage = (message: Message) => {
    setConversation((prev) => [...prev, message]);
  };

  const sendMessage = async () => {
    if (userInput.trim()) {
      addMessage({ message: userInput, type: "user" });
      setUserInput("");

      const response = await getGroqChatCompletion(userInput);
      // Extract message content from ChatCompletion response
      setTimeout(() => {
        addMessage({ message: response.choices[0].message.content || "", type: "bot" });
      }, 500);
    }
  };

  const handleEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Handle file selection
  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      addMessage({ message: `📎 Attached: ${file.name}`, type: "user", file });
    }
  };

  // Trigger file input when attachment icon is clicked
  const handleAttachmentClick = () => {
    fileInputRef.current?.click();
  };

  // Start Recording Voice
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/mp3" });
        const audioUrl = URL.createObjectURL(audioBlob);

        addMessage({ message: "🎤 Voice Message", type: "user", audio: audioUrl });
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  // Stop Recording Voice
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <main className="h-screen flex flex-col bg-muted/50">
      {/* Chat Header */}
      <div>
        <div className="h-30 flex items-center justify-center px-3">
          <img src="/chatUI/rise_digital.png" className="w-64" alt="Chat Logo" />
        </div>
      </div>
      <div className="shrink-0 bg-border h-[1px] w-full"></div>

      {/* Chat Messages Container */}
      <div className="flex-1 flex justify-center overflow-hidden">
        <div className="w-full sm:w-3/5 flex flex-col">
          <ScrollArea ref={scrollRef} className="flex-1 overflow-y-auto">
            <div className="flex flex-col gap-2 p-4">
              {conversation.map((msg, i) => (
                <div key={i} className={`flex items-end gap-2 ${msg.type === "user" ? "justify-end" : "justify-start"}`}>

                  {/* Bot Avatar (Only Bot Messages Have an Avatar) */}
                  {msg.type === "bot" && (
                    <Avatar className="w-8 h-8 bg-gray-200">
                      <AvatarImage src="/avatar/02.png" />
                      <AvatarFallback>.ˍ.</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[65%] px-4 py-2 rounded-lg text-white text-sm ${msg.type === "bot" ? "bg-transparent" : "bg-transparent"
                      }`}
                  >
                    {msg.message}
                    {msg.file && (
                      <div className="mt-1 text-xs text-gray-300">
                        📎 {msg.file.name}
                      </div>
                    )}
                    {msg.audio && (
                      <audio controls className="mt-2">
                        <source src={msg.audio} type="audio/mp3" />
                        Your browser does not support the audio element.
                      </audio>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Bottom chat bar */}
      <div className="flex justify-center">
        <div className="w-full sm:w-3/5">
          <div className="bg-transparent">
            <div className="p-4">
              <div className="flex items-center h-14 gap-3 p-4 rounded-full bg-white/10 backdrop-blur-md shadow-md transition-all 
                  hover:border-purple-500/70 hover:ring-2 hover:ring-purple-500/50 hover:shadow-purple-500/50 hover:shadow-lg">

                {/* Hidden File Input */}
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileSelect}
                />

                {/* Attachment Icon */}
                <button
                  onClick={handleAttachmentClick}
                  className="p-2 text-gray-400 hover:text-gray-200 transition-all">
                  <AttachmentIcon className="w-6 h-6 cursor-pointer" />
                </button>

                {/* Input Field */}
                <AutosizeTextarea
                  className="flex-1 pl-4 outline-none border-0 bg-transparent placeholder:text-white/60 text-white text-base"
                  placeholder="Type a message..."
                  minHeight={25}
                  maxHeight={55}
                  rows={1}
                  onKeyDown={handleEnter}
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                />

                {/* Microphone Icon */}
                <button
                  onClick={isRecording ? stopRecording : startRecording}
                  className={`p-2 transition-all ${isRecording ? "text-red-500 animate-pulse" : "text-gray-400 hover:text-gray-200"}`}
                >
                  <MicIcon className="w-6 h-6 cursor-pointer" />
                </button>

                {/* Send Button with Custom SVG Icon */}
                <Button
                  onClick={sendMessage}
                  className="h-10 w-10 p-0 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white 
             rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-lg hover:shadow-xl">
                  <img src="/chatUI/send-icon.svg" alt="Send" className="h-8 w-8" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
