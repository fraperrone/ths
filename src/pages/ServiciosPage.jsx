import { Container, Row, Col, Card } from "react-bootstrap";
import auditoriaImg from "../assets/auditoria_seguridad.jpg";
// import capacitacionImg from "../assets/capacitacion.jpg";
// import ergonomiaImg from "../assets/ergonomia.jpg";
// import planesImg from "../assets/planes_seguridad.jpg"; // nueva imagen en assets

function ServiciosPage() {
  const servicios = [
    {
      titulo: "Auditoría de Seguridad",
      descripcion: `Evaluación completa de riesgos en obras, comercios o industrias,
      verificando el cumplimiento normativo vigente. El objetivo es detectar
      puntos críticos y proponer medidas preventivas que garanticen la seguridad
      de trabajadores y clientes.`,
      imagen: auditoriaImg,
    },
    {
      titulo: "Capacitación",
      descripcion: `Cursos y talleres adaptados a cada empresa, tanto de forma
      virtual como presencial. Incluyen uso de equipos de protección personal,
      prevención de incendios, ergonomía y protocolos de emergencia.`,
      imagen: capacitacionImg,
    },
    {
      titulo: "Ergonomía",
      descripcion: `Análisis de puestos de trabajo en obras, comercios o industrias
      para prevenir lesiones y mejorar la productividad. Incluye recomendaciones
      sobre mobiliario, iluminación, pausas activas y adaptación de tareas según
      normativa vigente.`,
      imagen: ergonomiaImg,
    },
    {
      titulo: "Planes de Seguridad",
      descripcion: `Diseño, desarrollo y seguimiento de planes de seguridad
      adaptados a cada obra, comercio o industria. Incluye la creación de protocolos,
      documentación técnica, capacitaciones específicas y auditorías periódicas
      para garantizar el cumplimiento legal y la prevención de riesgos.`,
      imagen: planesImg,
    },
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Servicios en detalle</h2>
      <Row>
        {servicios.map((servicio, index) => (
          <Col key={index} md={6} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={servicio.imagen}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{servicio.titulo}</Card.Title>
                <Card.Text>{servicio.descripcion}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ServiciosPage;