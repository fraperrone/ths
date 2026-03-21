import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'

import MainLayout from '../layouts/MainLayout'
// actualizamos con el mainlayout




export default function AppRouter() {
  return (
    <div style={{ paddingTop: '70px' }}>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />

          {/* creamos routa para no encontrada que vuelva a home */}
          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}
