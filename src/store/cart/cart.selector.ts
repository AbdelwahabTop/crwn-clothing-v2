import { createSelector } from 'reselect';

import { CartState } from './cart.reducer';

const selectCartReducer = (state): CartState => state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
    cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price,
        0
    )
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);
