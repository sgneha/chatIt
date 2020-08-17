import React from "react";
import "../styles/SidebarOption.css";
import { useHistory } from "react-router-dom";

function SidebarOption({ Icon, title, id, addChannelOption }) {
  //passing component Icon as props
  const history = useHistory(); //when back or forward a web page

  const selectChannel = () => {
    if (id) {
      //pulls out the history
      history.push(`/room/${id}`);
    } else {
      history.push(titile);
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
