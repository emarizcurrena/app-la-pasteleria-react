import { useNavigate } from 'react-router-dom'
import './Card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../context/CartContext'

//Functional Component
const CardItem = (product) => {

    const { image, title, price, stock, id } = product;

    const { addProductToCart } = useContext(CartContext)

    const [open, setOpen] = useState(false)
    const navigate = useNavigate();
    console.log("producto id: ", id)
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Card sx={{ maxWidth: 275 }} className="card-item-container">
            <CardContent>
                <div className="card-item">
                    <div>
                        <img src={`/${image}`} alt={"producto"} />
                        <Button variant={'contained'} className="card-btn-details" onClick={() => {
                            navigate(`/product/${id}`);
                        }}>
                            Ver Detalle
                        </Button>
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                    {/* <Button variant={'outlined'} onClick={() => setOpen(true)}>Detalle</Button> */}
                </div>
                <ItemCount product={product} />
                {/* <Button variant={'contained'} className='card-item-button' onClick={() => addProductToCart({ image, title, price, stock, id })}>Agregar al carrito</Button> */}
            </CardContent>
        </Card>
    )
}

export default CardItem