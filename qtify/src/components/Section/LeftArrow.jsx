import React from "react";

const LeftArrow = ({ className }) => (
  <button className={className} style={{ position: "absolute", left: 0, zIndex: 10 }}>
    <img src="/path-to-left-arrow.svg" alt="Left" />
  </button>
);

export default LeftArrow;
