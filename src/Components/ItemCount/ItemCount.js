import './ItemCount.css'
import { Button } from '@mui/material';
import CartContext from '../../context/CartContext';
import { useState, useContext } from 'react';


const ItemCount = ({ setShowButton, product }) => {
    const { addProductToCart } = useContext(CartContext)
    const { stock } = product;
    const [cantidad, setCantidad] = useState(1);



    const addCount = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }

    const removeCount = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <>
            <label>Selecciona Cantidad</label>
            <div className='count-item'>
                <Button onClick={removeCount}>-</Button>
                <p>{cantidad}</p>
                <Button onClick={addCount}>+</Button>
            </div>
            <Button
                variant='outlined'
                onClick={() => {
                    setShowButton(true);
                    addProductToCart(product, cantidad)
                }}>Comprar</Button>
        </>
    )
}


export default ItemCount