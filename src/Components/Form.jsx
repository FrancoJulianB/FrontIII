import React, { useState } from "react";
import Tabla from "./Tabla";

const Form = () => {
  function handleSubmit(event) {
    event.preventDefault();
    const carrera = event.target.querySelector(".materia").value;
    const nota = parseFloat(event.target.querySelector(".nota").value);
    if (carrera == "" || nota > 10 || nota < 0) {
      alert("Error. Revise los datos ingresados");
    } else {
      switch (carrera) {
        case "backend":
          setBackend((prevState) => ({
            cantidadAlumnos: prevState.cantidadAlumnos + 1,
            notas: [...prevState.notas, nota],
          }));
          break;
        case "database":
          setBaseDeDatos((prevState) => ({
            cantidadAlumnos: prevState.cantidadAlumnos + 1,
            notas: [...prevState.notas, nota],
          }));
          break;
        case "frontend":
          setFrontEnd((prevState) => ({
            cantidadAlumnos: prevState.cantidadAlumnos + 1,
            notas: [...prevState.notas, nota],
          }));
          break;
        case "devops":
          alert(
            "Error, solo puede seleccionar una opcion presente en la tabla"
          );
          break;
      }
    }
  }
  const [backend, setBackend] = useState({
    cantidadAlumnos: 0,
    notas: [],
  });
  const [baseDeDatos, setBaseDeDatos] = useState({
    cantidadAlumnos: 0,
    notas: [],
  });
  const [frontEnd, setFrontEnd] = useState({
    cantidadAlumnos: 0,
    notas: [],
  });

  return (
    <div className="container">
      <h1>Promedio de estudiantes por carrera</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="container_input">
          <select className="materia">
            <option selected disabled>
              Selecione una carrera
            </option>
            <option value="database">Base de Datos</option>
            <option value="backend">Desarrollo Backend</option>
            <option value="frontend">Desarrollo Frontend</option>
            <option value="devops">Devops</option>
          </select>
          <input type="number" className="nota" />
        </div>
        <input type="submit" value="Salvar" />
      </form>

      <Tabla backend={backend} frontEnd={frontEnd} baseDeDatos={baseDeDatos} />
    </div>
  );
};

export default Form;
