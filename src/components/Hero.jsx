import { Container, Button } from "react-bootstrap";


export default function Hero() {
  return (
    <div className="bg-light text-center py-5">
        <Container>
          <h1 className="display-4">Soluciones en Higiene y Seguridad Laboral</h1>
          <p className="lead mt-3">
            Asesoría técnica para empresas y profesionales, con cumplimiento normativo y enfoque práctico.
          </p>
          <Button variant="outline-light" size="lg" href="#contacto" className="mt-4">
            Solicitar Asesoría
          </Button>
        </Container>
      </div>
  )
}