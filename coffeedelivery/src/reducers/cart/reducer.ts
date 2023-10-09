import { produce } from 'immer'

import { CartItem } from '../../contexts/CartContext'
import { ActionTypes } from './actions'

interface CartState {
  cartItens: CartItem[]
}

interface CartReducerPayloadActionType {
  item: CartItem
}

interface CartReducerActionType {
  type: ActionTypes
  payload: CartReducerPayloadActionType
}

export function cartReducer(state: CartState, action: CartReducerActionType) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      return produce(state, (draft) => {
        if (action.payload) {
          draft.cartItens.push(action.payload.item)
        }
      })

    case ActionTypes.REMOVE_ITEM_FROM_CART:
      return produce(state, (draft) => {
        const idItem = action.payload.item.id
        const currentItemIndex = state.cartItens.findIndex((cartItem) => {
          return cartItem.id === idItem
        })

        if (currentItemIndex < 0) {
          return state
        }

        draft.cartItens.slice(currentItemIndex, 1)
      })
    case ActionTypes.UPDATE_CART_ITEM:
      return produce(state, (draft) => {
        const idItem = action.payload.item.id
        const currentItemIndex = state.cartItens.findIndex((cartItem) => {
          return cartItem.id === idItem
        })

        if (currentItemIndex < 0) {
          return state
        }

        draft.cartItens[currentItemIndex].quantity +=
          action.payload.item.quantity
      })
    default:
      return state
  }
}
