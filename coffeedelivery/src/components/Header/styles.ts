import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 40px;
  padding: 2rem 10rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  img {
    height: auto;
    width: 85px;
  }
`

export const RightContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
`

export const IconContainerBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  border-radius: 6px;

  cursor: pointer;
`

export const IconContainer = styled(IconContainerBase)`
  color: ${(props) => props.theme['yellow-700']};
  background: ${(props) => props.theme['yellow-300']};
`

export const LocaleContainer = styled(IconContainerBase)`
  color: ${(props) => props.theme['purple-700']};
  background: ${(props) => props.theme['purple-300']};

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.6;
  font-size: 0.875rem;
  gap: 0.25rem;
`
