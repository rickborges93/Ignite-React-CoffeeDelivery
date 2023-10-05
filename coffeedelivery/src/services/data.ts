import expressoTradicionalIcon from '../assets/coffees/expresso-tradicional.svg'
import expressoAmericanoIcon from '../assets/coffees/expresso-americano.svg'
import expressoCremosoIcon from '../assets/coffees/expresso-cremoso.svg'
import expressoGeladoIcon from '../assets/coffees/expresso-gelado.svg'
import cafeComLeiteIcon from '../assets/coffees/cafe-com-leite.svg'
import latteIcon from '../assets/coffees/latte.svg'
import capuccinoIcon from '../assets/coffees/capuccino.svg'
import macchiatoIcon from '../assets/coffees/macchiato.svg'
import mocaccinoIcon from '../assets/coffees/mocaccino.svg'
import chocolateQuenteIcon from '../assets/coffees/chocolate-quente.svg'
import cubanoIcon from '../assets/coffees/cubano.svg'
import havaianoIcon from '../assets/coffees/havaiano.svg'
import arabeIcon from '../assets/coffees/arabe.svg'
import irlandesIcon from '../assets/coffees/irlandes.svg'

export interface CoffeeDataType {
  id: number
  imgpath: string
  name: string
  descryption: string
  value: number
  tags: string[]
}

export const coffeeData: CoffeeDataType[] = [
  {
    id: 1,
    imgpath: expressoTradicionalIcon,
    name: 'Expresso Tradicional',
    descryption: 'O tradicional café feito com água quente e grãos moídos',
    value: 9.9,
    tags: ['tradicional'],
  },
  {
    id: 2,
    imgpath: expressoAmericanoIcon,
    name: 'Expresso Americano',
    descryption: 'Expresso diluído, menos intenso que o tradicional',
    value: 9.9,
    tags: ['tradicional'],
  },
  {
    id: 3,
    imgpath: expressoCremosoIcon,
    name: 'Expresso Cremoso',
    descryption: 'Café expresso tradicional com espuma cremosa',
    value: 9.9,
    tags: ['tradicional'],
  },
  {
    id: 4,
    imgpath: expressoGeladoIcon,
    name: 'Expresso Gelado',
    descryption: 'Bebida preparada com café expresso e cubos de gelo',
    value: 9.9,
    tags: ['tradicional', 'gelado'],
  },
  {
    id: 5,
    imgpath: cafeComLeiteIcon,
    name: 'Café com Leite',
    descryption: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 6,
    imgpath: latteIcon,
    name: 'Latte',
    descryption:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 7,
    imgpath: capuccinoIcon,
    name: 'Capuccino',
    descryption:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 8,
    imgpath: macchiatoIcon,
    name: 'Macchiato',
    descryption:
      'Café expresso misturado com um pouco de leite quente e espuma',
    value: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 9,
    imgpath: mocaccinoIcon,
    name: 'Mocaccino',
    descryption: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 10,
    imgpath: chocolateQuenteIcon,
    name: 'Chocolate Quente',
    descryption: 'Bebida feita com chocolate dissolvido no leite quente e café',
    value: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 11,
    imgpath: cubanoIcon,
    name: 'Cubano',
    descryption:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 12,
    imgpath: havaianoIcon,
    name: 'Havaiano',
    descryption: 'Bebida adocicada preparada com café e leite de coco',
    value: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 13,
    imgpath: arabeIcon,
    name: 'Árabe',
    descryption: 'Bebida preparada com grãos de café árabe e especiarias',
    value: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 14,
    imgpath: irlandesIcon,
    name: 'Irlandês',
    descryption: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    value: 9.9,
    tags: ['tradicional', 'com leite'],
  },
]
