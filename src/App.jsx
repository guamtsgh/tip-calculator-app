import { useState } from "react";
import "./App.css";
import iconPerson from "../images/icon-person.svg";
import iconDollar from "../images/icon-dollar.svg";

function App() {
  const [count, setCount] = useState(0);

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
            />
            <img src={iconDollar} alt="Dollar Icon" />
          </div>
          <div id="tip">
            <label htmlFor="tipList">Select Tip %</label>
            <div id="percentGridList" name="tipList">
              <button>5%</button>
              <button>10%</button>
              <button>15%</button>
              <button>25%</button>
              <button>50%</button>
              <input
                type="text"
                placeholder="Custom"
                className="inputPadding inputText"
              />
            </div>
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
            />
            <img src={iconPerson} alt="Person Icon" />
          </div>
        </section>
        <section id="resultBox">
          <div id="content">
            <div id="tipAmountBox">
              <div id="tipText">
                <p>Tip Amount</p>
                <p>/ person</p>
              </div>
              <div id="tipNum">$0.00</div>
            </div>
            <div id="totalBox">
              <div id="totalText">
                <p>Total</p>
                <p>/ person</p>
              </div>
              <div id="totalNum">$0.00</div>
            </div>
          </div>
          <button>RESET</button>
        </section>
      </section>
    </div>
  );
}

export default App;
