import React from "react";
import "./Mystyle.css";

export const Demo2 = props => {
  console.log("Demo2 props:", props);
  // return <div style={{color: "blue", fontSize: "20px"}}> {props.t}</div>
  return(
    <React.Fragment>
    { /**
     * React.Fragment does not add aditional DOM elements to the wrapper.
     *    It is usuful for a React component that returns multiple elements.
     *    It can be needed for some situations such as using flexbox.
     *    Also, it is fewer elements to manage - less memory
     * * use it with wrappers and for loops (it would create a div for any for element)
     * https://stackoverflow.com/questions/47761894/why-are-fragments-in-react-16-better-than-container-divs
    */}
      <div> {props.t} </div>
      <p className="info"> {props.t} </p>
      <p id="message"> {props.t} </p>
      <div className="info"> This is div selector + info class </div>
      <div id="message"> div + message ID </div>
    </React.Fragment>
  )
};
