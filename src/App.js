import { useState } from "react";
import "./styles.css";

var headingText = "Emoji Interpretor";
//var userName = prompt("Enter username");
//var userName = "Maueeza";
var color = "cyan";
//var isUser = true;
//var marginTopValue = "1rem";

const emojiDictionary = {
  "đ": "Happy Face",
  "đ": "Smiling face with Smiling eyes",
  "đ": "Teasing face",
  "âšī¸": "Sad",
  "đ ": "Angry",
  "đĸ": "Crying face",
  "â¤ī¸": "Love",
  "đ": "Smiling face with heart eyes",
  "đ": "Kissing face with closed eyes",
  "đ¤": "Zipper mouth face"
};

var emojiArray = Object.keys(emojiDictionary);
//console.log(emojiArray);
export default function App() {
  /*function getUser(isUser) {
    if (isUser) {
      return <em>{userName}</em>;
    }
  }*/
  //console.log(emojiArray);
  var [meaning, setUserInput] = useState("");

  function onChangeHandler(event) {
    const userInput = event.target.value;
    meaning = emojiDictionary[userInput];
    if (!(userInput in emojiDictionary)) {
      meaning = "Sorry! This doesn't exist in our database";
    }
    setUserInput(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    //console.log(meaning);
    setUserInput(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{headingText}</h1>

      <input onChange={onChangeHandler}></input>
      <h2 id="meaning_h2">{meaning} </h2>

      {emojiArray.map(function (emoji) {
        return (
          <span
            key={emoji}
            style={{ padding: "0.5rem", fontSize: "2rem", cursor: "pointer" }}
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
