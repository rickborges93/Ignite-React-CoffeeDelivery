import { ShoppingCart } from 'phosphor-react'
import { CoffeeDataType } from '../../../../services/data'
import {
  BuyContainer,
  CardContainer,
  Footer,
  IconContainer,
  PriceContainer,
  TagContainer,
} from './styles'
import { InputNumber } from '../../../../components/InputNumber'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

interface CoffeeCardProps {
  data: CoffeeDataType
}

export function CoffeeCard({ data }: CoffeeCardProps) {
  const { addNewItemToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(0)
  const price = data.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })

  function handleAddNewItemToCart() {
    const newItem = {
      ...data,
      quantity,
    }
    addNewItemToCart(newItem)
    setQuantity(1)
  }

  function handleAddQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleRemoveQuantity() {
    if (quantity > 0) setQuantity((state) => state - 1)
  }

  return (
    <CardContainer>
      <img src={data.imgpath} alt="" />
      <TagContainer>
        {data.tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </TagContainer>

      <h1>{data.name}</h1>
      <label>{data.descryption}</label>

      <Footer>
        <PriceContainer>
          R$<span>{price}</span>
        </PriceContainer>

        <BuyContainer>
          <InputNumber
            quantity={quantity}
            addQuantity={handleAddQuantity}
            removeQuantity={handleRemoveQuantity}
          />
          <IconContainer onClick={handleAddNewItemToCart}>
            <ShoppingCart weight="fill" size={22} />
          </IconContainer>
        </BuyContainer>
      </Footer>
    </CardContainer>
  )
}
