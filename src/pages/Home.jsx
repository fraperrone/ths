// hacemos pagina home de mi servicio de higiene y seguridad
import React from 'react'
import Servicios from '../components/Servicios';

import { Container, Row, Col, Button, Card } from "react-bootstrap";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
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

      {/* Servicios */}
        <Servicios />

      {/* Contacto rápido */}
      <div className="bg-light py-5" id="contacto">
        <Container className="text-center">
          <h2>Contacto</h2>
          <p className="mb-4">¿Necesitás asesoría en higiene y seguridad laboral? Escribime ahora.</p>
          <Button variant="success" size="lg" href="https://wa.me/5491112345678" className="ms-3">
            WhatsApp
          </Button>
        </Container>
      </div>
    </>
  );
}