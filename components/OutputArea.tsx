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
      <h2>Your text:</h2>
      <div>
        <textarea
          className="output-text"
          placeholder="Your text will appear here"
          value={values.join("")}
          readOnly
        ></textarea>
        <div className="output-area"></div>
      </div>
    </div>
  );
};

export default OutputArea;
