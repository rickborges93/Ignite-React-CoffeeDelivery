import { produce } from 'immer'

import { CartItem } from '../../contexts/CartContext'
import { ActionTypes } from './actions'

interface CartState {
  cartItens: CartItem[]
}

interface CartReducerPayloadActionType {
  quantity?: number
  item?: CartItem
}

interface CartReducerActionType {
  type: ActionTypes
  payload?: CartReducerPayloadActionType
}

export function cartReducer(state: CartState, action: CartReducerActionType) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      return produce(state, (draft) => {
        if (action.payload && action.payload.item) {
          draft.cartItens.push(action.payload.item)
        }
      })

    case ActionTypes.REMOVE_ITEM_FROM_CART:
      return produce(state, (draft) => {
        const index = draft.cartItens.findIndex(
          (item) => item.id === action.payload?.item?.id,
        )

        if (index !== -1) {
          draft.cartItens.splice(index, 1)
        }
      })
    case ActionTypes.UPDATE_CART_ITEM:
      return produce(state, (draft) => {
        const idItem = action.payload?.item?.id
        const currentItemIndex = state.cartItens.findIndex((cartItem) => {
          return cartItem.id === idItem
        })

        if (currentItemIndex < 0) {
          return state
        }

        if (action.payload && action.payload.item) {
          draft.cartItens[currentItemIndex].quantity +=
            action.payload?.item?.quantity
        }
      })
    case ActionTypes.REMOVE_QUANTITY_FROM_ITEM:
      return produce(state, (draft) => {
        const idItem = action.payload?.item?.id
        const currentItemIndex = state.cartItens.findIndex((cartItem) => {
          return cartItem.id === idItem
        })

        if (currentItemIndex < 0) {
          return state
        }

        if (action.payload?.quantity) {
          draft.cartItens[currentItemIndex].quantity -= action.payload.quantity
        }
      })
    case ActionTypes.CLEAR_CART:
      return produce(state, (draft) => {
        draft.cartItens = []
      })
    default:
      return state
  }
}
