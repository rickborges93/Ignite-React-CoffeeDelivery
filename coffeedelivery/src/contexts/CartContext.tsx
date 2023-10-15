import { ReactNode, createContext, useReducer } from 'react'
import { CoffeeDataType } from '../services/data'
import { cartReducer } from '../reducers/cart/reducer'
import {
  addItemToCart,
  removeItemFromCart,
  removeQuantityFromCartItem,
  updateCartItem,
  clearAllItensCart,
} from '../reducers/cart/actions'

export interface CartItem extends CoffeeDataType {
  quantity: number
}

interface CartContextType {
  cartItens: CartItem[]
  addNewItemToCart: (coffee: CartItem) => void
  removeQuantityFromItemCart: (coffee: CartItem, quantity: number) => void
  clearCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItensState, dispatch] = useReducer(cartReducer, {
    cartItens: [],
  })

  const { cartItens } = cartItensState

  function addNewItemToCart(coffee: CartItem) {
    const itemFound = cartItens.findIndex((item) => item.id === coffee.id)
    if (itemFound < 0) {
      dispatch(addItemToCart(coffee))
    } else {
      dispatch(updateCartItem(coffee))
    }
  }

  function removeQuantityFromItemCart(coffee: CartItem, quantity: number) {
    if (coffee.quantity > quantity) {
      dispatch(removeQuantityFromCartItem(coffee, quantity))
    } else {
      dispatch(removeItemFromCart(coffee))
    }
  }

  function clearCart() {
    dispatch(clearAllItensCart())
  }

  return (
    <CartContext.Provider
      value={{
        cartItens,
        addNewItemToCart,
        removeQuantityFromItemCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
