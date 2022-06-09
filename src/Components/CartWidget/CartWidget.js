import { useState, useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete'
import CartContext from '../../context/CartContext';

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
                color={'primary'}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
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
                            {cartListItems.map((item) => {
                                return (
                                    <div className='item-cart-prod' key={item.id}>
                                        <div className='cart-prod__image'>
                                            <img src={`/${item.image}`} alt="prod carrito" />
                                        </div>
                                        <div className='cart-prod__info'>
                                            <p>{item.title}</p>
                                            <span>$ {item.price}</span>
                                        </div>
                                        <div className='cart-prod__action'>
                                            <button onClick={() => removeProductToCart(item.id)}>
                                                <DeleteIcon />
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                            <button onClick={removeProductToCart}>Clear All</button>
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