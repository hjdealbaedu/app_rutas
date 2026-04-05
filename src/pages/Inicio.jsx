function Inicio() {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h1>Bienvenido a Mi Aplicación</h1>
          <hr />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">¿Qué es esta app?</h5>
              <p className="card-text">
                Esta es una aplicación creada con React y React Router DOM.
                Fue desarrollada como proyecto de la materia de Desarrollo Web.
                Aquí puedes navegar entre diferentes secciones usando el menú de arriba.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Tecnologías usadas</h5>
              <ul>
                <li>React 18</li>
                <li>React Router DOM v6</li>
                <li>Bootstrap 5</li>
                <li>Vite</li>
                <li>JSONPlaceholder API</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-body text-center">
              <h5 className="card-title">📋 Sección Inicio</h5>
              <p className="card-text">Información general sobre la aplicación</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-body text-center">
              <h5 className="card-title">👥 Quiénes Somos</h5>
              <p className="card-text">Lista de empleados con detalles individuales</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-body text-center">
              <h5 className="card-title">💬 Mensaje</h5>
              <p className="card-text">Información del usuario pasada por props</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inicio