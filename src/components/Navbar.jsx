// hacemos el navbar
import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/acerca-de">Acerca de</a></li>
                <li><a href="/servicios">Servicios</a></li>
                <li><a href="/contacto">Contacto</a></li>
            </ul>
        </nav>
    )
}

export default Navbar