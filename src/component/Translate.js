import { useState } from "react";
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
      <Convert text={text} language={selectedItem} />
    </div>
  );
};

export default Translate;
