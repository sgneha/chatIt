import React from "react";
import "../styles/Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

function Chat() {
  const { roomId } = useParams(); //destructuring from the url
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h2 className="chat__channelName">
            <strong>#general</strong>
            <StarBorderOutlinedIcon />
          </h2>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
    </div>
  );
}

export default Chat;
