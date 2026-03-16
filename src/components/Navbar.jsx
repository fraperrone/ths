import { Navbar, Nav, Container, Button } from "react-bootstrap";

export default function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">Franco Perrone | Higiene & Seguridad</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="#servicios">Servicios</Nav.Link>
            {/* Para futuro: */}
            {/* <Nav.Link href="#proyectos">Proyectos</Nav.Link> */}
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <Button variant="outline-light" className="ms-3">
              Solicitar Asesoría
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


