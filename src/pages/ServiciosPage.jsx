import { Container, Row, Col, Card } from 'react-bootstrap'
import auditoriaImg from '../assets/auditoria_seguridad.jpg'
import ContactoRapido from '../components/ContactoRapido'
// import capacitacionImg from "../assets/capacitacion.jpg";
// import ergonomiaImg from "../assets/ergonomia.jpg";
// import planesImg from "../assets/planes_seguridad.jpg"; // nueva imagen en assets

function ServiciosPage() {
  const servicios = [
    {
      titulo: 'Auditoría de Seguridad',
      descripcion: `Evaluación completa de riesgos en obras, comercios o industrias,
      verificando el cumplimiento normativo vigente. El objetivo es detectar
      puntos críticos y proponer medidas preventivas que garanticen la seguridad
      de trabajadores y clientes.`,
    },
    {
      titulo: 'Capacitación',
      descripcion: `Cursos y talleres adaptados a cada empresa, tanto de forma
      virtual como presencial. Incluyen uso de equipos de protección personal,
      prevención de incendios, ergonomía y protocolos de emergencia.`,
    },
    {
      titulo: 'Ergonomía',
      descripcion: `Análisis de puestos de trabajo en obras, comercios o industrias
      para prevenir lesiones y mejorar la productividad. Incluye recomendaciones
      sobre mobiliario, iluminación, pausas activas y adaptación de tareas según
      normativa vigente.`,
    },
    {
      titulo: 'Planes de Seguridad',
      descripcion: `Diseño, desarrollo y seguimiento de planes de seguridad
      adaptados a cada obra, comercio o industria. Incluye la creación de protocolos,
      documentación técnica, capacitaciones específicas y auditorías periódicas
      para garantizar el cumplimiento legal y la prevención de riesgos.`,
    },
    {
      titulo: 'Asesoría Personalizada',
      descripcion: `Brindo asesoramiento individualizado para resolver dudas específicas,
      optimizar procesos de seguridad y garantizar el cumplimiento normativo en
      cada entorno laboral. Mi objetivo es ofrecer soluciones claras y profesionales
      que transmitan confianza y mejoren la seguridad en cada proyecto.`,
    },
    {
      titulo: 'Visados y Trámites',
      descripcion: `Gestión de visados y trámites necesarios para obras, comercios o
      industrias, asegurando el cumplimiento de requisitos legales y normativos.
      Incluye la preparación de documentación técnica, coordinación con autoridades
      competentes y seguimiento de procesos administrativos.`,
    },
    {
      titulo: 'Plan de evacuacion',
      descripcion:
        'Diseño y desarrollo de planes de evacuación adaptados a cada obra, comercio o industria. Incluye la creación de protocolos de emergencia, señalización adecuada, capacitación del personal y simulacros periódicos para garantizar una respuesta efectiva ante situaciones de emergencia.',
    },
    {
      titulo: 'Estudio de carga de fuego',
      descripcion:
        'Realización de estudios de carga de fuego para obras, comercios o industrias, evaluando los materiales presentes y su potencial de combustión. Este análisis es fundamental para diseñar estrategias de prevención de incendios, seleccionar sistemas de protección adecuados y cumplir con la normativa vigente en materia de seguridad contra incendios.',
    },
  ]

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Servicios en detalle</h2>
      <Row>
        {servicios.map((servicio, index) => (
          <Col key={index} md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{servicio.titulo}</Card.Title>
                <Card.Text>{servicio.descripcion}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <ContactoRapido></ContactoRapido>
    </Container>
  )
}

export default ServiciosPage
