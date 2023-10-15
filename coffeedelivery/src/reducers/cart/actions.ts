import { CartItem } from '../../contexts/CartContext'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  UPDATE_CART_ITEM = 'UPDATE_CART_ITEM',
  REMOVE_QUANTITY_FROM_ITEM = 'REMOVE_QUANTITY_FROM_ITEM',
  CLEAR_CART = 'CLEAR_CART',
}

export function addItemToCart(item: CartItem) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      item,
    },
  }
}

export function removeItemFromCart(item: CartItem) {
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

export function removeQuantityFromCartItem(item: CartItem, quantity: number) {
  return {
    type: ActionTypes.REMOVE_QUANTITY_FROM_ITEM,
    payload: {
      item,
      quantity,
    },
  }
}

export function clearAllItensCart() {
  return {
    type: ActionTypes.CLEAR_CART,
  }
}
