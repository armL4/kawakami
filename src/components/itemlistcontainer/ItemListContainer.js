import {useState, useEffect} from 'react'
import {getFetch} from '../productos/Desayuno'
import Spiner from '../spinner/Spinner.js'
import ItemList from '../itemlist/ItemLIst.js'
import './ItemListContainer.scss';
const ItemListContainer = () => {
    const [desayuno, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        getFetch
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false) )
    }, [])
    

    return (
        <>
        
        <div className="itemListContainer">
        <div className="cards">
        {
        loading ?  <Spiner/> :<ItemList desayuno={desayuno}/>
        }
        </div>
        </div>
        </>
    )
}

export default ItemListContainer
