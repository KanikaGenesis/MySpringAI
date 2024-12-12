import React, { useState } from 'react';

const ChatComponent = () => {
  const [prompt, setPrompt] = useState('');
  const [chatResponse, setChatResponse] = useState('');

  const askAI = async () => {
    try {
      const response = await fetch(`http://localhost:8082/ask-ai?prompt=${prompt}`);
      const data = await response.text();
      setChatResponse(data);
      console.log("AI response: ", data);
    } catch (error) {
      console.error("Error chatting with AI: ", error);
    }
  };

  return (
    <div className="chat-component">
      <h1>Talk to AI</h1>
      <div className="input-container">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter a prompt for the AI"
          className="input-field"
        />
        <button onClick={askAI} className="chat-btn">
          Chat with AI
        </button>
      </div>
      <div className="output">
        <h2>Response:</h2>
        <p>{chatResponse || "No response yet. Ask something!"}</p>
      </div>
    </div>
  );
};

export default ChatComponent;