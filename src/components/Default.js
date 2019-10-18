import React from "react";

export default function Default(props) {
  console.log(props);

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
          <h1 className="display-3">404</h1>
          <h1>error forjemos otro!</h1>
          <h2>Muy fumado?? La Pagina no a sido Encontrada</h2>
          <h3>
            the requested URL{" "}
            <span className="text-danger">"{props.location.pathname}"</span>
            no ha sido encontrada
          </h3>
        </div>
      </div>
    </div>
  );
}
