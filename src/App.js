import React, { useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage !== "") {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Chat Application</h1>
      <div className="chat-box">
        <div className="messages">
          {messages.map((message, index) => (
            <div className="message" key={index}>
              {message}
            </div>
          ))}
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Type your message"
            value={newMessage}
            onChange={handleInputChange}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
