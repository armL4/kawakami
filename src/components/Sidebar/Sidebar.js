import React from 'react'
import { Link } from 'react-router-dom'

import "./Sidebar.scss";
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul>
            <li>
            <input type="text" className='buscador'/>
            </li>
            <li>
                <Link to="/">ofertas</Link>
            </li>
            <li>
                <Link to="/categorias/desayuno">desayuno</Link>
            </li>
            <li>
                <Link to="/categorias/almuerzo">almuerzo</Link>
            </li>
            <li>
                <Link to="/categorias/cena">cena</Link>
            </li>
            <li></li>
            </ul>
        </div>
    )
}

export default Sidebar
