import React from 'react'
import ItemCount from "../Itemcount/Itemcount";
import ItemListContainer from "../itemlistcontainer/ItemListContainer";
const Desayuno = () => {
    return (
        <div>
            <ItemCount min={0} max={10}/>
            <ItemListContainer/>
        </div>
    )
}

export default Desayuno
