import React from "react";

const RightArrow = ({ className }) => (
  <button className={className} style={{ position: "absolute", right: 0, zIndex: 10 }}>
    <img src="/path-to-right-arrow.svg" alt="Right" />
  </button>
);

export default RightArrow;