import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from '../item/item.js'



const ItemList = ({desayuno}) => {
    return (
        <div className="desayuno row">
            { desayuno.map(desayuno => <Item key={desayuno.id} nombre ={desayuno.name}  img={desayuno.img} precio ={desayuno.price} year={desayuno.year} description={desayuno.description} /> )}
        </div>
    )
}

export default ItemList