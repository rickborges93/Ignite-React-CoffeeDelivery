import { Banner } from './components/Banner'
import { CoffeeCardList, ContainerHome } from './styles'

import { coffeeData } from '../../services/data'
import { CoffeeCard } from './components/CoffeeCard'

export function Home() {
  const coffeeList = coffeeData

  return (
    <>
      <Banner />

      <ContainerHome>
        <h2>Nossos cafés</h2>

        <CoffeeCardList>
          {coffeeList.map((coffee) => {
            return <CoffeeCard key={coffee.id} data={coffee} />
          })}
        </CoffeeCardList>
      </ContainerHome>
    </>
  )
}
