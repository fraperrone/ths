import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function Contacto() {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={8} className="mx-auto">
          <Card>
            <Card.Body>
              <Card.Title>Contacto</Card.Title>
              <Card.Text>
                Si querés más información sobre mis servicios o solicitar un presupuesto,
                completá el siguiente formulario y me pondré en contacto contigo.
              </Card.Text>

              <Form action="mailto:tuemail@ejemplo.com" method="post" encType="text/plain">
                <Form.Group className="mb-3" controlId="formNombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Tu nombre" name="nombre" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Tu correo" name="email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMensaje">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Escribe tu mensaje" name="mensaje" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Enviar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacto;