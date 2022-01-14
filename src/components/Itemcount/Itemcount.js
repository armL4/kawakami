import React , {useState} from 'react';
import "./ItemCount.scss"


const ItemCount = ({min,max}) => {

    
    
    const [counter, setCounter] =  useState(min);   
    const [stock , setStock]  = useState(9);
    
    const onAdd = () => {
        (counter < max) && setCounter(counter +1) ;
        (stock >= 1) && setStock(stock - 1);

    }

    const onRest = () => {
       (counter > min ) &&  setCounter(counter -1) ;
       (stock < 9) && setStock(stock + 1);
    }

    const resetear = () => {
        setCounter(min)
        setStock(9)
    }
    
    
    return (
        <div className="producto">
            
            
        </div>
    )
}

export default ItemCount