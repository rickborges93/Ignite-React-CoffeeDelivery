import { Banner } from './components/Banner'
import { ContainerHome } from './styles'

import { coffeeData } from '../../services/data'

export function Home() {
  const coffeeList = coffeeData
  console.log(coffeeList)

  return (
    <>
      <Banner />

      <ContainerHome>
        <h2>Nossos cafés</h2>

        {coffeeList.map((coffee) => {
          return <h3 key={coffee.id}>{coffee.name}</h3>
        })}
      </ContainerHome>
    </>
  )
}
