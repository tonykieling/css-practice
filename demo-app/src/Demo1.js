import React from "react";

export const Demo1 = props => {
  console.log("Demo1 props:", props);
  const styles = {color: props.textColor, textDecoration: "underline"};
  return <div style={styles}> {props.children}</div>
};
