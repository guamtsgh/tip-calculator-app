import PercentageButtons from "../components/percentageButton";

function Tip({ setPercentage, setInputPercentage, inputPercentage }) {
  return (
    <div id="tip">
      <label htmlFor="tipList">Select Tip %</label>
      <PercentageButtons
        setPercentage={setPercentage}
        setInputPercentage={setInputPercentage}
        inputPercentage={inputPercentage}
      />
    </div>
  );
}

export default Tip;
