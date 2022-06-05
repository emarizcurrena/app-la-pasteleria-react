import './ItemCount.css'
import { Button } from '@mui/material';
import { useState } from 'react';

const ItemCount = ({ stock, cantidad, setShowButton, actualizarCantidad }) => {

    const addCount = () => {
        if (cantidad < stock) {
            actualizarCantidad(cantidad + 1)
        }
    }

    const removeCount = () => {
        if (cantidad > 1) {
            actualizarCantidad(cantidad - 1)
        }
    }

    const onAdd = () => {
        console.log(cantidad)
    }

    return (
        <>
            <label>Selecciona Cantidad</label>
            <div className='count-item'>
                <Button onClick={removeCount}>-</Button>
                <p>{cantidad}</p>
                <Button onClick={addCount}>+</Button>
            </div>
            <Button variant='outlined' onClick={() => setShowButton(true)}>Comprar</Button>
        </>
    )
}


export default ItemCount