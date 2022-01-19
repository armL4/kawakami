import React from 'react'
import { Link } from 'react-router-dom'
import imagen from '../../static/carrito.png'
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
            <li>
                <Link to="kart">
                    <div className='carro'>
                            <img className='carrito' src={imagen} alt="imagen" style={{width:"30px"}}/>
                            
                    </div>
                </Link>
            </li>
            </ul>
        </div>
    )
}

export default Sidebar
