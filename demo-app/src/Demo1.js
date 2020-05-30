import React from "react";

export const Demo1 = props => {
  console.log("Demo1 props:", props);
  const styles = {color: props.textColor, textDecoration: "underline"};
  return <React.Fragment style={styles}> {props.children}</React.Fragment>
};
