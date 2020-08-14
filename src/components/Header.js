import React from "react";
import "../styles/Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

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
        <SearchIcon />

        {/* input*/}
        <input placeholder="search whatever" />
      </div>
      <div className="header-right">
        {/* help icon */}
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
