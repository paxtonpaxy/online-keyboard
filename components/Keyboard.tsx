import { KeyboardContext } from "../helpers/KeyboardContext";
import React, { useContext } from "react";

const Keyboard = () => {
  const keyboardContext = useContext(KeyboardContext);

  if (!keyboardContext) {
    throw new Error("Keyboard must be used within a KeyboardProvider");
  }

  const { values, setValues } = keyboardContext;

  const handleKeyPress = (value: string) => {
    setValues([...values, value]);
  };

  return (
    <div className="keyboard">
      <div className="keyboard-main">
        <div className="row">
          <button className="key" onClick={() => handleKeyPress("` ~")}>
            ` ~
          </button>
          <button className="key" onClick={() => handleKeyPress("1")}>
            1
          </button>
          <button className="key" onClick={() => handleKeyPress("2")}>
            2
          </button>
          <button className="key" onClick={() => handleKeyPress("3")}>
            3
          </button>
          <button className="key" onClick={() => handleKeyPress("4")}>
            4
          </button>
          <button className="key" onClick={() => handleKeyPress("5")}>
            5
          </button>
          <button className="key" onClick={() => handleKeyPress("6")}>
            6
          </button>
          <button className="key" onClick={() => handleKeyPress("7")}>
            7
          </button>
          <button className="key" onClick={() => handleKeyPress("8")}>
            8
          </button>
          <button className="key" onClick={() => handleKeyPress("9")}>
            9
          </button>
          <button className="key" onClick={() => handleKeyPress("0")}>
            0
          </button>
          <button className="key" onClick={() => handleKeyPress("-")}>
            -
          </button>
          <button className="key" onClick={() => handleKeyPress("=")}>
            =
          </button>
          <button
            className="wide-key"
            onClick={() => handleKeyPress("Backspace")}
          >
            Backspace
          </button>
        </div>
        <div className="row">
          <button className="key" onClick={() => handleKeyPress("Tab")}>
            Tab
          </button>
          <button className="key" onClick={() => handleKeyPress("q")}>
            q
          </button>
          <button className="key" onClick={() => handleKeyPress("w")}>
            w
          </button>
          <button className="key" onClick={() => handleKeyPress("e")}>
            e
          </button>
          <button className="key" onClick={() => handleKeyPress("r")}>
            r
          </button>
          <button className="key" onClick={() => handleKeyPress("t")}>
            t
          </button>
          <button className="key" onClick={() => handleKeyPress("y")}>
            y
          </button>
          <button className="key" onClick={() => handleKeyPress("u")}>
            u
          </button>
          <button className="key" onClick={() => handleKeyPress("i")}>
            i
          </button>
          <button className="key" onClick={() => handleKeyPress("o")}>
            o
          </button>
          <button className="key" onClick={() => handleKeyPress("p")}>
            p
          </button>
          <button className="key" onClick={() => handleKeyPress("[")}>
            [
          </button>
          <button className="key" onClick={() => handleKeyPress("]")}>
            ]
          </button>
          <button className="key" onClick={() => handleKeyPress("|")}>
            \
          </button>
        </div>
        <div className="row">
          <button
            className="wide-key"
            onClick={() => handleKeyPress("Caps Lock")}
          >
            Caps Lock
          </button>
          <button className="key" onClick={() => handleKeyPress("a")}>
            a
          </button>
          <button className="key" onClick={() => handleKeyPress("s")}>
            s
          </button>
          <button className="key" onClick={() => handleKeyPress("d")}>
            d
          </button>
          <button className="key" onClick={() => handleKeyPress("f")}>
            f
          </button>
          <button className="key" onClick={() => handleKeyPress("g")}>
            g
          </button>
          <button className="key" onClick={() => handleKeyPress("h")}>
            h
          </button>
          <button className="key" onClick={() => handleKeyPress("j")}>
            j
          </button>
          <button className="key" onClick={() => handleKeyPress("k")}>
            k
          </button>
          <button className="key" onClick={() => handleKeyPress("l")}>
            l
          </button>
          <button className="key" onClick={() => handleKeyPress(";")}>
            ;
          </button>
          <button className="key" onClick={() => handleKeyPress("'")}>
            '
          </button>
          <button className="wide-key" onClick={() => handleKeyPress("Enter")}>
            Enter
          </button>
        </div>
        <div className="row">
          <button
            className="wide-key"
            onClick={() => handleKeyPress("Shift L")}
          >
            Shift L
          </button>
          <button className="key" onClick={() => handleKeyPress("z")}>
            z
          </button>
          <button className="key" onClick={() => handleKeyPress("x")}>
            x
          </button>
          <button className="key" onClick={() => handleKeyPress("c")}>
            c
          </button>
          <button className="key" onClick={() => handleKeyPress("v")}>
            v
          </button>
          <button className="key" onClick={() => handleKeyPress("b")}>
            b
          </button>
          <button className="key" onClick={() => handleKeyPress("n")}>
            n
          </button>
          <button className="key" onClick={() => handleKeyPress("m")}>
            m
          </button>
          <button className="key" onClick={() => handleKeyPress(",")}>
            {" "}
            ,{" "}
          </button>
          <button className="key" onClick={() => handleKeyPress(".")}>
            {" "}
            .{" "}
          </button>
          <button className="key" onClick={() => handleKeyPress("/")}>
            {" "}
            /{" "}
          </button>
          <button
            className="wide-key"
            onClick={() => handleKeyPress("Shift R")}
          >
            Shift R
          </button>
        </div>
        <div className="row">
          <button className="key" onClick={() => handleKeyPress("Ctrl")}>
            Ctrl
          </button>
          <button className="key" onClick={() => handleKeyPress("Win")}>
            Win
          </button>
          <button className="key" onClick={() => handleKeyPress("Alt")}>
            Alt
          </button>
          <button
            className="spacebar-key"
            onClick={() => handleKeyPress("Spacebar")}
          >
            Spacebar
          </button>
          <button className="key" onClick={() => handleKeyPress("Backspace")}>
            Alt
          </button>
          <button className="key" onClick={() => handleKeyPress("Opt")}>
            Opt
          </button>
          <button className="key" onClick={() => handleKeyPress("FN")}>
            FN
          </button>
          <button className="key" onClick={() => handleKeyPress("Ctrl")}>
            Ctrl
          </button>
        </div>
      </div>
      <div className="keyboard-arrows">
        <div className="row">
          <div className="arrows">
            <div className="arrow-row">
              <button className="arrow" onClick={() => handleKeyPress("up")}>
                Up
              </button>
            </div>
            <div className="arrow-row">
              <button className="arrow" onClick={() => handleKeyPress("Left")}>
                Left
              </button>
              <button className="arrow" onClick={() => handleKeyPress("Down")}>
                Down
              </button>
              <button className="arrow" onClick={() => handleKeyPress("Right")}>
                Right
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
