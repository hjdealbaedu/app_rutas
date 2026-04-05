import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function EmpleadoDetalle() {
  const { id } = useParams()
  const [empleado, setEmpleado] = useState(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/' + id)
      .then(res => res.json())
      .then(data => {
        setEmpleado(data)
        setCargando(false)
      })
      .catch(err => {
        console.log(err)
        setCargando(false)
      })
  }, [id])

  if (cargando) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p>Cargando información del empleado...</p>
      </div>
    )
  }

  if (!empleado) {
    return <div className="alert alert-danger">No se encontró el empleado</div>
  }

  return (
    <div>
      <Link to="/quienes-somos" className="btn btn-secondary mb-3">
        ← Volver al listado
      </Link>

      <div className="card">
        <div className="card-header bg-primary text-white">
          <h3>{empleado.name}</h3>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <h5>Información Personal</h5>
              <p><strong>Nombre de usuario:</strong> {empleado.username}</p>
              <p><strong>Email:</strong> {empleado.email}</p>
              <p><strong>Teléfono:</strong> {empleado.phone}</p>
              <p><strong>Sitio web:</strong> {empleado.website}</p>
            </div>
            <div className="col-md-6">
              <h5>Dirección</h5>
              <p><strong>Calle:</strong> {empleado.address.street}</p>
              <p><strong>Suite:</strong> {empleado.address.suite}</p>
              <p><strong>Ciudad:</strong> {empleado.address.city}</p>
              <p><strong>Código postal:</strong> {empleado.address.zipcode}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <h5>Empresa</h5>
              <p><strong>Nombre:</strong> {empleado.company.name}</p>
              <p><strong>Frase:</strong> {empleado.company.catchPhrase}</p>
              <p><strong>BS:</strong> {empleado.company.bs}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmpleadoDetalle