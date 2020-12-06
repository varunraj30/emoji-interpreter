import React, { useState } from "react";
import "./styles.css";

var yellowColor = "yellow";
var blueColor = "blue";
var emojiDictionary = {
  "😉": "Winking Face",
  "😪": "Sleepy Face",
  "☹️": "Frowning Face",
  "😎": "Smiling Face with Sunglasses",
  "😫": "Tired Face",
  "😢": "Crying Face",
  "😞": "Disappointed Face",
  "😠": "Angry Face",
  "😡": "Pouting Face",
  "😰": "Anxious Face with Sweat",
  "😨": "Fearful Face",
  "😵": "Dizzy Face",
  "😒": "Unamused Face",
  "😭": "Loudly Crying Face",
  "😷": "Face with Medical Mask"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function onChanger(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Not Found in our DataBase";
    }
    setMeaning(meaning);
  }
  function emojiDescription(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>
        <span style={{ color: yellowColor }}>Emoji </span>
        <span style={{ color: blueColor }}>Interpreter</span>
      </h1>
      <input
        style={{ width: "20%", height: "20vh", fontSize: "10vh" }}
        onChange={onChanger}
      />
      <h2>Meaning is {meaning}</h2>
      <h3>Emoji's in our DataBase</h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiDescription(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}&nbsp;
          </span>
        );
      })}
    </div>
  );
}
