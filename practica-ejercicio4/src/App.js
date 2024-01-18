import React from 'react';
import { useState } from "react";
import './App.css';
import Ejercicio4 from './components/Ejercicio4';

function App() {
  const [val, setVal] = useState(10);
  const setValuer = (i) => setVal(Number(i.target.value));

  return (
    <>
      <div className="App">
        <h1>Progress bar</h1>
        <Ejercicio4 width={val} />
        <form>
          <label for="html">Ingrese Porcentaje:</label>
          <input type="number" onChange={setValuer} />
        </form>
      </div>
    </>
  );
}
export default App;