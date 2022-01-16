import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {getFetchComida} from '../../productos/Desayuno'
import ItemDetail from '../itemDetail/ItemDetail'
import Spiner from '../../spinner/Spinner'

const ItemDetailContainer = () => {
    const [productos, setproductos] = useState({})
    const [loading, setLoading] = useState(true)
    const {detalleId} = useParams()
    useEffect(() => {
        
        getFetchComida
        .then(resp => setproductos(resp.find(prod => prod.id == detalleId)) )
        .catch(err => console.log(err))
        .finally(()=> setLoading(false) )
        },  [])
    
    

   
    return (
        <div className="ItemDetailContainer">
            
       {
        loading ?  <Spiner/> :<ItemDetail productos={productos}/>
        }

        </div>
    )
}

export default ItemDetailContainer
