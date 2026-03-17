import { Navbar, Nav, Container, Button } from 'react-bootstrap'

import ModalAsesoria from './ModalAsesoria'
import { useState } from 'react'

export default function MyNavbar() {
  // Estado que controla si el modal está abierto o cerrado
  const [showModal, setShowModal] = useState(false)

  // Funciones que cambian el estado
  const handleOpen = () => setShowModal(true) // abre el modal
  const handleClose = () => setShowModal(false) // cierra el modal

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          Franco Perrone | Higiene & Seguridad
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="#servicios">Servicios</Nav.Link>
            {/* Para futuro: */}
            {/* <Nav.Link href="#proyectos">Proyectos</Nav.Link> */}
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <Button variant="outline-light" className="ms-3" onClick={handleOpen}>
              Solicitar Asesoría
            </Button>
            {/* Modal separado en otro componente */}
            <ModalAsesoria show={showModal} handleClose={handleClose} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
