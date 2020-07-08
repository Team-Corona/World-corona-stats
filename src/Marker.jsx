import React from "react";
import "./Marker.css";

const Marker = props => {
  const { color, name, id } = props;
  return (
    <div
      className="marker"
      style={{ backgroundColor: color, cursor: "pointer", zoom: 2 }}
      title={name}
    />
  );
};

export default Marker;
