import "../style/style.css";
import { useState } from "react";
function Ejercicio1() {
  const [show, setShow] = useState(true);
  return (
    <div className="container">
      <button onClick={() => setShow((show) => !show)}> Show / Hide</button>
      {show ? <h1>Welcome to React Challenges</h1> : null}
    </div>
  );
}
export default Ejercicio1;