import { ReactNode, createContext, useReducer } from 'react'
import { CoffeeDataType } from '../services/data'
import { cartReducer } from '../reducers/cart/reducer'
import { addItemToCart, updateCartItem } from '../reducers/cart/actions'

export interface CartItem extends CoffeeDataType {
  quantity: number
}

interface CartContextType {
  cartItens: CartItem[]
  addNewItemToCart: (coffee: CartItem) => void
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

  return (
    <CartContext.Provider value={{ cartItens, addNewItemToCart }}>
      {children}
    </CartContext.Provider>
  )
}
