import React from 'react'
import "./kart.scss"
import ItemCount from '../Itemcount/Itemcount'
const Cart = ({nombre, img, precio,year,description}) => {
    return (
        <div className="itemContenedor ">
            <img src={img} alt={nombre}></img>
            <h3 className="name">{nombre}</h3>
            <p className="description">{description}</p>
            <p>Año {year}</p>
            <hr></hr>
            <h4>Precio: $ {precio}</h4>
            
            <ItemCount max={10} min={1} />
            <div className="buy">
            
            </div>
        </div>
    )
}
export default Cart
