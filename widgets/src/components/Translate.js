import React, {useState} from "react";
import Dropdown from "./Dropdown";

const options = [
  {
    value: "Russian",
    label: "ru",
  },
  {
    value: "English",
    label: "en"
  },
  {
    value: "Hebrew",
    label: "iw"
  }
];

const Translate = (props) => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div className="ui container">
      <form className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
      </form>
      <Dropdown
        label="Select a language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
    </div>
    );
};

export default Translate;
