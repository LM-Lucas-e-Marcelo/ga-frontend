import houseThumb from '../assets/thumbnails/house.png'
import fgtsThumb from '../assets/thumbnails/fgts.png'
import carThumb from '../assets/thumbnails/car.png'

import {
  PiHouseLineBold,
  IoCarSportOutline,
  TbFileDollar,
} from '../assets/icons'

export const PRODUCTS = [
  {
    id: 1,
    thumb: houseThumb,
    title: 'Consórcios',
    icon: PiHouseLineBold,
  },
  {
    id: 2,
    thumb: carThumb,
    title: 'Financiamentos',
    icon: IoCarSportOutline,
  },
  {
    id: 3,
    thumb: fgtsThumb,
    title: 'FGTS',
    icon: TbFileDollar,
  },
]
