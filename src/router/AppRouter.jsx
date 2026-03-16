import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'

export default function AppRouter() {
  return (
    <div style={{ paddingTop: '70px' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* hacemos el resto de las path */}
        {/* <Route path="/acerca-de" element={<AcercaDe />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} /> */}
      </Routes>
    </div>
  )
}
