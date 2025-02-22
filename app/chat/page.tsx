"use client";

import { useEffect, useRef, useState, KeyboardEvent } from "react";
import Image from "next/image";
import { AutosizeTextarea } from "./components/ui/autosize-textarea";
import { Button } from "./components/ui/button";
import { ScrollArea } from "./components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { CustomButton } from "./components/ui/CustomButton";
import { GlassCard } from "./components/ui/GlassCard"; // GlassCard component
import { ChatBot } from "./api/api";

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

      try {
        const response = await ChatBot(userInput);

        if (response) {
          addMessage({
            message: response || "",
            type: "bot",
          });
        } else {
          addMessage({
            message: response || "",
            type: "bot",
          });
        }
      } catch (error) {
        console.error("Error getting chat completion:", error);
      }
    }
  };

  const handleEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <main className="h-screen flex flex-col bg-muted/50">
      {/* Chat Header */}
      <div className="p-3 relative">
        <Image
          src="/chatUI/rise_digital.png"
          width={256}
          height={64}
          className="w-64 mx-auto"
          alt="Chat Logo"
        />

        {/* Mobile version: Button rendered below the logo */}
        <div className="mt-4 sm:hidden flex justify-center">
          <a href="/home" rel="noreferrer">
            <CustomButton />
          </a>
        </div>

        {/* Desktop version: Button positioned absolutely on the right */}
        <div className="hidden sm:block absolute right-0 left-3/4 top-1/3 transform -translate-y-1/3">
          <a href="/home" rel="noreferrer">
            <CustomButton />
          </a>
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
                  className={`flex items-end gap-2 ${msg.type === "user" ? "justify-end" : "justify-start"
                    }`}
                >
                  {msg.type === "bot" && (
                    <Avatar className="w-8 h-8 bg-gray-200">
                      <AvatarImage src="/avatar/02.png" />
                      <AvatarFallback>.ˍ.</AvatarFallback>
                    </Avatar>
                  )}
                  <div className="max-w-[65%] px-4 py-2 rounded-lg text-white text-lg bg-transparent">
                    {msg.message.split(' ').map((word, index) =>
                      word.startsWith('**') && word.endsWith('**') ? (
                        <strong key={index}>{word.slice(2, -2)} </strong>
                      ) : (
                        <span key={index}>{word} </span>
                      )
                    )}
                  </div>
                  {msg.type === "user" && (
                    <Avatar className="w-8 h-8 bg-gray-200">
                      <AvatarImage src="/avatar/02.png" />
                      <AvatarFallback>.ˍ.</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Display Glassmorphism Prompt Cards only if conversation is empty */}
          {conversation.length === 0 && (
            <div className="flex flex-col sm:flex-row gap-4 p-4 justify-center items-center">
              <GlassCard
                title="AI Services"
                description="Boost your business with AI-driven solutions."
                className="w-full sm:w-1/3 hover:shadow-[0_0_20px_rgba(165,94,234,0.7)] transition-shadow duration-300"
                onClick={() => setUserInput("Tell me more about AI Services.")}
              />
              <GlassCard
                title="Marketing Insights"
                description="Scale your brand with data-driven strategies."
                className="w-full sm:w-1/3 hover:shadow-[0_0_20px_rgba(165,94,234,0.7)] transition-shadow duration-300"
                onClick={() => setUserInput("Tell me more about Marketing Insights.")}
              />
              <GlassCard
                title="Tech Consulting"
                description="Optimize your tech stack for performance."
                className="w-full sm:w-1/3 hover:shadow-[0_0_20px_rgba(165,94,234,0.7)] transition-shadow duration-300"
                onClick={() => setUserInput("Tell me more about Tech Consulting.")}
              />
            </div>
          )}

        </div>
      </div>

      {/* Bottom Chat Bar */}
      <div className="flex justify-center">
        <div className="w-full sm:w-3/5">
          <div className="bg-transparent">
            <div className="p-4">
              <div
                className="flex items-center h-14 gap-3 p-4 rounded-full bg-white/10 backdrop-blur-md shadow-md transition-all 
                  hover:border-purple-500/70 hover:ring-2 hover:ring-purple-500/50 hover:shadow-purple-500/50 hover:shadow-lg"
              >
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
                {/* Send Button with Custom SVG Icon */}
                <Button
                  onClick={sendMessage}
                  className="h-10 w-10 p-0 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white 
                  rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <Image
                    src="/chatUI/send-icon.svg"
                    alt="Send"
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
