import React from "react";
import "./style.css";

function clickCards(props) {
  return (
    <div className="card" >
      <button className="dbzButton img-container" id={props.id} onClick={() => props.handleInitClick(props.id)}>
        <img alt={props.name} src={props.image} />
      </button>
    </div>
  );
}

export default clickCards;
