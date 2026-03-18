import { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

import { useRef } from 'react'

function ModalAsesoria({ show, handleClose }) {
  const form = useRef()

  const [showConfirm, setShowConfirm] = useState(false)
  const [mensajeConfirm, setMensajeConfirm] = useState('')
  const [mensajeError, setMensajeError] = useState('')


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    e.stopPropagation()


    fetch("https://formcarry.com/s/lzP9H92173G", {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    })
      .then(response => response.json())
      .then(response => {
        if (response.code === 200) {
          //utilizamos el segundo modal
          setMensajeConfirm('Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto.')
          setShowConfirm(true)
          
        }
        else if (response.code === 422) {
          // Field validation failed
          setError(response.message)
          setMensajeConfirm('Error: ' + response.message)
          setShowConfirm(true)
        }
        else {
          // other error from formcarry
          setError(response.message)
          setMensajeConfirm('Error: ' + response.message)
          setShowConfirm(true)
        }
      })
      .catch(error => {
        // request related error.
        setError(error.message ? error.message : error);
        setMensajeConfirm('Error: ' + (error.message ? error.message : error))
        setShowConfirm(true)

      });

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
                value={name}
                onChange={(e) => setName(e.target.value)}

              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Tu correo"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

                value={message}
                onChange={(e) => setMessage(e.target.value)}
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