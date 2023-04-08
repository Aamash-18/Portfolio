import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color,style}) => {
  return (
    <div className="card" style={{ borderColor: { color } }}>
      <img src={emoji} alt="" style={style} />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;
