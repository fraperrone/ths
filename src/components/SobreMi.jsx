import { Container, Row, Col, Image } from 'react-bootstrap';

function SobreMi() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        {/* Columna de la foto */}
        <Col md={4} className="text-center">
          <Image 
            src="../assets/qrmatricula.jpg"   // coloca tu foto en public/mi-foto.jpg
            alt="Foto de Franco Perrone Rey"
            roundedCircle
            fluid
          />
        </Col>

        {/* Columna del texto */}
        <Col md={8}>
          <h2>Sobre mí</h2>
          <p>
            Soy <strong>Técnico en Higiene y Seguridad Laboral</strong>, matriculado en el 
            <strong> Colegio Profesional de Seguridad e Higiene (CPSH)</strong> de la Provincia de Buenos Aires.
          </p>
          <p>
            Tengo experiencia en la <strong>industria de la construcción</strong> y en distintos 
            <strong> comercios e industrias similares</strong>, desarrollando planes de seguridad, 
            capacitaciones y seguimiento documental.
          </p>
          <p>
            Mi objetivo es garantizar ambientes de trabajo seguros, eficientes y en cumplimiento 
            con la normativa vigente.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default SobreMi;
