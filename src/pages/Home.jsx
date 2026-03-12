// hacemos pagina home de mi servicio de higiene y seguridad
import React from 'react'

import { Container, Row, Col, Button, Card } from "react-bootstrap";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-dark text-white text-center py-5">
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

      {/* Servicios */}
      <Container className="py-5" id="servicios">
        <h2 className="text-center mb-4">Servicios</h2>
        <Row>
          <Col md={4}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>Auditorías de Seguridad</Card.Title>
                <Card.Text>
                  Evaluación integral de riesgos y cumplimiento de normativas en tu empresa.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>Capacitaciones</Card.Title>
                <Card.Text>
                  Programas de formación en higiene y seguridad para tu equipo de trabajo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>Asesoría Normativa</Card.Title>
                <Card.Text>
                  Consultoría especializada para garantizar el cumplimiento legal y evitar sanciones.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Contacto rápido */}
      <div className="bg-light py-5" id="contacto">
        <Container className="text-center">
          <h2>Contacto</h2>
          <p className="mb-4">¿Necesitás asesoría en higiene y seguridad laboral? Escribime ahora.</p>
          <Button variant="primary" size="lg" href="mailto:tuemail@ejemplo.com">
            Enviar Email
          </Button>
          <Button variant="success" size="lg" href="https://wa.me/5491112345678" className="ms-3">
            WhatsApp
          </Button>
        </Container>
      </div>
    </>
  );
}