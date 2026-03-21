import { Navbar, Nav, Container, Button } from 'react-bootstrap'

import ModalAsesoria from './ModalAsesoria'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom' // importamos useNavigate para navegación programática

export default function MyNavbar() {
  // Estado que controla si el modal está abierto o cerrado
  const [showModal, setShowModal] = useState(false)

  // Funciones que cambian el estado
  const handleOpen = () => setShowModal(true) // abre el modal
  const handleClose = () => setShowModal(false) // cierra el modal

  // uilizamos useNavigate
  const navigate = useNavigate()

  // hacemos navigate generico
  const handleNavigate = (path) => {
    navigate(path) // navega a la ruta especificada
  }


  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          Franco Perrone | Higiene & Seguridad
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => handleNavigate('/')}>
              Inicio
            </Nav.Link>
            {/* Servicio en mantenimiento */}
            {/* <Nav.Link onClick={() => handleNavigate('/servicios')}>
              Servicios
            </Nav.Link> */}
            {/* Para futuro: */}
            {/* <Nav.Link href="#proyectos">Proyectos</Nav.Link> */}
            <Nav.Link onClick={() => handleNavigate('/contacto')}>
              Contacto
            </Nav.Link>
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
