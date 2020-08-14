import React from "react";
import "../styles/Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        {/* Avatars for logged in users*/}
        <Avatar className="header__avatar" alt={"neha"} src="" />
        {/* Time*/}
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        {/*search icon */}
        {/* input*/}
      </div>
      <div className="header-right">{/* help icon */}</div>
    </div>
  );
}

export default Header;
