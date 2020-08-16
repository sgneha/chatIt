import React from "react";
import "../styles/SidebarOption.css";

function SidebarOption({ Icon, title }) {
  //passing component Icon as props
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon"></Icon>}
      {Icon ? <h3>{title}</h3> : <h3>#{title}</h3>}
    </div>
  );
}

export default SidebarOption;
