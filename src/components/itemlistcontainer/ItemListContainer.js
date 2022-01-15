import {useState, useEffect} from 'react'
import {getFetchDesayuno} from '../productos/Desayuno'
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
        if(tipoComida==="Desayuno"){ 
        getFetchDesayuno
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false) )}
        
            if(tipoComida==="Almuerzo"){
                getFetchAlmuerzo
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false) )
            }
            /* else{} */
        
    },  [])
    

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

/*------------almuerzo----------------- */
/* const ItemListContainerAlmuerzo = () => {
    const [Almuerzo, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        getFetchAlmuerzo
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false) )
    }, [])
    

    return (
        <>
        
        <div className="itemListContainer">
        <div className="cards">
        {
        loading ?  <Spiner/> :<ItemList Almuerzo={Almuerzo}/>
        }
        </div>
        </div>
        </>
    )
} */

export default ItemListContainer

