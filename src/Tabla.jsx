import React from "react";

const Tabla = (props) => {
  const promedio = (notas) => {
    if (notas.length == 0) {
      return 0;
    } else {
      let suma = notas.reduce((valorAnterior, valorActual) => {
        return valorAnterior + valorActual;
      }, 0);
      let promedio = suma / notas.length;
      return promedio;
    }
  };

  return (
    <div className="container">
      <table border="1" className="line_title">
        <thead>
          <tr>
            <th>Carrera</th>
            <th>Cantidad de Estudiantes</th>
            <th>Promedio de Calificaciones de los Estudiantes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Base de Datos</td>
            <td>{props.baseDeDatos.cantidadAlumnos}</td>
            <td>{promedio(props.baseDeDatos.notas)}</td>
          </tr>

          <tr>
            <td>Desarrollo Frontend</td>
            <td>{props.frontEnd.cantidadAlumnos}</td>
            <td>{promedio(props.frontEnd.notas)}</td>
          </tr>

          <tr>
            <td>Desarrollo Backend</td>
            <td>{props.backend.cantidadAlumnos}</td>
            <td>{promedio(props.backend.notas)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
