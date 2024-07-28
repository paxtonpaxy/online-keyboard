import React from "react";
import Keyboard from "../components/Keyboard";
import Output from "../components/OutputArea";
import "@/styles/globals.css";
import { KeyboardProvider } from "../helpers/KeyboardContext";

const App = () => {
  return (
    <KeyboardProvider>
      <div className="app">
        <Keyboard />
        <Output />
      </div>
    </KeyboardProvider>
  );
};

export default App;
