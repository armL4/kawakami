import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from '../item/item.js'



const ItemList = ({productos}) => {
    return (
        <div className="desayuno row">
            { productos.map(productos => 
            <Item key={productos.id}
                nombre ={productos.name} 
                img={productos.img} 
                precio ={productos.price} 
                year={productos.year} 
                description={productos.description} /> )}
        </div>
    )
}


export default ItemList