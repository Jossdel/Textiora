import { useState } from "react";

export const ChatMessage = ({ message, sender }) => {
  const isBot = sender === "bot";

  return (
    <div className="flex w-full px-1 py-0.5">
      <div
        className={`flex items-end gap-2 max-w-full w-full px-1 ${
          isBot ? "justify-start" : "justify-end"
        }`}
      >
        {/* Bot avatar */}
        {isBot && (
          <img
            src="/src/assets/chatRobot.png"
            width="30"
            height="30"
            alt="ChatBot"
            className="w-8 h-8 rounded-full flex-shrink-0 object-cover"
          />
        )}

        {/* Bubble */}
        <div
          className={`max-w-[65%] px-3.5 py-2.5 text-[15px] leading-relaxed break-words rounded-[18px] ${
            isBot
              ? "bg-[#d8ebe8] text-[#2a3a36] rounded-bl-[4px] border border-white/7"
              : "bg-[#07b5e0] text-white rounded-br-[4px]"
          }`}
        >
          <p className="m-0">{message}</p>
        </div>

        {/* User avatar */}
        {!isBot && (
          <img
            src="/src/assets/user.png"
            width="30"
            height="30"
            alt="Usuario"
            className="w-8 h-8 rounded-full flex-shrink-0 object-cover"
          />
        )}
      </div>
    </div>
  );
};

export const ChatInput = ({ addMessages }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (!inputValue.trim()) return;
    addMessages(inputValue);
    setInputValue("");
  };

  return (
    <div className="absolute bottom-0 right-0 w-full flex items-center gap-2.5 px-4 py-3.5 bg-[#1e2422] border-t border-white/[0.06]">
      <input
        type="text"
        placeholder="Send Something to a ChatBot"
        className="
          flex-1 px-[18px] py-3 text-[15px]
          bg-white/[0.07] text-[#f0f0f0] placeholder-white/35
          border border-white/[0.08] rounded-[14px]
          outline-none caret-[#07b5e0]
          transition-[border-color,background] duration-200
          focus:bg-white/10 focus:border-[#07b5e0]/50
        "
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit();
        }}
      />

      <button
        onClick={handleSubmit}
        className="
          flex items-center gap-1.5 px-5 py-3
          text-[15px] font-semibold text-white whitespace-nowrap
          bg-gradient-to-br from-[#07b5e0] to-[#059cbf]
          border-none rounded-[14px] cursor-pointer
          transition-[opacity,transform] duration-150
          hover:opacity-90 active:scale-[0.97]
        "
      >
        Send
      </button>
    </div>
  );
};
