"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  RiChat3Line,
  RiCloseLine,
  RiSendPlane2Fill,
  RiRobotLine,
  RiUser3Line,
  RiQuestionAnswerLine,
  RiQuestionLine,
} from "react-icons/ri";

const SUGGESTIONS = [
  "How much is a sick note?",
  "What are your opening hours?",
  "How do I book blood work?",
  "Do I have to pay for a WSIB form?",
  "What payment methods are accepted?",
];

// Helper to parse simple markdown bolding **text**
function FormattedMessage({ text }) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <div className="whitespace-pre-line">
      {parts.map((part, idx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={idx} className="font-semibold">{part.slice(2, -2)}</strong>;
        }
        return <span key={idx}>{part}</span>;
      })}
    </div>
  );
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm Cobie, your Cobourg Care AI Assistant. How can I help you today with clinic hours, doctors, appointment booking, or uninsured service fees?",
    },
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend) => {
    const text = textToSend || inputMessage;
    if (!text.trim() || isLoading) return;

    const userMsg = { role: "user", content: text };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInputMessage("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch response");
      }

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm sorry, I encountered an error connecting. Please call our reception at 647-508-9094 for assistance.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative bg-gradient-to-r from-[#050660] to-[#0E31AC] hover:from-[#0E31AC] hover:to-[#050660] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 border-2 border-white/20"
            aria-label="Ask Cobie - AI Assistant"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#01bbf8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#01bbf8]"></span>
            </span>
            <RiChat3Line className="text-2xl" />
            <span className="hidden md:inline font-semibold text-sm pr-1">
              Ask Cobie
            </span>
          </button>
        )}
      </div>

      {/* Chat Window Drawer */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[580px] max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#050660] to-[#0E31AC] text-white p-4 sm:p-5 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl text-[#01bbf8] border border-white/20">
                <RiRobotLine />
              </div>
              <div>
                <h3 className="font-bold text-base leading-tight">
                  Cobie • AI Assistant
                </h3>
                <p className="text-xs text-white/80 flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Cobourg Care Clinic
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full text-white/80 hover:text-white transition-colors"
              aria-label="Close Assistant"
            >
              <RiCloseLine className="text-2xl" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50/50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-3 text-sm ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-[#0E31AC]/10 text-[#0E31AC] flex items-center justify-center shrink-0 mt-1 font-bold text-xs">
                    AI
                  </div>
                )}

                <div
                  className={`p-3.5 rounded-2xl max-w-[82%] leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#0E31AC] text-white rounded-br-none shadow-sm"
                      : "bg-white text-[#050660] border border-gray-100 rounded-bl-none shadow-sm"
                  }`}
                >
                  <FormattedMessage text={msg.content} />
                </div>

                {msg.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-[#050660] text-white flex items-center justify-center shrink-0 mt-1">
                    <RiUser3Line className="text-xs" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Loader */}
            {isLoading && (
              <div className="flex items-center gap-2 text-gray-400 text-xs py-2 px-3 bg-white rounded-2xl border border-gray-100 w-fit">
                <div className="w-2 h-2 rounded-full bg-[#0E31AC] animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-[#0E31AC] animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 rounded-full bg-[#0E31AC] animate-bounce [animation-delay:-0.3s]"></div>
                <span className="ml-1 text-gray-500">Assistant is typing...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Questions */}
          {messages.length < 3 && !isLoading && (
            <div className="px-3 py-2 bg-gray-100/60 border-t border-gray-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              <span className="text-xs text-gray-400 shrink-0 font-medium pl-1 flex items-center gap-1">
                <RiQuestionLine /> Try:
              </span>
              {SUGGESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSendMessage(q)}
                  className="bg-white hover:bg-blue-50 text-[#0E31AC] text-xs px-2.5 py-1 rounded-full border border-gray-200 shrink-0 font-medium transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-gray-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask a question about fees, hours, doctors..."
              className="flex-1 bg-gray-100 text-[#050660] px-4 py-2.5 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#0E31AC]/30 placeholder:text-gray-400"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              className="p-2.5 bg-[#0E31AC] hover:bg-[#050660] disabled:bg-gray-300 text-white rounded-full transition-colors shrink-0 shadow-md"
              aria-label="Send message"
            >
              <RiSendPlane2Fill className="text-lg" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
