import React from "react";
import "../styles/PinCode.css";

const PinCode = () => {
  const width = window.innerWidth;

  if (width > 768) {
    return <div>Hello</div>;
  } else {
    return (
      <div className="pin-code-container">
        <div className="pin-code-row">
          <div className="pin-code-number">1</div>
          <div className="pin-code-number">4</div>
          <div className="pin-code-number">7</div>
        </div>
        <div className="pin-code-row">
          <div className="pin-code-number">2</div>
          <div className="pin-code-number">5</div>
          <div className="pin-code-number">8</div>
        </div>
        <div className="pin-code-row">
          <div className="pin-code-number">3</div>
          <div className="pin-code-number">6</div>
          <div className="pin-code-number">9</div>
        </div>
        <div className="pin-code-row">
          <div className="pin-code-number">0</div>
        </div>
      </div>
    );
  }
};

export default PinCode;
