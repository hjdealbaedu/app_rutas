import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import QuienesSomos from './pages/QuienesSomos'
import EmpleadoDetalle from './pages/EmpleadoDetalle'
import Mensaje from './pages/Mensaje'

function App() {
  const usuario = {
    nombre: "Henry De Alba",
    email: "hdealba3@cuc.edu.co",
    carrera: "Ingeniería de Sistemas",
    semestre: "7to semestre",
    mensaje: "¡Hola! Estoy aprendiendo React y me encanta crear aplicaciones web."
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container mt-4 flex-grow-1">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/empleado/:id" element={<EmpleadoDetalle />} />
          <Route path="/mensaje" element={<Mensaje usuario={usuario} />} />
        </Routes>
      </div>
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p className="mb-0">Desarrollado por Henry De Alba - Universidad de la Costa CUC - 2026</p>
      </footer>
    </div>
  )
}

export default App