import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5 w-100">
      <div className="row mx-0">
        <div className="col-md-6 text-center text-md-start">
          <h5>Franco Perrone</h5>
          <p>Técnico en Higiene y Seguridad Laboral</p>
        </div>
        <div className="col-md-6 text-center text-md-end">
          <p>
            <a href="https://wa.me/5491112345678" className="text-white">
              WhatsApp
            </a>
          </p>
          <p className="small">
            © {new Date().getFullYear()} Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
