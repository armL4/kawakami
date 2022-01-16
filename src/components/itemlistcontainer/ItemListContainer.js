import {useState, useEffect} from 'react'
import {getFetchComida} from '../productos/Desayuno'
import {getFetchAlmuerzo} from '../productos/almuerzo'
import Spiner from '../spinner/Spinner.js'
import ItemList from '../itemlist/ItemLIst.js'
import './ItemListContainer.scss';
import { useParams } from 'react-router-dom'
const ItemListContainer= () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    
    const {tipoComida} = useParams()
    
    
    useEffect(() => {
        
        getFetchComida
        .then(resp => setProductos(resp.filter(comida => comida.category===tipoComida)))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false) )
        },  [tipoComida])
    

    return (
        <>
        
        <div className="itemListContainer">
        <div className="cards">
        {
        loading ?  <Spiner/> :<ItemList productos={productos}/>
        }
        </div>
        </div>
        </>
    )
}


export default ItemListContainer

