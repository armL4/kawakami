import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {getFetchComida} from '../../productos/Desayuno'
import ItemDetail from '../itemDetail/ItemDetail'
import './itemDetailContainer.scss'

const ItemDetailContainer = () => {
    const [productos, setproductos] = useState({})

    const {detalleId} = useParams()
    useEffect(() => {
        
        getFetchComida
        .then(resp => setproductos(resp.find(prod => prod.id === detalleId)) )
      
    }, [])
    

   
    return (
        <div className="ItemDetailContainer">
            
        <ItemDetail productos={productos}/>

        </div>
    )
}

export default ItemDetailContainer
