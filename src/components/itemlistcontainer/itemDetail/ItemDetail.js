import React, { useState , useContext } from 'react'
import { Link } from 'react-router-dom'
import {useCartContext} from '../../Cart/cartContext'

import ItemCount from '../../Itemcount/Itemcount'


const ItemDetail = ({productos}) => {
  
   const [show, setshow] = useState(true)
   
   const {cartList, agregarAlCarrito} = useCartContext()

    console.log(cartList)

   const onAdd = (cant) => {
       console.log(cant)
        agregarAlCarrito({...productos, cantidad:cant})

        setshow(false)
       //console.log(`Usted ha comprado ${counter} productos de ${producto.name}`)
       //alert(`Usted ha comprado ${counter} productos de ${producto.name}`)
       
   } 

    return (
        <div className="ItemDetail">
            <img src={productos.img} alt={productos.name}></img>
            <h3>{productos.name}</h3>
            <h4>{productos.year}</h4>
            <h4>{productos.price}</h4>
            <p>{productos.description}</p>
            

       
        {show ? <ItemCount max={10} min={1} onAdd={onAdd} /> : 
        <div>
             <Link  to="/cart"><button>Ir al Carrito</button></Link>
             <Link to="/"><button>Seguir Comprando</button></Link>
             </div> }
            
       
       
        </div>
    )
}

export default ItemDetail