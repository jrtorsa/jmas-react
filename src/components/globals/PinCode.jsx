import React from "react";
import "../styles/PinCode.css";

const PinCode = ({accountNumber, setAccountNumber}) => {
  const width = window.innerWidth;

  const getNumberValue = (e) => {
    const number = e.target.innerText
    setAccountNumber(accountNumber + number)
  }

  if (width > 768) {
    return <div>Hello</div>;
  } else {
    return (
      <div className="pin-code-container">
        <div className="pin-code-row">
          <div className="pin-code-number" onClick={getNumberValue}>1</div>
          <div className="pin-code-number" onClick={getNumberValue}>4</div>
          <div className="pin-code-number" onClick={getNumberValue}>7</div>
        </div>
        <div className="pin-code-row">
          <div className="pin-code-number" onClick={getNumberValue}>2</div>
          <div className="pin-code-number" onClick={getNumberValue}>5</div>
          <div className="pin-code-number" onClick={getNumberValue}>8</div>
        </div>
        <div className="pin-code-row">
          <div className="pin-code-number" onClick={getNumberValue}>3</div>
          <div className="pin-code-number" onClick={getNumberValue}>6</div>
          <div className="pin-code-number" onClick={getNumberValue}>9</div>
        </div>
        <div className="pin-code-row">
          <div className="pin-code-number" onClick={getNumberValue}>0</div>
        </div>
      </div>
    );
  }
};

export default PinCode;
