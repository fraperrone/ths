import { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

import emailjs from "emailjs-com";
import { useRef } from 'react'

function ModalAsesoria({ show, handleClose }) {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'TU_SERVICE_ID', // reemplazá con tu Service ID
        'TU_TEMPLATE_ID', // reemplazá con tu Template ID
        form.current,
        'TU_USER_ID', // reemplazá con tu User ID
      )
      .then(
        (result) => {
          alert('Mensaje enviado correctamente ✅')
          handleClose()
        },
        (error) => {
          alert('Error al enviar el mensaje ❌')
        },
      ).finally(() => {
        form.current.reset() // limpia el formulario después de enviar
        handleClose()
      })
  }

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Solicitar Asesoría</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tu nombre"
              name="nombre"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Tu correo"
              name="email"
              required
            />
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

          <Button variant="success" type="submit" >
            Enviar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default ModalAsesoria
