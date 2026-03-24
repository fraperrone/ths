// creamos la pagina archivo donde se van a descar public/pdf/ejemplo.pdf
import React from 'react'

export default function ArchivosPage() {
  return (
    <div className="container mt-5">
      <h1>Archivos</h1>
      <p>Aquí puedes descargar los archivos PDF relacionados con CPSH.</p>
      <ul>
        <li>
          <a
            href="pdfs/MATRICULAS%20Y%20HONORARIOS.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Matrículas y Honorarios
          </a>{' '}
        </li>
        <li>
            <a
                href="pdfs/VISADOS%20DE%20ENCOMIENDAS.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                Ver Visados de Encomiendas
            </a>

        </li>
        {/* Agrega más archivos según sea necesario */}
      </ul>
    </div>
  )
}
