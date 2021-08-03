import React, {useState} from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Russian",
    code: "ru",
  },
  {
    label: "English",
    code: "en"
  },
  {
    label: "Hebrew",
    code: "iw"
  }
];

const Translate = (props) => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  const textChanged = (e) => {
    setText(e.target.value);
  }

  return (
    <div className="ui container">
      <Dropdown
        label="Select a language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <form className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={textChanged}/>
        </div>
      </form>
      <h3 className="ui header">Output</h3>
      <Convert
        language={language}
        text={text}
      />
    </div>
    );
};

export default Translate;
