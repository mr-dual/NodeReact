import React, { useEffect } from "react";
import { render } from "react-dom";
import App from "./App.js";
import "./styles/style.css";
async function Effect() {
  useEffect(() => {
    const input = document.getElementById("input");
    const label = document.querySelector("label");

    if (input.value !== "") {
      label.style.transform = "translateY(-20px)";
    }
  });
}

render(
  <>
    <Effect />
    <App />
  </>,
  document.querySelector(".root")
);
