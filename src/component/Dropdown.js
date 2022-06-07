import { useEffect, useState } from "react";

const Dropdown = ({ options, selectedOption, ondropdownSelect }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.addEventListener(
      "click",
      () => {
        setOpen(false)
      },
      { capture: true }
    );
  }, []);

  const renderOptions = options.map((option) => {
    if (option.value === selectedOption.value) {
      return null;
    }
    return (
      <div
        className="item"
        key={option.value}
        value={option.value}
        onClick={() => ondropdownSelect(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selectedOption.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
