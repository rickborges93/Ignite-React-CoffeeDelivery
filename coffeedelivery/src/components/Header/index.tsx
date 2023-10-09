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

export function Header() {
  const { cartItens } = useContext(CartContext)
  return (
    <HeaderContainer>
      <img src={coffeeDeliveryLogo} alt="" />
      <RightContent>
        <LocaleContainer>
          <MapPin size={22} weight="fill" /> Guarulhos, SP
        </LocaleContainer>
        <IconContainer>
          <ShoppingCart size={22} weight="fill" />
          {cartItens.length > 0 && <span>{cartItens.length}</span>}
        </IconContainer>
      </RightContent>
    </HeaderContainer>
  )
}
