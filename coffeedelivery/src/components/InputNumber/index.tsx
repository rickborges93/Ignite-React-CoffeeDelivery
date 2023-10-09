import { InputContainer } from './styles'

interface InputNumberProps {
  quantity: number
  addQuantity: () => void
  removeQuantity: () => void
}
export function InputNumber({
  quantity,
  addQuantity,
  removeQuantity,
}: InputNumberProps) {
  return (
    <InputContainer>
      <button onClick={removeQuantity}></button>
      <input
        min={0}
        name="quantity"
        value={quantity}
        type="number"
        // onChange={(e) => setQuantity(parseInt(e.target.value))}
        readOnly
      />
      <button onClick={addQuantity} className="plus"></button>
    </InputContainer>
  )
}
