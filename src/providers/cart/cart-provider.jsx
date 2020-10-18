import React, { createContext, useEffect, useState } from 'react';

import { addItemToCart, removeItemFromCart, filterItemFromCart, getCartItemsCount, getCartTotalValue } from './cart.utils.js';

export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => { },
    cartItems: [],
    addItem: () => { },
    removeItem: () => { },
    clearItemFromCart: () => { },
    cartItemsCount: 0,
    cartTotalValue: 0
});

const CartProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [cartTotalValue, setCartTotalValue] = useState(0);

    const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
    const removeItem = (item) => setCartItems(removeItemFromCart(cartItems, item));
    const clearItemFromCart = (item) => setCartItems(filterItemFromCart(cartItems, item));
    const toggleHidden = () => setHidden(!hidden);

    useEffect(() => {
        setCartItemsCount(getCartItemsCount(cartItems));
        setCartTotalValue(getCartTotalValue(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider value={
            {
                hidden,
                toggleHidden,
                cartItems,
                addItem,
                removeItem,
                clearItemFromCart,
                cartItemsCount,
                cartTotalValue
            }
        }>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;