function Mensaje({ usuario }) {
  return (
    <div>
      <h1>Mensaje</h1>
      <hr />

      <div className="card">
        <div className="card-header bg-success text-white">
          <h4>Información del Usuario</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p><strong>Nombre:</strong> {usuario.nombre}</p>
              <p><strong>Email:</strong> {usuario.email}</p>
              <p><strong>Carrera:</strong> {usuario.carrera}</p>
            </div>
            <div className="col-md-6">
              <p><strong>Semestre:</strong> {usuario.semestre}</p>
              <p><strong>Mensaje:</strong> {usuario.mensaje}</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Mensaje