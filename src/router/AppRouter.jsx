import { Routes, Route } from 'react-router-dom'
import Home from '../pages/HomePage'

import MainLayout from '../layouts/MainLayout'
// actualizamos con el mainlayout

// importamos las paginas
import ContactoPage from '../pages/ContactoPage'
import SobreMiPage from '../pages/SobreMiPage'
import ServiciosPage from '../pages/ServiciosPage'
import HomePage from '../pages/HomePage'




export default function AppRouter() {
  return (
    <div style={{ paddingTop: '70px' }}>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='contacto' element={<ContactoPage />} />
          <Route path='sobre-mi' element={<SobreMiPage />} />
          <Route path='servicios' element={<ServiciosPage />} />
          <Route path='home' element={<HomePage />} />

          {/* creamos routa para no encontrada que vuelva a home */}
          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}
