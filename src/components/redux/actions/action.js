export const increment = (oldcount,cartItems) => {
    return {
        type: 'increment',
        // old: oldcount,
        payload: cartItems
    }
}

export const decrement = (cartItems) => {
    return {
        type: 'decrement',
        payload: cartItems
    }
}

export const addToCart = (productItems,isInr,quantity) => {
    console.log('add to cart i kyaa data aayo yaa ', productItems, isInr, quantity);
    return {
        type: 'ADD_TO_CART',
        // oldProductItem: oldProductItem,
        productItem: productItems,
        isInr : isInr,
        quantity: quantity,
    }
}

// export const updateCart = (productItem) => {
//     return {
//         type: 'UPDATE_TO_CART',
//         productItem: productItem
//     }
// }

export const removeToCart = (productId) => {
    return {
        type: 'REMOVE_TO_CART',
        productItem: productId
    }
}

