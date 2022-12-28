import React from "react";
import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Hello World"),
    React.createElement(Pet, {
      name: "doggy",
      animal: "dog",
      color: "black",
    }),
    React.createElement(Pet, {
      name: "poggy",
      animal: "cat",
      color: "white",
    }),
    React.createElement(Pet, {
      name: "doggy",
      animal: "caw",
      color: "red",
    }),
  ]);
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
