import { Container, Row, Col, Card, Image } from "react-bootstrap";
// import miFoto from "../assets/mi_foto.jpg"; // reemplazá con tu archivo real en src/assets

function SobreMiPage() {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={8} className="mx-auto">
          <Card>
            <Row className="g-0">
              <Col md={4} className="d-flex align-items-center justify-content-center p-3">
                {/* Espacio para tu foto */}
                <Image 
                  src={miFoto} 
                  alt="Foto de Franco Perrone" 
                  roundedCircle 
                  fluid 
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Sobre mí</Card.Title>
                  <Card.Text>
                    Soy <strong>Franco Perrone</strong>, Técnico en Higiene y Seguridad 
                    matriculado en el <strong>CPSH de la Provincia de Buenos Aires</strong>.
                  </Card.Text>
                  <Card.Text>
                    He trabajado en el desarrollo de <strong>planes de seguridad</strong> 
                    para obras y comercios, incluyendo pymes y distribuidoras.
                  </Card.Text>
                  <Card.Text>
                    Me especializo en la <strong>capacitación</strong> de equipos y en el 
                    seguimiento de documentación, tanto de forma <strong>virtual</strong> 
                    como <strong>presencial</strong>.
                  </Card.Text>
                  <Card.Text>
                    Mi objetivo es brindar soluciones claras y profesionales que transmitan 
                    confianza y mejoren la seguridad en cada entorno de trabajo.
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SobreMiPage;