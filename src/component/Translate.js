import { useEffect, useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const dropdwnLanValues = [
  {
    label: "tamil",
    value: "ta",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "telugu",
    value: "te",
  },
];

const Translate = () => {
  const [selectedItem, setSelectedItem] = useState(dropdwnLanValues[0]);
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [text]);
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        selectedOption={selectedItem}
        ondropdownSelect={setSelectedItem}
        options={dropdwnLanValues}
        label="Select a Language"
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={debouncedText} language={selectedItem} />
    </div>
  );
};

export default Translate;
