import { useEffect, useState } from "react";
import "./App.css";
import iconPerson from "../images/icon-person.svg";
import iconDollar from "../images/icon-dollar.svg";
import PercentageButtons from "./components/percentageButton";

function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [percentage, setPercentage] = useState(null);
  const [inputPercentage, setInputPercentage] = useState("");
  const [tip, setTip] = useState("0.00");
  const [total, setTotal] = useState("0.00");
  console.log(
    `
    bill ${bill}
    people ${people}
    percentage ${percentage}
    inputPercentage ${inputPercentage}
    setTip ${setTip}
    total ${setTotal}
    `
  );

  useEffect(() => {
    if (bill && people) {
      const billAmount = Number(bill);
      const peopleCount = Number(people);

      if (percentage !== null) {
        const calPercentage = Number(percentage);
        const totalPerPerson =
          (billAmount + billAmount * (calPercentage / 100)) / peopleCount;
        const tipAmountPerPerson =
          (billAmount * (calPercentage / 100)) / peopleCount;
        setTip(tipAmountPerPerson.toFixed(2));
        setTotal(totalPerPerson.toFixed(2));
      }
      if (inputPercentage !== null && inputPercentage !== "") {
        const calPercentage = Number(inputPercentage);
        const totalPerPerson =
          (billAmount + billAmount * (calPercentage / 100)) / peopleCount;
        const tipAmountPerPerson =
          (billAmount * (calPercentage / 100)) / peopleCount;
        setTip(tipAmountPerPerson.toFixed(2));
        setTotal(totalPerPerson.toFixed(2));
      }
    }
  }, [bill, people, percentage, inputPercentage]);

  function handleReset() {
    setBill("");
    setPeople("");
    setPercentage(null);
    setInputPercentage("");
    setTip("0.00");
    setTotal("0.00");
  }

  return (
    <div id="container" className="flexColumn centerBox fullScreen">
      <p id="title">
        SPLI
        <br />
        TTER
      </p>
      <section id="calBox" className="flexRow">
        <section id="inputBox" className="flexColumn">
          <div id="bill">
            <label htmlFor="bill">Bill</label>
            <input
              type="text"
              name="bill"
              placeholder="0"
              className="inputPadding inputText inputFocus"
              onChange={(event) => setBill(event.target.value)}
              value={bill}
            />
            <img src={iconDollar} alt="Dollar Icon" />
          </div>
          <div id="tip">
            <label htmlFor="tipList">Select Tip %</label>
            <PercentageButtons
              setPercentage={setPercentage}
              setInputPercentage={setInputPercentage}
              inputPercentage={inputPercentage}
            />
          </div>
          <div id="people">
            <div id="labelBox" className="flexRow">
              <label htmlFor="people">Number of People</label>
              <label id="labelFocus" htmlFor="people">
                Can't be zero
              </label>
            </div>
            <input
              type="text"
              name="people"
              placeholder="0"
              className="inputPadding inputText"
              onChange={(event) => setPeople(event.target.value)}
              value={people}
            />
            <img src={iconPerson} alt="Person Icon" />
          </div>
        </section>
        <section id="resultBox" className="flexColumn">
          <div id="content" className="flexColumn">
            <div id="tipAmountBox" className="flexRow">
              <div id="tipText" className="flexColumn">
                <p className="resultTitle">Tip Amount</p>
                <p className="resultText">/ person</p>
              </div>
              <div id="tipNum" className="num">
                ${tip}
              </div>
            </div>
            <div id="totalBox" className="flexRow between">
              <div id="totalText" className="flexColumn">
                <p className="resultTitle">Total</p>
                <p className="resultText">/ person</p>
              </div>
              <div id="totalNum" className="num">
                ${total}
              </div>
            </div>
          </div>
          <button onClick={handleReset}>RESET</button>
        </section>
      </section>
    </div>
  );
}

export default App;
