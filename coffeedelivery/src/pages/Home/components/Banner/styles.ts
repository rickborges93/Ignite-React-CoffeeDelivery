import styled from 'styled-components'

interface ContainerBannerProps {
  imageurl: string
}

export const ContainerBanner = styled.div<ContainerBannerProps>`
  background-image: url(${(props) => props.imageurl});
  width: 100%;
  height: 544px;
  padding: 10rem;
`

export const ContentBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  gap: 3.5rem;
`

export const LeftColumn = styled.div`
  h1 {
    font-size: 3rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 1.6;
    color: ${(props) => props.theme['base-title']};
  }

  h2 {
    font-size: 1.25rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ContainerItens = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;

  margin-top: 4rem;
`

export const Item = styled.div`
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.4;

  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const BG_ICON_COLOR = {
  yellow: 'yellow-500',
  orange: 'yellow-700',
  gray: 'base-text',
  purple: 'purple-500',
} as const

interface ItemIconProps {
  bgcolor: keyof typeof BG_ICON_COLOR
}

export const ItemIcon = styled.span<ItemIconProps>`
  padding: 0.5rem;
  border-radius: 999px;
  color: ${(props) => props.theme.white};

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme[BG_ICON_COLOR[props.bgcolor]]};
`

export const RightColumn = styled.div``
