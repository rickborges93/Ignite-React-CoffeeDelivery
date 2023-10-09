import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 16rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  border-radius: 6px 36px;

  background-color: ${(props) => props.theme['base-card']};

  padding: 1.25rem;

  img {
    height: 10rem;
    width: 10rem;

    margin-top: -45px;
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    line-height: 1.6;
    font-weight: 700;
    word-wrap: break-word;
    color: ${(props) => props.theme['base-subtitle']};
    margin-top: 0.5rem;
  }

  label {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 1.6;
    font-weight: 400;
    word-wrap: break-word;
    color: ${(props) => props.theme['base-label']};

    text-align: center;
  }
`

export const TagContainer = styled.div`
  display: flex;
  gap: 0.25rem;

  margin-top: 1rem;

  span {
    color: ${(props) => props.theme['yellow-700']};
    background: ${(props) => props.theme['yellow-300']};

    font-family: 'Roboto', sans-serif;
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 1.4;
    text-transform: uppercase;

    border-radius: 999px;

    padding: 0.25rem 0.5rem;
  }
`

export const Footer = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  border-radius: 6px;

  cursor: pointer;

  background: ${(props) => props.theme['purple-700']};
  color: ${(props) => props.theme.white};
`

export const BuyContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: first baseline;
  gap: 0.2rem;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.4;
  font-size: 0.875rem;

  color: ${(props) => props.theme['base-text']};

  span {
    font-size: 1.5rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 1.6;
  }
`
