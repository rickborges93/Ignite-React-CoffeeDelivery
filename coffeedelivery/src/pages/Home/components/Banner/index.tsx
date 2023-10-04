import {
  ContainerBanner,
  ContainerItens,
  ContentBanner,
  Item,
  ItemIcon,
  LeftColumn,
  RightColumn,
} from './styles'

import backgroundImagem from '../../../../assets/background.svg'
import bannerImagem from '../../../../assets/banner-image.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Banner() {
  return (
    <ContainerBanner imageUrl={backgroundImagem}>
      <ContentBanner>
        <LeftColumn>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <ContainerItens>
            <Item>
              <ItemIcon bgcolor="orange">
                <ShoppingCart size={16} weight="fill" />
              </ItemIcon>{' '}
              Compra simples e segura
            </Item>
            <Item>
              <ItemIcon bgcolor="gray">
                <Package size={16} weight="fill" />
              </ItemIcon>{' '}
              Embalagem mantém o café intacto
            </Item>
            <Item>
              <ItemIcon bgcolor="yellow">
                <Timer size={16} weight="fill" />
              </ItemIcon>{' '}
              Entrega rápida e rastreada
            </Item>
            <Item>
              <ItemIcon bgcolor="purple">
                <Coffee size={16} weight="fill" />
              </ItemIcon>{' '}
              O café chega fresquinho até você
            </Item>
          </ContainerItens>
        </LeftColumn>
        <RightColumn>
          <img src={bannerImagem} alt="" />
        </RightColumn>
      </ContentBanner>
    </ContainerBanner>
  )
}
