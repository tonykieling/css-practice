import React from "react";
import "./Mystyle.css";

export const Demo2 = props => {
  console.log("Demo2 props:", props);
  // return <div style={{color: "blue", fontSize: "20px"}}> {props.t}</div>
  return(
    <React.Fragment>
      <div> {props.t} </div>
      <p className="info"> {props.t} </p>
      <div id="message"> {props.t} </div>
      <div className="info"> This is div selector + info class </div>
    </React.Fragment>
  )
};
