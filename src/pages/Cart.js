import './Cart.css';
import { useContext, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete'
import { Button, Container } from '@mui/material';
import CartConext from "../context/CartContext"
import { Link } from 'react-router-dom'
import Modal from '../Components/Modal/Modal'
import TextField from '@mui/material/TextField';
import { addDoc, collection } from 'firebase/firestore'
import db from "../utils/fireBaseConfig"
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartListItems, totalPrice, removeProductToCart, cleanCartProducts } = useContext(CartConext)
    const [showModal, setShowModal] = useState(false)
    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: ''
    })
    const [order, setOrder] = useState({
        buyer: {},
        items: cartListItems.map(item => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.qty
            }
        }),
        total: cartListItems.reduce(
            (prevValue, { qty, price }) => { return prevValue + (qty * price) }, 0)
    })

    const hasItems = cartListItems.length > 0;

    const [success, setSuccess] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setOrder({ ...order, buyer: formValue })
        saveData({ ...order, buyer: formValue })
    }

    const handleChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }

    const finishOrder = () => {
        navigate('/products')
    }

    const saveData = async (newOrder) => {
        const orderFirebase = collection(db, 'Ordenes')
        const orderDoc = await addDoc(orderFirebase, newOrder)
        console.log("orden generada: ", orderDoc.id)
        setSuccess(orderDoc.id)
        cleanCartProducts()
    }

    return (
        <Container className='container-general'>
            {console.log("order: ", order)}
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
                                <button className='cart-checkout-btn' onClick={() => setShowModal(true)}>Completar Compra</button>
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
            <Modal title={success ? "Compra Exitosa" : "Formulario de contacto"} open={showModal} handleClose={() => setShowModal(false)}>
                {success ? (
                    <div>
                        La orden se generó con éxito!
                        Número de orden {success}
                        <button onClick={finishOrder}>Aceptar</button>
                    </div>
                ) : (
                    <form className='form-contact' onSubmit={handleSubmit}>
                        <TextField
                            id="outlined-basic"
                            name="name"
                            label="Nombre y Apellido"
                            variant="outlined"
                            value={formValue.name}
                            onChange={handleChange}
                        />
                        <TextField
                            id="outlined-basic"
                            name="phone"
                            label="Telefono"
                            variant="outlined"
                            value={formValue.phone}
                            onChange={handleChange}
                        />
                        <TextField
                            id="outlined-basic"
                            name="email"
                            label="Mail"
                            variant="outlined"
                            value={formValue.email}
                            onChange={handleChange}
                        />
                        <button className='cart-checkout-btn' type='submit'>Enviar</button>
                    </form>
                )}
            </Modal>
        </Container>
    )
}

export default Cart