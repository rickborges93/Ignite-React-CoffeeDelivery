import styled from 'styled-components'

export const ContainerHome = styled.section`
  padding: 2rem 10rem;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 1.4;
  }
`

export const CoffeeCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  margin-top: 2rem;
`
