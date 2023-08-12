import React from "react";

const percentageData = [
  { text: "5%", value: 5 },
  { text: "10%", value: 10 },
  { text: "15%", value: 15 },
  { text: "25%", value: 25 },
  { text: "50%", value: 50 },
];

function PercentageButtons({
  setPercentage,
  setInputPercentage,
  inputPercentage,
}) {
  function handleOnClick(item) {
    setInputPercentage("");
    setPercentage(item.value);
  }
  return (
    <div id="percentGridList" name="tipList">
      {percentageData.map((item) => (
        <button
          key={item.text}
          onClick={() => {
            handleOnClick(item);
          }}
        >
          {item.text}
        </button>
      ))}
      <input
        type="text"
        placeholder="Custom"
        className="inputPadding inputText"
        onChange={(event) => setInputPercentage(event.target.value)}
        value={inputPercentage}
      />
    </div>
  );
}

export default PercentageButtons;
