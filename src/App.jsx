import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* hacemos el resto de las path */}
        {/* <Route path="/acerca-de" element={<AcercaDe />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} /> */}

      </Routes>
    </>
  )
}

export default App
