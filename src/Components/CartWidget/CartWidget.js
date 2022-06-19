import './CartWidget.css'
import { useState, useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete'
import CartContext from '../../context/CartContext';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { cartListItems, removeProductToCart } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const hasItems = cartListItems.length > 0;

    return (
        <div className='cart-container-icon'>
            <ShoppingCartIcon
                color={'white'}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            {cartListItems.reduce((prevValue, nextItem) => { return prevValue + nextItem.qty }, 0)}
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <div className='container-item-list-cart'>
                    {hasItems ?
                        <>
                            <h3 className='titulo-carrito'>Carrito:</h3>
                            {cartListItems.map((item) => {
                                return (
                                    <div className='item-cart-prod' key={item.id}>
                                        <div className='cart-prod__image'>
                                            <img src={`/${item.image}`} alt="prod carrito" />
                                        </div>
                                        <div className='cart-prod__info'>
                                            <p>{item.title}</p>
                                            <span>$ {item.price}</span>
                                            <p>cantidad: {item.qty}</p>
                                            <p>Subtotal: ${item.price * item.qty}</p>
                                        </div>
                                        <div className='cart-prod__action'>
                                            <button onClick={() => removeProductToCart(item.id)}>
                                                <DeleteIcon />
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                            <p className='cart-prod__total'>
                                {cartListItems.reduce((prevValue, nextItem) => { return prevValue + nextItem.qty }, 0)} Items en el carro
                            </p>
                            <Button variant='outlined'><Link to='/cart'>Termina mi compra</Link></Button>
                        </>
                        :
                        <p>No hay productos agregados al carrito</p>
                    }
                </div>

            </Menu>
        </div>
    )
}

export default CartWidget