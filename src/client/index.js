import React from "react";
import { render } from "react-dom";

import "./styles/main.css";

const App = () => {
  return <h1> Hello React </h1>;
};

render(<App />, document.querySelector("#app"));
