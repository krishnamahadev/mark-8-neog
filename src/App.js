import { useState } from "react";
import "./styles.css";

var emojidict = {
  "🇫🇷": "France",
  "🇮🇳": "India",
  "🇬🇧": "United Kingdom",
  "🇩🇪": "Germany",
  "🇨🇳": "China"
};

var emojis = Object.keys(emojidict);

export default function App() {
  const [meaning, modmeaning] = useState("");
  function changehandler(event) {
    // console.log(event.target.value);

    var userinput = event.target.value;
    console.log(event.target);
    var meaning = emojidict[userinput];
    if (meaning === undefined) {
      meaning = "We dont have this in our database";
    }
    modmeaning(meaning);

    // console.log(meaning);
  }

  function spelloutmeaning(items) {
    // console.log(items);

    var meaning = emojidict[items];
    modmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Flag Interpreter!</h1>

      <input onChange={changehandler}></input>
      <h2>{meaning}</h2>

      <h3>Flags we know</h3>

      {emojis.map(function (items) {
        return (
          <span
            onClick={() => spelloutmeaning(items)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={items}
          >
            {items}{" "}
          </span>
        );
      })}
    </div>
  );
}
