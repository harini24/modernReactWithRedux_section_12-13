import Accordion from "./component/Accordion";

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
function App() {
  return (
    <div>
      <br/>
      <Accordion items={items} />
    </div>
  );
}

export default App;
