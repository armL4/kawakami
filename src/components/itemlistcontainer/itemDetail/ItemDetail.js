import React, { useState , useContext } from 'react'
import { Link } from 'react-router-dom'
import {useCartContext} from '../../Cart/cartcontext'

import ItemCount from '../../Itemcount/Itemcount'
import './ItemDetail.scss'

const ItemDetail = ({producto}) => {
  
   const [show, setshow] = useState(true)
   
   const {cartList, agregarAlCarrito} = useCartContext()

    console.log(cartList)

   const onAdd = (cant) => {
       console.log(cant)
        agregarAlCarrito({...producto, cantidad:cant})

        setshow(false)
       //console.log(`Usted ha comprado ${counter} productos de ${producto.name}`)
       //alert(`Usted ha comprado ${counter} productos de ${producto.name}`)
       
   } 

    return (
    <>


        <div className="Item-Detail-Grid">
            <div className="Img-Detail">
            <img src={producto.img} alt={producto.name}></img>
            </div>

            <div className="Info-Detail">
                <h4>Precio : $ {producto.price}</h4>
            </div>

            <div className="Description-Detail">
                <div className="nombreYear">
                <h3>{producto.name}</h3>
                <h4>Año : {producto.year}</h4>

                </div>


                <p>{producto.description}</p>
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