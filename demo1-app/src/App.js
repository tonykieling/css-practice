import { Demo1 } from "./Demo1.js";
import { Demo2 } from "./Demo2.js";
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Demo1 textColor="darkgreen">random text</Demo1>
      <Demo2 t="another thing" />
      {/* <Demo2 t="demo" />
      <Demo2 t="last one" /> */}
    </React.Fragment>
  );
}

export default App;
