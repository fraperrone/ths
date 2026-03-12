import { Container, Row, Col, Card } from 'react-bootstrap'

export default function Servicios() {
  return (
    <Container className="py-5" id="servicios">
      <h2 className="text-center mb-4">Servicios</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Img
              variant="top"
              src="../images/auditoria_seguridad.jpg"
              alt="Auditorías"
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>Auditorías de Seguridad</Card.Title>
              <Card.Text>
                Evaluación integral de riesgos y cumplimiento de normativas en
                tu empresa.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Img
              variant="top"
              src="../images/capacitacion_seguridad.jpg"
              alt="Capacitaciones"
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>Capacitaciones</Card.Title>
              <Card.Text>
                Programas de formación en higiene y seguridad para tu equipo de
                trabajo.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Img
              variant="top"
              src="../images/asesoria_normativa.jpg"
              alt="Asesoría Normativa"
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>Asesoría Normativa</Card.Title>
              <Card.Text>
                Consultoría especializada para garantizar el cumplimiento legal
                y evitar sanciones.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
