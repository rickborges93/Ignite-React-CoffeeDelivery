import styled from 'styled-components'

// Pedido realizado //
export const Container = styled.main`
  padding: 2rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;

  section {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 2rem;
      font-weight: 800;
      font-family: 'Baloo 2', monospace;
      color: ${(props) => props.theme['yellow-700']};
      line-height: 130%;
    }

    & > p {
      font-size: 1.25rem;
      line-height: 130%;
    }
  }

  .success-message {
    width: 100%;
    height: 100%;
    padding: 2.5rem;
    border-radius: 6px 36px;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    background-color: ${(props) => props.theme.background};
  }

  img {
    display: none;
  }

  // Laptop //
  @media (min-width: 992px) {
    & {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    img {
      align-self: flex-end;
      display: flex;
      width: 350px;
      height: 200px;
    }

    // Desktop //
    @media (min-width: 1120px) {
      img {
        width: 492px;
        height: 293px;
      }
    }
  }
`

// Borda com gradiente //
export const BorderGradient = styled.div`
  margin-top: 2.5rem;
  padding: 2px;
  width: 100%;
  max-width: 526px;
  border-radius: 6px 36px;
  background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  overflow: hidden;
`

// Badges //
const BadgeBase = styled.span`
  display: flex;
  align-items: center;
  line-height: 130%;
  gap: 0.75rem;

  svg {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 0.5rem;
    padding: 0.5rem;
    border-radius: 50%;

    color: ${(props) => props.theme.white};
  }
`
// Badges - Endereço //
export const BadgeAddress = styled(BadgeBase)`
  svg {
    background: ${(props) => props.theme['purple-500']};
  }
`
// Badges - Previsão de Entrega //
export const BadgeTime = styled(BadgeBase)`
  svg {
    background: ${(props) => props.theme['yellow-500']};
  }
`
// Badges - Método de Pagamento //
export const BadgePayment = styled(BadgeBase)`
  svg {
    background: ${(props) => props.theme['yellow-700']};
  }
`
