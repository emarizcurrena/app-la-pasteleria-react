import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react';

const ItemDetail = ({ data }) => {
    const { title, price, image, stock } = data;
    console.log("Data desde ItemDetail: ", data)

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
                        setShowButton={setShowButton}
                        product={data}
                    />
                    :
                    <Button variant='outlined'><Link to='/cart'>Termina mi compra</Link></Button>}
            </div>
        </div>
    )
}

export default ItemDetail