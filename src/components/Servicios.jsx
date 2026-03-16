import { Container, Row, Col, Card } from 'react-bootstrap'

import auditoriaSeguridad from '../assets/auditoria_seguridad.jpg'
import capacitacionSeguridad from '../assets/capacitacion_seguridad.jpg'
import asesoriaNormativa from '../assets/asesoria_normativa.jpg'




export default function Servicios() {

  // lo normalizamos como map

  const servicios = [
    {
      title: 'Auditorías de Seguridad',
      description: 'Evaluación integral de riesgos y cumplimiento de normativas en tu empresa.',
      image: auditoriaSeguridad,
    },
    {
      title: 'Capacitaciones',
      description: 'Programas de formación en higiene y seguridad para tu equipo de trabajo.',
      image: capacitacionSeguridad,
    },
    {
      title: 'Asesoría Normativa',
      description: 'Consultoría especializada para garantizar el cumplimiento legal y evitar sanciones.',
      image: asesoriaNormativa,
    },
  ]

  return (
    
    <Container className="my-5">
      <h1 className="text-center mb-4">Nuestros Servicios</h1>
      <Row>
        {servicios.map((servicio, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={servicio.image} alt={servicio.title} style={
                {
                  height: "200px",
                  objectFit: "cover",
                  width: "100%"

                }
              } />
              <Card.Body>
                <Card.Title>{servicio.title}</Card.Title>
                <Card.Text>{servicio.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
