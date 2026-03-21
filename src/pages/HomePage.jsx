// hacemos pagina home de mi servicio de higiene y seguridad
import Servicios from '../components/Servicios'
import ContactoRapido from '../components/ContactoRapido'
import Hero from '../components/Hero'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Servicios */}
      <Servicios />

      {/* Contacto rápido */}
      <ContactoRapido />
    </>
  )
}
