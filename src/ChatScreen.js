import React, { useState } from 'react'

function ChatScreen() {
    const [messages, setMessages] = useState([
        {
            name: "..."
            image:"..."
            message: "..."
        },
        {
            name: "..."
            image:"..."
            message: "..."
        },
        {
            name: "..."
            image:"..."
            message: "..."
        },
    ]);
    
  return (
    <div className="chatScreen">
        <p>YOU MATCHED A RANDO ON 1/6/2024</p>
    </div>
  );
}

export default ChatScreen