import React, { useState } from 'react';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    // Mock response for AI queries
    const userMessage = { text: input, isUser: true };
    const aiResponse = { text: 'AI Response', isUser: false };
    setMessages((prev) => [...prev, userMessage, aiResponse]);
    setInput('');
  };

  return (
    <div className="chatbot">
      <h2>Chatbot</h2>
      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.isUser ? 'message user' : 'message ai'}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask your question..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default Chatbot;