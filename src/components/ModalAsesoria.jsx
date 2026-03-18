import { useState, useRef } from 'react'
import { Modal, Form, Button, Spinner } from 'react-bootstrap'

function ModalAsesoria({ show, handleClose }) {
  const form = useRef()

  const [showConfirm, setShowConfirm] = useState(false)
  const [mensajeConfirm, setMensajeConfirm] = useState('')
  const [mensajeError, setMensajeError] = useState('')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [loading, setLoading] = useState(false) // nuevo estado

  const sendEmail = (e) => {
    e.preventDefault()
    e.stopPropagation()

    setLoading(true) // activa spinner

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
          setMensajeConfirm('Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto.')
          setShowConfirm(true)
        } else {
          setMensajeConfirm('Error: ' + response.message)
          setMensajeError(response.message)
          setShowConfirm(true)
        }
      })
      .catch(error => {
        setMensajeConfirm('Error: ' + (error.message ? error.message : error))
        setMensajeError(error.message ? error.message : error)
        setShowConfirm(true)
      })
      .finally(() => {
        setLoading(false) // desactiva spinner
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

            <Button variant="success" type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />{" "}
                  Enviando...
                </>
              ) : (
                "Enviar"
              )}
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