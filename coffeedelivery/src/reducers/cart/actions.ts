import { CartItem } from '../../contexts/CartContext'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  UPDATE_CART_ITEM = 'UPDATE_CART_ITEM',
}

export function addItemToCart(item: CartItem) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      item,
    },
  }
}

export function removeItemToCart(item: CartItem) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      item,
    },
  }
}

export function updateCartItem(item: CartItem) {
  return {
    type: ActionTypes.UPDATE_CART_ITEM,
    payload: {
      item,
    },
  }
}
