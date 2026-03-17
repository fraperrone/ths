import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

function ModalAsesoria({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Solicitar Asesoría</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form action="mailto:tuemail@ejemplo.com" method="post" encType="text/plain">
          <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Tu nombre" name="nombre" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Tu correo" name="email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMensaje">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Escribe tu consulta"
              name="mensaje"
              required
            />
          </Form.Group>

          <Button variant="success" type="submit" onClick={handleClose}>
            Enviar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalAsesoria;