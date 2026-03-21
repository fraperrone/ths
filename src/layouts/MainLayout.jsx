// diseniamos el mainlayout para que sea el contenedor de toda la app, es decir, el header, el footer y el main donde se renderizan las rutas
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import MyNavbar from '../components/Navbar'

export default function MainLayout() {
  return (
    <div>
      <MyNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

