import "../css/ResultBox.css";

function ResultBox({ tip, total, handleReset }) {
  return (
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
  );
}

export default ResultBox;
