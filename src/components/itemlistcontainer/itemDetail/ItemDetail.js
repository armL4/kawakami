import React from 'react'

import './ItemDetail.scss'
import ItemCount from '../../Itemcount/Itemcount'
const ItemDetail = ({productos}) => {
  

    return (
        <div className="ItemDetail">
            <img src={productos.img} alt={productos.name}></img>
            <h3 className='name'>{productos.name}</h3>
            <h4>{productos.year}</h4>
            <hr></hr>
            <h4>{productos.price}</h4>
            <p className='description'>{productos.description}</p>
            <ItemCount max={10} min={1} />
            <div className="buy">
            <button>Comprar</button></div>
        </div>
    )
}

export default ItemDetail
