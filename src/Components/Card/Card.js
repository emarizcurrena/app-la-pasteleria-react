import { useNavigate } from 'react-router-dom'
import './Card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import ItemCount from '../ItemCount/ItemCount';

//Functional Component
const CardItem = ({ image, title, price, stock, id }) => {

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
                    <ItemCount stock={stock} />
                    {/* <Button variant={'outlined'} onClick={() => setOpen(true)}>Detalle</Button> */}
                </div>
            </CardContent>
            {/* {open && (
                <Modal handleClose={handleClose} open={open}>
                    <h2>Detalle</h2>
                    <img src={`./${image}`} alt={"producto"} />
                </Modal>
            )} */}
        </Card>
    )
}

export default CardItem