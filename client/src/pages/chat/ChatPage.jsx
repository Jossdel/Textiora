import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChatMessage, ChatInput } from "./ChatMessage";

const Chatpage = () => {
  const [messages, setMessages] = useState([]);
  const finChatRef = useRef(null);
  const navigate = useNavigate();

  const addMessages = async (newText) => {
    const userMessage = {
      id: crypto.randomUUID(),
      message: newText,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch("http://localhost:3000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: newText }],
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          message: data.response || "No hubo respuesta.",
          sender: "bot",
        },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          message: "Error al conectar con el servidor.",
          sender: "bot",
        },
      ]);
    }
  };

  useEffect(() => {
    finChatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    /* App-container */
    <div
      className="
      absolute inset-0 m-auto
      w-full max-w-[700px] h-[500px]
      flex flex-col items-end
      bg-[#0a0a0f]
      border-2 border-black rounded-lg
      overflow-hidden
    "
    >
      {/* Close button */}
      <button
        onClick={() => navigate("/register")}
        className="
           mx-1
          absolute top-0.5 right-0.5 z-10
          px-2 py-1 text-xs font-black
          text-red-500 border-2 border-red-500 rounded
          bg-transparent cursor-pointer
          hover:bg-red-500/10 transition-colors
        "
      >
        X
      </button>

      {/* chat-container */}
      <div
        className="
        relative flex flex-col
        w-full h-[calc(100%-80px)]
        overflow-y-auto scroll-smooth
        px-3 py-4 gap-1.5
        bg-[#1e2422]
        [&::-webkit-scrollbar]:w-1
        [&::-webkit-scrollbar-track]:bg-transparent
        [&::-webkit-scrollbar-thumb]:bg-white/10
        [&::-webkit-scrollbar-thumb]:rounded-full
      "
      >
        {/* Welcome message */}
        <ChatMessage
          sender="bot"
          message="Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?"
        />

        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg.message} sender={msg.sender} />
        ))}

        <div ref={finChatRef} />
      </div>

      <ChatInput addMessages={addMessages} />
    </div>
  );
};

export default Chatpage;
