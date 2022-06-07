import { useState } from "react";
import Accordion from "./component/Accordion";
import Dropdown from "./component/Dropdown";
import Route from "./component/Route";
import Search from "./component/Search";
import Translate from "./component/Translate";

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
  <Dropdown
    selectedOption={selectedItem}
    ondropdownSelect={setSelectedItem}
    options={dropdwnValues}
  />;
  return (
    <div>
      <br />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          selectedOption={selectedItem}
          ondropdownSelect={setSelectedItem}
          options={dropdwnValues}
          label="select a color"
        />
      </Route>
      <Route path="/list">
        <Search items={items} />
      </Route>
      <Route path="/transalte">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
