import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function QuienesSomos() {
  const [empleados, setEmpleados] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setEmpleados(data)
        setCargando(false)
      })
      .catch(err => {
        console.log(err)
        setCargando(false)
      })
  }, [])

  if (cargando) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p>Cargando empleados...</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Quiénes Somos</h1>
      <p>Conoce a nuestro equipo de trabajo. Haz clic en cualquier empleado para ver más detalles.</p>
      <hr />

      <div className="row">
        {empleados.map(empleado => (
          <div className="col-md-4 col-sm-6 mb-4" key={empleado.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{empleado.name}</h5>
                <p className="card-text">
                  <strong>Email:</strong> {empleado.email}<br />
                  <strong>Empresa:</strong> {empleado.company.name}
                </p>
                <Link to={`/empleado/${empleado.id}`} className="btn btn-primary">
                  Ver detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuienesSomos