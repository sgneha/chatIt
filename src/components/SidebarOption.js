import React from "react";
import "../styles/SidebarOption.css";
import { useHistory } from "react-router-dom";
import db from "../firebase";

function SidebarOption({ Icon, title, id, addChannelOption }) {
  //passing component Icon as props
  const history = useHistory(); //when back or forward a web page
  //pulls out the history
  const selectChannel = () => {
    if (id) {
      //if coming from database
      history.push(`/room/${id}`); //will push next page to history,force to redirect
    } else {
      history.push(title); //will implement it later
    }
  };
  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon"></Icon>}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
