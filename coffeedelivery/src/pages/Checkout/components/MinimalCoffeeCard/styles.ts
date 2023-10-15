import styled from 'styled-components'

export const MinCardContainer = styled.div`
  padding-bottom: 0.5rem 0.25rem;

  display: flex;
  justify-content: space-between;
`

export const DetailsContainer = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 64px;
    height: auto;
  }
`

export const InfosContainer = styled.div`
  h1 {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.4;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.25rem;
`

export const RemoveButton = styled.button`
  cursor: pointer;

  padding: 0 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  border: 0;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  line-height: 1.4;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const PriceContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.4;
  color: ${(props) => props.theme['base-text']};
`

export const Divider = styled.hr`
  background: ${(props) => props.theme['base-button']};
  margin: 1.5rem 0;
  height: 1px;
  border: 0px;
`
