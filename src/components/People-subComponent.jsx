import { useState } from "react";
import iconPerson from "../images/icon-person.svg";
import "../css/People-sub.css";

function People({ people, setPeople }) {
  const [errorMessage, setErrorMessage] = useState("");

  function handleInputChange(event) {
    const value = event.target.value;
    setPeople(value);

    if (value == 0 && value !== "") {
      setErrorMessage("Can't be zero");
    } else {
      setErrorMessage("");
    }
  }

  return (
    <div id="people">
      <div id="labelBox" className="flexRow">
        <label htmlFor="people" className="label">
          Number of People
        </label>
        {errorMessage && (
          <label htmlFor="people" className="labelWarning">
            {errorMessage}
          </label>
        )}
      </div>
      <input
        id="peopleInput"
        type="text"
        name="people"
        placeholder="0"
        onChange={handleInputChange}
        value={people}
        className={
          errorMessage
            ? "error inputPadding inputText"
            : "inputPadding inputText focus"
        }
      />
      <img src={iconPerson} alt="Person Icon" />
    </div>
  );
}

export default People;
