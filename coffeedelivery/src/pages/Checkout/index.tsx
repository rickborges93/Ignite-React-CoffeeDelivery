import { useContext, useEffect, useState } from 'react'
import {
  CartListCard,
  CheckoutContainer,
  Subtitle,
  AddressCard,
  PaymentMethodCard,
  PricesContainer,
  Price,
  TotalPrice,
  CardTexts,
  CardAddressContent,
  CardPaymentContent,
  RadioButtonsSection,
  RadioButtonsContent,
  FormAddress,
  ButtonSubmit,
} from './styles'
import { CartContext } from '../../contexts/CartContext'
import { MinimalCoffeeCard } from './components/MinimalCoffeeCard'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { InputDefault } from './components/InputDefault'
import { toast } from 'react-toastify'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

const checkoutFormValidationSchema = zod.object({
  street: zod.string().min(3),
  numberHouse: zod.string().min(1, 'Informar o número da residência'),
  complement: zod.string().optional(),
  district: zod.string(),
  city: zod.string().min(3),
  uf: zod.string().min(2).max(2),
})

export type CheckoutFormValues = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const navigate = useNavigate()
  const { cartItens, clearCart } = useContext(CartContext)

  const [zipcode, setZipcode] = useState<string>('')
  const [paymentMethod, setPaymentMethod] = useState('')

  const methods = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormValidationSchema),
  })
  const {
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = methods

  useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      toast.error('Preencher corretamente o formulário de endereço')
    }
  }, [errors])

  const sumPrice = cartItens.reduce(
    (sum, cartItem) => sum + cartItem.price * cartItem.quantity,
    0,
  )

  const deliveryPrice = 3.5

  const totalSumPrices = sumPrice + deliveryPrice

  function transformNumberToReal(price: number) {
    return price.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  function handlePaymentMethod(event: React.ChangeEvent<HTMLInputElement>) {
    setPaymentMethod(event.target.value)
  }

  async function handleLoadAddressAboutTheZipcode() {
    const zipcodeFormatted = zipcode.replace(/[^\d]+/g, '')

    if (zipcodeFormatted.length === 8) {
      const address = await fetch(
        `http://viacep.com.br/ws/${zipcodeFormatted}/json/`,
      )
        .then((res) => res.json())
        .catch(() => {
          if (zipcodeFormatted.length >= 6) {
            toast.error('Endereço não encontrado!')
          }
        })

      if (address) {
        setValue('street', address.logradouro)
        setValue('district', address.bairro)
        setValue('complement', address.complemento)
        setValue('city', address.localidade)
        setValue('uf', address.uf)
      }
    }
  }

  function handleFormSubmit(data: CheckoutFormValues) {
    if (cartItens.length <= 0) {
      toast.warn('Carrinho se encontra vazio!')
      return
    }

    if (!paymentMethod) {
      toast.warn('Selecione um método de pagamento')
      return
    }

    reset()
    clearCart()

    navigate('/success-order', {
      state: {
        paymentMethod,
        address: data,
      },
      replace: true,
    })
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <Subtitle>Complete seu pedido</Subtitle>

        <AddressCard>
          <CardAddressContent>
            <MapPinLine size={22} />
            <CardTexts>
              Endereço de Entrega
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </CardTexts>
          </CardAddressContent>

          <FormAddress>
            <FormProvider {...methods}>
              <InputDefault
                placeholder="CEP"
                gridArea="cep"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                onBlur={() => handleLoadAddressAboutTheZipcode()}
              />

              <InputDefault
                registerName="street"
                placeholder="Rua"
                gridArea="street"
              />
              <InputDefault
                registerName="numberHouse"
                placeholder="Número"
                gridArea="numberHouse"
              />

              <InputDefault
                registerName="complement"
                placeholder="Complemento"
                gridArea="complement"
                hasOptionalLabel
              />

              <InputDefault
                registerName="district"
                placeholder="Bairro"
                gridArea="district"
              />
              <InputDefault
                registerName="city"
                placeholder="Cidade"
                gridArea="city"
              />
              <InputDefault
                registerName="uf"
                placeholder="UF"
                gridArea="uf"
                min={2}
                max={2}
              />
            </FormProvider>
          </FormAddress>
        </AddressCard>

        <PaymentMethodCard>
          <CardPaymentContent>
            <CurrencyDollar size={22} />
            <CardTexts>
              Pagamento
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </CardTexts>
          </CardPaymentContent>
          <RadioButtonsSection>
            <RadioButtonsContent>
              <input
                type="radio"
                id="cartao_credito"
                name="payment_method"
                value="Cartão de crédito"
                checked={paymentMethod === 'Cartão de crédito'}
                onChange={handlePaymentMethod}
              />

              <label htmlFor="cartao_credito">
                <CreditCard size={16} />
                Cartão de crédito
              </label>
            </RadioButtonsContent>
            <RadioButtonsContent>
              <input
                type="radio"
                id="cartao_debito"
                name="payment_method"
                value="Cartão de débito"
                checked={paymentMethod === 'Cartão de débito'}
                onChange={handlePaymentMethod}
              />

              <label htmlFor="cartao_debito">
                <Bank size={16} />
                Cartão de débito
              </label>
            </RadioButtonsContent>
            <RadioButtonsContent>
              <input
                type="radio"
                id="dinheiro"
                name="payment_method"
                value="Dinheiro"
                checked={paymentMethod === 'Dinheiro'}
                onChange={handlePaymentMethod}
              />

              <label htmlFor="dinheiro">
                <Money size={16} /> Dinheiro
              </label>
            </RadioButtonsContent>
          </RadioButtonsSection>
        </PaymentMethodCard>

        <div></div>
      </div>
      <div>
        <Subtitle>Cafés selecionados</Subtitle>
        <CartListCard>
          {cartItens.map((coffee) => {
            return <MinimalCoffeeCard key={coffee.id} data={coffee} />
          })}
          <PricesContainer>
            <Price>
              Total de itens <span>{transformNumberToReal(sumPrice)}</span>
            </Price>
            <Price>
              Entrega <span>{transformNumberToReal(deliveryPrice)}</span>
            </Price>
            <TotalPrice>
              Total <span>{transformNumberToReal(totalSumPrices)}</span>
            </TotalPrice>
          </PricesContainer>
          <ButtonSubmit type="submit">CONFIRMAR PEDIDO</ButtonSubmit>
        </CartListCard>
      </div>
    </CheckoutContainer>
  )
}
