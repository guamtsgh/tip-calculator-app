import iconDollar from "../images/icon-dollar.svg";
import "../css/Bill-sub.css";

function Bill({ setBill, bill }) {
  return (
    <div id="bill">
      <label htmlFor="bill" className="label">
        Bill
      </label>
      <input
        type="text"
        name="bill"
        placeholder="0"
        className="inputPadding inputText focus"
        onChange={(event) => setBill(event.target.value)}
        value={bill}
      />
      <img src={iconDollar} alt="Dollar Icon" />
    </div>
  );
}

export default Bill;
