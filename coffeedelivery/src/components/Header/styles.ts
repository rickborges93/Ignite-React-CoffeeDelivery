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

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.4;
    color: ${(props) => props.theme.white};

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;

    top: 5px;
    margin-left: 38px;

    height: 1.25rem;
    width: 1.25rem;

    border-radius: 999px;
    background: ${(props) => props.theme['yellow-700']};
  }
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
