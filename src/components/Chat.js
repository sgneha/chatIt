import React from "react";
import "../styles/Chat.css";
import { useParams } from "react-router-dom";

function Chat() {
  const { roomId } = useParams(); //destructuring from the url
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h2 className="chat__channelName">
            <strong>#general</strong>
          </h2>
        </div>
        <div className="chat__headerRight"></div>
      </div>
    </div>
  );
}

export default Chat;
