import "./styles.css";
import React, { useState } from "react";

// var likeCounter = 0;

const emojiDictionary = {
  "🤟": "I love you",
  "👌": "awesome",
  "😁": "grin",
  "🤯‍": "mind blown",
  "🥳": "party mode",
  "😶": "sorry, no words"
};

var emojisWeKnow = Object.keys(emojiDictionary);
console.log(emojisWeKnow);
var orderList = ["vishal", "gaurav"];
export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var input = event.target.value;
    var meaning = emojiDictionary[input];
    if (meaning === undefined) meaning = "Not found in DB";
    setMeaning(meaning);
    console.log(meaning);
  }

  function clickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <>
      <div className="App">
        <h1>Emoji Interpreter</h1>
        <input onChange={emojiInputHandler}></input>
        <div>
          <h2>{"Meaning: " + meaning}</h2>
        </div>
        <h3>emojis we know:</h3>
        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => clickHandler(emoji)}
              style={{
                minWidth: "100%",
                fontSize: "2rem",
                padding: "1rem",
                cursor: "pointer"
              }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </>
  );
}
