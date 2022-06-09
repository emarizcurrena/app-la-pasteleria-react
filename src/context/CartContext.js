import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cartListItems, setCartListItems] = useState([])

    const addProductToCart = (product, qty) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if (!isInCart) {
            console.log("se agrego el producto: ", product)
            setCartListItems(cartListItems => [...cartListItems, { ...product, qty }])
        }
        console.log("El producto ya se encuentra en el carrito")
    }

    const removeProductToCart = (id) => {
        if (typeof id === "number") {
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
        removeProductToCart
    }


    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }