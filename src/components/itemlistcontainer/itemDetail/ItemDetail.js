import React, { useState , useContext } from 'react'
import { Link } from 'react-router-dom'
import {useCartContext} from '../../Cart/cartcontext'

import ItemCount from '../../Itemcount/Itemcount'
import './ItemDetail.scss'

const ItemDetail = ({productos}) => {
  
   const [show, setshow] = useState(true)
   
   const {cartList, agregarAlCarrito} = useCartContext()

    console.log(cartList)

   const onAdd = (cant) => {
       console.log(cant)
        agregarAlCarrito({...productos, cantidad:cant})

        setshow(false)
       
       
   } 

    return (
    <>


        <div className="Item-Detail-Grid">
            <div className="Img-Detail">
            <img src={productos.img} alt={productos.name}></img>
            </div>

            <div className="Info-Detail">
                <h4>Precio : $ {productos.price}</h4>
            </div>

            <div className="Description-Detail">
                <div className="nombreYear">
                <h3>{productos.name}</h3>
                <h4>Año : {productos.year}</h4>

                </div>


                <p>{productos.description}</p>
            </div>
        
        <div className="Contador-Detail">
            {show ? <ItemCount max={10} min={1} onAdd={onAdd} /> : 
            <div>
                <Link  to="/cart"><button>Ir al Carrito</button></Link>
                <Link to="/"><button>Seguir Comprando</button></Link>
                </div> }
                
        
        
            </div>
        </div>
                
    </>
    )
}

export default ItemDetail