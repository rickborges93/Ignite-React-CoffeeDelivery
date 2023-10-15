import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  padding: 2rem 10rem;

  display: grid;
  grid-template-columns: 1fr 500px;
  gap: 2rem;
  align-items: flex-start;
`

const BaseCard = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
`

export const CartListCard = styled(BaseCard)`
  border-radius: 6px 44px;
`

export const AddressCard = styled(BaseCard)`
  border-radius: 6px;
`

export const PaymentMethodCard = styled(BaseCard)`
  border-radius: 6px;
  margin-top: 0.75rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const CardContent = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CardAddressContent = styled(CardContent)`
  svg {
    color: ${(props) => props.theme['yellow-700']};
  }
`

export const CardPaymentContent = styled(CardContent)`
  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const CardTexts = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  line-height: 1.4;

  color: ${(props) => props.theme['base-subtitle']};

  span {
    color: ${(props) => props.theme['base-text']};
  }
`

export const Subtitle = styled.h1`
  color: ${(props) => props.theme['base-title']};
  font-size: 1.125rem;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  line-height: 1.6;
  word-wrap: break-word;

  margin-bottom: 15px;
`

export const PricesContainer = styled.div``

export const Price = styled.div`
  display: flex;
  justify-content: space-between;

  color: ${(props) => props.theme['base-text']};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.4;

  margin-top: 0.75rem;
`

export const TotalPrice = styled(Price)`
  font-weight: 700;
  font-size: 1.25rem;
`

export const RadioButtonsSection = styled.section`
  display: flex;
  gap: 0.75rem;
`

export const RadioButtonsContent = styled.div`
  display: flex;
  gap: 0.75rem;

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  border-radius: 6px;

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;

    border-radius: 6px;

    cursor: pointer;

    svg {
      color: ${(props) => props.theme['purple-500']};
    }

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
  }

  input {
    display: none;
  }

  input:checked ~ label {
    outline: 1px solid ${(props) => props.theme['purple-500']};
    background: ${(props) => props.theme['purple-300']};
  }
`

export const FormAddress = styled.div`
  margin-top: 2rem;
  width: 100%;

  display: grid;
  grid-template-columns: 2fr 1fr 80px;
  grid-template-rows: repeat(6, 1fr);
  gap: 1rem 0.75rem;
  grid-template-areas:
    'cep none none'
    'street street street'
    'numberHouse numberHouse numberHouse'
    'complement complement complement'
    'district district district'
    'city city uf';

  #cep {
    grid-area: cep;
  }

  #street {
    grid-area: street;
  }

  #numberHouse {
    grid-area: numberHouse;
  }

  #complement {
    grid-area: complement;
  }

  #district {
    grid-area: district;
  }

  #city {
    grid-area: city;
  }

  #uf {
    grid-area: uf;
  }

  @media (min-width: 1120px) {
    grid-template-columns: 1fr 2fr 60px;
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
      'cep none none'
      'street street street'
      'numberHouse complement complement'
      'district city uf';
  }
`

export const ButtonSubmit = styled.button`
  margin-top: 1.5rem;

  width: 100%;
  padding: 0.75rem 0.5rem;
  background: ${(props) => props.theme['yellow-500']};
  border: 0;
  border-radius: 6px;

  color: ${(props) => props.theme.white};
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.6;

  cursor: pointer;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0px white;
  }
`
