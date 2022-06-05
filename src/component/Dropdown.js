const Dropdown = ({ options, selectedOption, ondropdownSelect }) => {
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
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">{selectedOption.label}</div>
          <div className="menu visible transition">{renderOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
