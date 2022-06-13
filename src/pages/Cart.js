import './Cart.css';
import { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete'
import { Button, Container } from '@mui/material';
import CartConext from "../context/CartContext"
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cartListItems, totalPrice, removeProductToCart } = useContext(CartConext)
    console.log("cartListItems desde checkout: ", cartListItems)

    const hasItems = cartListItems.length > 0;

    return (
        <Container className='container-general'>
            <h2>Checkout: </h2>
            <div className='cart-section'>
                <div className='col-cart-table__head'>
                    <h2>Producto</h2>
                    <h2>Descripcion</h2>
                    <h2>Precio Unitatrio</h2>
                    <h2>Cantidad</h2>
                    <h2>Subtotal</h2>
                    <h2>Quitar</h2>
                </div>
                {hasItems ?
                    <>
                        {cartListItems.map((item) => {
                            const { id, title, image, price, qty } = item
                            return (
                                <div className='cart-table__content' key={id}>
                                    <div className='cart-table__content-img'>
                                        <img src={`/${image}`} />
                                    </div>
                                    <div className='cart-table__content-title'>
                                        <p>{title}</p>
                                    </div>
                                    <div className='cart-table__content-price'>
                                        <p>$ {price}</p>
                                    </div>
                                    <div className='cart-table__content-quantity'>
                                        <p>{qty}</p>
                                    </div>
                                    <div className='cart-table__content-quantity'>
                                        <p>$ {qty * price}</p>
                                    </div>
                                    <div className='cart-table__content-price'>
                                        <button className='btn-delete' onClick={() => removeProductToCart(item.id)}>
                                            <DeleteIcon />
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                        )}
                        <div className='cart-footer'>
                            <Button className='btn-custom'>Continuar comprando</Button>
                            <div className='cart-checkout-details'>
                                <div className='cart-checkout__total'>
                                    <p>Total</p>
                                    <span>$ {
                                        cartListItems.reduce(
                                            (prevValue, { qty, price }) => { return prevValue + (qty * price) }, 0)}
                                    </span>
                                </div>
                                <Button className='btn-custom'>Completar Compra</Button>
                            </div>
                        </div>
                        <button onClick={removeProductToCart}>Clear All</button>
                    </>
                    :
                    <>
                        <p>No hay productos agregados al carrito</p>
                        <Link to="/products/">Elegir Productos!</Link>
                    </>
                }
            </div>
        </Container>
    )
}

export default Cart