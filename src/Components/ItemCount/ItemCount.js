import './ItemCount.css'
import { Button } from '@mui/material';
import { useState } from 'react';

const ItemCount = ({ stock }) => {

    const [count, setCount] = useState(1)

    const addCount = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const removeCount = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const onAdd = () => {
        console.log(count)
    }

    return (
        <>
            <div className='count-item'>
                <Button onClick={removeCount}>-</Button>
                <p>{count}</p>
                <Button onClick={addCount}>+</Button>
            </div>
            <button onClick={onAdd}>Comprar</button>
        </>
    )
}


export default ItemCount