import iconDollar from "../images/icon-dollar.svg";

function Bill({ setBill, bill }) {
  return (
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
  );
}

export default Bill;
