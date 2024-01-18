import React from "react";
import "../style/style.css";

const Ejercicio4 = ({ width: inputWidth}) => {
  return (
    <div>
      <div className="container">
        {inputWidth >= 0 && inputWidth <= 100 ? (
          <div className="innerContainer" style={{ width: `${inputWidth}%` }}>
            {inputWidth}%
          </div>
        ) : (
          alert("Por favor ingrese un numero menor a 100")
        )}
      </div>
    </div>
  );
};
export default Ejercicio4;
