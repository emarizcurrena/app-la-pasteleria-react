import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cartListItems, setCartListItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart = (product, qty) => {
        console.log()
        let productIndex = cartListItems.findIndex(item => item.id === product.id);
        if (productIndex === -1) {
            console.log("se agrego el producto: ", product)
            setTotalPrice(totalPrice + product.price)
            setCartListItems(cartListItems => [...cartListItems, { ...product, qty }])
        } else {
            const temporalArray = [...cartListItems];
            temporalArray[productIndex].qty += qty;
            setCartListItems(temporalArray)
        }

    }

    const cleanCartProducts = () => {
        setCartListItems([])
    }

    const removeProductToCart = (id) => {
        console.log(typeof id)
        if (typeof parseInt(id) === "number") {
            setCartListItems(
                cartListItems.filter((item) => {
                    return !(item.id === id);
                })
            )
        } else {
            setCartListItems([])
        }

    }

    const data = {
        cartListItems,
        addProductToCart,
        removeProductToCart,
        totalPrice,
        cleanCartProducts
    }


    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }