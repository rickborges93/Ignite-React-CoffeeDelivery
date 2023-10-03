import {
  HeaderContainer,
  IconContainer,
  LocaleContainer,
  RightContent,
} from './styles'

import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeeDeliveryLogo} alt="" />
      <RightContent>
        <LocaleContainer>
          <MapPin size={22} weight="fill" /> Guarulhos, SP
        </LocaleContainer>
        <IconContainer>
          <ShoppingCart size={22} weight="fill" />
        </IconContainer>
      </RightContent>
    </HeaderContainer>
  )
}
