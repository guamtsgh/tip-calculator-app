import "../css/InputBox.css";
import Bill from "./Bill-subComponent";
import People from "./People-subComponent";
import Tip from "./Tip-subComponent";

function InputBox({
  bill,
  setBill,
  setPercentage,
  setInputPercentage,
  inputPercentage,
  people,
  setPeople,
}) {
  return (
    <section id="inputBox" className="flexColumn">
      <Bill setBill={setBill} bill={bill} />
      <Tip
        setPercentage={setPercentage}
        setInputPercentage={setInputPercentage}
        inputPercentage={inputPercentage}
      />
      <People people={people} setPeople={setPeople} />
    </section>
  );
}

export default InputBox;
