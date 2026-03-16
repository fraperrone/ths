import { Container, Button } from 'react-bootstrap'

export default function ContactoRapido() {
  return (
    <div className="bg-light py-5" id="contacto">
      <Container className="text-center">
        <h2>Contacto</h2>
        <p className="mb-4">
          ¿Necesitás asesoría en higiene y seguridad laboral? Escribime ahora.
        </p>
        <Button
          variant="success"
          size="lg"
          href="https://wa.me/5491112345678"
          className="ms-3"
        >
          WhatsApp
        </Button>
      </Container>
    </div>
  )
}
