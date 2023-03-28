import React from "react";
import { NavList } from "../Header/NavList";

const SideBar = ({ setIsVisibleSidebar }) => {
  return (
    <div
      style={{
        width: 250,
        position: "fixed",
        top: 0,
        right: 0,
        zIndex: 1,
        background: "#7590f3",
        height: "26.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <NavList isFromSidebar={true} />
      <button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => {
          setIsVisibleSidebar(false);
        }}
      >
        {" "}
        ЗАКРЫТЬ
      </button>
    </div>
  );
};

export default SideBar;
