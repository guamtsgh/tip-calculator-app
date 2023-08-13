import PercentageButtons from "../components/percentageButton";
import "../css/Tip-sub.css";

function Tip({ setPercentage, setInputPercentage, inputPercentage }) {
  return (
    <div id="tip">
      <label htmlFor="tipList" className="label">
        Select Tip %
      </label>
      <PercentageButtons
        setPercentage={setPercentage}
        setInputPercentage={setInputPercentage}
        inputPercentage={inputPercentage}
      />
    </div>
  );
}

export default Tip;
