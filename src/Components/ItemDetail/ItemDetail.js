import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'
import { useState } from 'react';

const ItemDetail = ({ data }) => {
    const { title, price, image, stock } = data;
    console.log("Data desde ItemDetail: ", data)
    const [cantidad, setCantidad] = useState(1)
    const [showButton, setShowButton] = useState(false)

    return (
        <div className='detail'>
            <div>
                <img src={`/${data.image}`} alt={"producto"} />
            </div>
            <div className='detailText'>
                <h2>{data.title}</h2>
                <p>${data.price}</p>
                {!showButton ?
                    <ItemCount
                        stock={data.stock}
                        cantidad={cantidad}
                        actualizarCantidad={setCantidad}
                        setShowButton={setShowButton}
                    />
                    :
                    <Button variant='outlined'><Link to='/cart'>Termina mi compra</Link></Button>}
            </div>
        </div>
    )
}

export default ItemDetail