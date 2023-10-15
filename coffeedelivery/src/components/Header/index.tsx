import { useContext } from 'react'
import {
  HeaderContainer,
  IconContainer,
  LocaleContainer,
  RightContent,
} from './styles'

import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { CartContext } from '../../contexts/CartContext'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { cartItens } = useContext(CartContext)
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={coffeeDeliveryLogo} alt="" />
      </NavLink>
      <RightContent>
        <LocaleContainer>
          <MapPin size={22} weight="fill" /> Guarulhos, SP
        </LocaleContainer>
        <NavLink to="/checkout">
          <IconContainer>
            <ShoppingCart size={22} weight="fill" />
            {cartItens.length > 0 && <span>{cartItens.length}</span>}
          </IconContainer>
        </NavLink>
      </RightContent>
    </HeaderContainer>
  )
}
