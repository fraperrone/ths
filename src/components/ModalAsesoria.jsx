import { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

import emailjs from 'emailjs-com'
import { useRef } from 'react'

function ModalAsesoria({ show, handleClose }) {
  const form = useRef()

  const [showConfirm, setShowConfirm] = useState(false)
  const [mensajeConfirm, setMensajeConfirm] = useState('')
  const [mensajeError, setMensajeError] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        import.meta.env.EMAILJS_SERVICE_ID, // reemplazá con tu Service ID
        import.meta.env.EMAILJS_TEMPLATE_ID, // reemplazá con tu Template ID
        form.current,
        import.meta.env.EMAILJS_USER_ID, // reemplazá con tu User ID
      )
      .then(
        (result) => {
          setMensajeConfirm('Mensaje enviado correctamente ✅')
          setShowConfirm(true)
          form.current.reset()
          handleClose()
        },
        (error) => {
          setMensajeConfirm('Error al enviar el mensaje ❌')
          setMensajeError(error.text)
          setShowConfirm(true)
        },
      )
      .finally(() => {
        form.current.reset() // limpia el formulario después de enviar
        handleClose()
      })
  }

  return (
    <>
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

            <Button variant="success" type="submit">
              Enviar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Modal secundario de confirmación */}
      <Modal show={showConfirm} onHide={() => setShowConfirm(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{mensajeConfirm}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{mensajeError}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowConfirm(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalAsesoria

// prueba comentario