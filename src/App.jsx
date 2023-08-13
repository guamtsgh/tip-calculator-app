import { useEffect, useState } from "react";
import "./App.css";
import ResultBox from "./components/ResultBox";
import InputBox from "./components/InputBox";

function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState(null);
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
    tip ${tip}
    total ${total}
    `
  );

  useEffect(() => {
    if (bill && people) {
      const billAmount = Number(bill);
      const peopleCount = parseInt(people);

      let calPercentage = percentage !== null ? Number(percentage) : null;

      if (inputPercentage !== null && inputPercentage !== "") {
        calPercentage = Number(inputPercentage);
      }

      if (calPercentage !== null) {
        const totalPerPerson =
          (billAmount + billAmount * (calPercentage / 100)) / peopleCount;
        const tipAmountPerPerson =
          (billAmount * (calPercentage / 100)) / peopleCount;

        if (
          !Number.isFinite(totalPerPerson) ||
          !Number.isFinite(tipAmountPerPerson)
        ) {
          setTip("0.00");
          setTotal("0.00");
        } else {
          setTip(tipAmountPerPerson.toFixed(2));
          setTotal(totalPerPerson.toFixed(2));
        }
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
        <InputBox
          bill={bill}
          setBill={setBill}
          setPercentage={setPercentage}
          setInputPercentage={setInputPercentage}
          inputPercentage={inputPercentage}
          people={people}
          setPeople={setPeople}
        />
        <ResultBox tip={tip} total={total} handleReset={handleReset} />
      </section>
    </div>
  );
}

export default App;
