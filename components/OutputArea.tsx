import React, { useContext } from "react";
import { KeyboardContext } from "../helpers/KeyboardContext";

const OutputArea = () => {
  const keyboardContext = useContext(KeyboardContext);

  if (!keyboardContext) {
    throw new Error("Output must be used within a KeyboardProvider");
  }

  const { values } = keyboardContext;

  return (
    <div className="output">
      <h2>Output</h2>
      <div className="w-80 bg-slate-500">{values.join(" ")}</div>
    </div>
  );
};

export default OutputArea;
