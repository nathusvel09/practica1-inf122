import "../style/style.css";
import { useState } from "react";


function Ejercicio5() {
  const initialState = {
    userName: "",
    fullName: "",
    age: ""
  };
  const [form, setValues] = useState(initialState);

  const [display, setDisplay] = useState(false);

  const printValues = (e) => {
    e.preventDefault();
    setDisplay(true);
  };

  const updateField = (i) => {
    setValues({
      ...form,
      [i.target.name]: i.target.value
    });
  };

  return (
    <div className="container">
        <form onSubmit={printValues}>
        <div>
          <label htmlFor="userName">
            Usuario:
            <input
              value={form.userName || ""}
              name="userName"
              onChange={updateField}
            />
          </label>
        </div>
        <br />
        <div>
          <label htmlFor="fullName">
            Nombre:
            <input
              value={form.fullName || ""}
              name="fullName"
              type="text"
              onChange={updateField}
            />
          </label>
        </div>
        <br />
        <div>
          <label htmlFor="age">
            Edad:
            <input value={form.age || ""} name="age" onChange={updateField} />
          </label>
        </div>
        <br />
        <button  className="boton">Guardar</button>
        {display && (
          <>
            <h4>Request Sent to DB with below request data</h4>
            <ul>
              <li>Usuario: {form.userName.toUpperCase()}</li>
              <li>Nombre: {form.fullName.toUpperCase()}</li>
              <li>Edad: {form.age}</li>
            </ul>
          </>
        )}
      </form>
    </div>
    
  );
}
export default Ejercicio5;