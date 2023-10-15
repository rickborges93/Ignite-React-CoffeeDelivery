import { useContext, useEffect, useState } from 'react'
import { InputNumber } from '../../../../components/InputNumber'
import { CartContext, CartItem } from '../../../../contexts/CartContext'
import {
  ActionsContainer,
  DetailsContainer,
  Divider,
  InfosContainer,
  MinCardContainer,
  PriceContainer,
  RemoveButton,
} from './styles'
import { Trash } from 'phosphor-react'

interface MinimalCoffeeCardProps {
  data: CartItem
}

export function MinimalCoffeeCard({ data }: MinimalCoffeeCardProps) {
  const { removeQuantityFromItemCart } = useContext(CartContext)

  const [quantity, setQuantity] = useState(data.quantity)
  const price = data.price * data.quantity
  const totalPrice = price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  useEffect(() => {
    setQuantity(data.quantity)
  }, [data.quantity])

  function handleAddQuantity() {
    if (quantity < data.quantity) setQuantity((state) => state + 1)
  }

  function handleRemoveQuantity() {
    if (quantity > 1) setQuantity((state) => state - 1)
  }

  function handleRemoveFromCart() {
    removeQuantityFromItemCart(data, quantity)
  }

  return (
    <>
      <MinCardContainer>
        <DetailsContainer>
          <img src={data.imgpath} alt="" />
          <InfosContainer>
            <h1>{data.name}</h1>
            <ActionsContainer>
              <InputNumber
                quantity={quantity}
                addQuantity={handleAddQuantity}
                removeQuantity={handleRemoveQuantity}
              />
              <RemoveButton onClick={handleRemoveFromCart}>
                <Trash size={20} /> REMOVER
              </RemoveButton>
            </ActionsContainer>
          </InfosContainer>
        </DetailsContainer>
        <PriceContainer>{totalPrice}</PriceContainer>
      </MinCardContainer>
      <Divider />
    </>
  )
}
