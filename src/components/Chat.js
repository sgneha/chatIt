import React from "react";
import "../styles/Chat.css";
import { useParams } from "react-router-dom";

function Chat() {
  const { roomId } = useParams(); //destructuring from the url
  return (
    <div className="chat">
      <h2>You are in {roomId} room</h2>
    </div>
  );
}

export default Chat;
