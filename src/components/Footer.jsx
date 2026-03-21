// importamos matricula
import matricula from '../assets/matricula.jpg'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5 w-100">
      <div className="row mx-0">
        <div className="col-md-6 text-center text-md-start">
          <h5>Franco Perrone</h5>
          <p>Técnico en Higiene y Seguridad Laboral</p>
          <p>Matrícula CPSH: THS-000266 PBA</p>
          {/* agregamos el link de cpsh  */}
          <p>
            <a
              href="https://cpsh.com.ar/buscador-de-profesionales-3/"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Verificación de Matrícula
            </a>
          </p>
          {/* agregamos foto de la matricula */}
          <img
            src={matricula}
            alt="Matrícula CPSH"
            style={{
              maxWidth: '250px',
              marginTop: '10px',
              marginRight: '10px',
              marginBottom: '10px',
            }}
          />
        </div>

        {/* hacemos columna central */}

        <div className="col-md-6 text-center text-md-end">
          <p>
            <a
              href="https://wa.me/5491170655032"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </p>
          <p className="small">
            © {new Date().getFullYear()} Todos los derechos reservados
          </p>
        </div>
      </div>
      {/* hacemos un row nuevo con una linea para poner mi autoria diseno y amntenimiento by franco perrone rey y mi contacto ponemos wi wp*/}
      <div className="row mx-0 mt-3">
        <div className="col text-center">
          <p className="small">
            Diseño y mantenimiento por Franco Perrone Rey | Contacto:{" "}
            <a
              href="https://wa.me/5491170655032"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
