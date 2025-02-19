"use client";

import { AutosizeTextarea } from "./components/ui/autosize-textarea";
import { Button } from "./components/ui/button";
import { ScrollArea } from "./components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { KeyboardEvent, useRef, useState } from "react";


interface Message {
  message: string;
  type: "bot" | "user";
}

export default function Chat() {
  const scrollRef = useRef<null | HTMLDivElement>(null);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const [userInput, setUserInput] = useState("");
  const [conversation, setConversation] = useState<Message[]>([]);

  const addMessage = (message: Message) => {
    setConversation((oldArray: Message[]) => [...oldArray, message]);
    if (message.type === "user") {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const messageEndPosition =
        messagesEndRef.current?.getBoundingClientRect()?.top || 0;
      const scrollAreaPosition =
        scrollRef.current?.getBoundingClientRect()?.top || 0;
      const scrollAreaHeight = scrollRef.current?.clientHeight || 0;
      const scrollPosition = messageEndPosition - scrollAreaPosition;
      if (scrollAreaHeight - scrollPosition >= -200) {
        setTimeout(() => {
          messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  };

  const sendMessage = () => {
    if (userInput) {
      addMessage({ message: userInput, type: "user" });
      setUserInput(""); // clear the textarea

      // llm api connect
      setTimeout(() => {
        addMessage({ message: "ok", type: "bot" });
      }, (Math.floor(Math.random() * (15 - 10 + 1)) + 10) * 100);
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
      <ScrollArea ref={scrollRef} className="flex-1 overflow-x-hidden">
        <div className="flex flex-col gap-1 p-2 max-w-3xl mx-auto">
          {conversation.map((msg, i) => {
            return (
              <div key={i} className="flex gap-2 first:mt-2">
                {msg.type === "bot" && (
                  <>
                    {conversation[i - 1] &&
                    conversation[i - 1].type === "bot" ? (
                      <div className={`w-6 h-6`}></div>
                    ) : (
                      <Avatar className={`w-6 h-6 bg-gray-200`}>
                        <AvatarImage src="avatar/02.png" />
                        <AvatarFallback>.ˍ.</AvatarFallback>
                      </Avatar>
                    )}
                  </>
                )}
                <div
                  className={`max-w-[60%] flex flex-col ${
                    msg.type === "bot"
                      ? "bg-white mr-auto"
                      : "text-white bg-black ml-auto"
                  } items-start gap-2 rounded-lg border p-2 text-left text-sm transition-all whitespace-pre-wrap`}
                >
                  {msg.message}
                </div>
                {msg.type === "user" && (
                  <>
                    {conversation[i - 1] &&
                    conversation[i - 1].type === "user" ? (
                      <div className={`w-6 h-6`}></div>
                    ) : (
                      <Avatar className={`w-6 h-6 bg-gray-200`}>
                        <AvatarImage src="avatar/01.png" />
                        <AvatarFallback>.ˍ.</AvatarFallback>
                      </Avatar>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
        <div ref={messagesEndRef} className="mb-2"></div>
      </ScrollArea>
      <div className="w-full sm:max-w-3xl mx-auto">
        <div className="bg-white sm:rounded-t-md border-t sm:border shadow-lg">
          <div className="p-4">
            <div className="flex flex-row gap-3 p-4 border rounded-t-md">
            <AutosizeTextarea
              className="flex-1 outline-none border-0"
              placeholder="Type here ..."
              minHeight={25}
              maxHeight={55}
              rows={1}
              onKeyDown={handleEnter} 
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <Button onClick={() => sendMessage()} className="h-8 w-8 p-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M200 32v144a8 8 0 0 1-8 8H67.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L67.31 168H184V32a8 8 0 0 1 16 0Z"></path>
              </svg>
            </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
