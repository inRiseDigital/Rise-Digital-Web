"use client";

import { useEffect, useRef, useState, KeyboardEvent } from "react";
import { AutosizeTextarea } from "./components/ui/autosize-textarea";
import { Button } from "./components/ui/button";
import { ScrollArea } from "./components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { getGroqChatCompletion } from "./services/chatService";
import { Filter } from "lucide-react";

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

  const handleVisitWebsite = () => {
    // Redirect to the desired URL
    window.location.href = "https://example.com"; // Update with your website URL
  };

  return (
    <main className="h-screen flex flex-col bg-muted/50">
      {/* Chat Header */}
      <div className="relative h-30">
        <div className="flex flex-col items-center justify-center h-full">
          <img src="/chatUI/rise_digital.png" className="w-64" alt="Chat Logo" />
          {/* Mobile: Button below the logo with equal width */}
          <div className="mt-2 block md:hidden">
            <Button
              onClick={handleVisitWebsite}
              className="w-64 h-10  cursor-pointer bg-white/10 backdrop-blur-md from-indigo-500 to-indigo-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group"
            >
              Visit Our Website
            </Button>
          </div>
        </div>
        {/* Desktop: Button on top-right */}
        <div className="hidden md:block absolute top-0 right-0 p-3">

          {/* visit our website button */}
          <button
            className="cursor-pointer bg-white/10 backdrop-blur-md from-indigo-500 to-indigo-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group"
          >
            <div className="relative overflow-hidden">
              <p
                className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
              >
                Visit Our Website
              </p>
              <p
                className="absolute top-7 left-3 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
              >
                RISE DIGITAL
              </p>
            </div>
          </button>
        </div>
      </div>
      <div className="shrink-0 bg-border h-[1px] w-full"></div>

      {/* Chat Messages Container */}
      <div className="flex-1 flex justify-center overflow-hidden">
        <div className="w-full sm:w-3/5 flex flex-col">
          <ScrollArea ref={scrollRef} className="flex-1 overflow-y-auto">
            <div className="flex flex-col gap-2 p-4">
              {conversation.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-end gap-2 ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.type === "bot" && (
                    <Avatar className="w-8 h-8 bg-gray-200">
                      <AvatarImage src="/avatar/02.png" />
                      <AvatarFallback>.ˍ.</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[65%] px-4 py-2 rounded-lg text-white text-lg ${msg.type === "bot" ? "bg-transparent" : "bg-transparent"
                      }`}
                  >
                    {msg.message}
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
            <div className="p-4 ">
              <div className="flex items-center h-14 gap-3 p-4 rounded-full bg-white/10 backdrop-blur-md shadow-md transition-all 
                  hover:border-purple-500/70 hover:ring-2 hover:ring-purple-500/50 hover:shadow-purple-500/50 hover:shadow-lg">
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
                <Button
                  onClick={sendMessage}
                  className="h-10 w-10 p-0 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white 
             rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
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
