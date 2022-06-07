import { useState } from "react";
import Accordion from "./component/Accordion";
import Dropdown from "./component/Dropdown";
import Search from "./component/Search";

const items = [
  {
    title: "What is react?",
    content: "React is a front ed JS framework",
  },
  {
    title: "Why use react?",
    content: "React is a favourite JS framework among developers",
  },
  {
    title: "How do you use react?",
    content: "React can be craeted by npm create-react-app",
  },
];

const dropdwnValues = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Black",
    value: "black",
  },
];
function App() {
  const [selectedItem, setSelectedItem] = useState(dropdwnValues[0]);
  const [showDropDown, setShowDropDOwn] = useState(true);
  return (
    <div>
      <br />
      <button onClick={() => setShowDropDOwn(!showDropDown)}>
        Toggle dropdown
      </button>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {showDropDown ? (
        <Dropdown
          selectedOption={selectedItem}
          ondropdownSelect={setSelectedItem}
          options={dropdwnValues}
        />
      ) : null}
    </div>
  );
}

export default App;
