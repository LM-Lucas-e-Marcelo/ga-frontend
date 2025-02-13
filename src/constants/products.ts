import houseThumb from '../assets/thumbnails/house.png'
import serviceThumb from '../assets/thumbnails/service.png'
import carThumb from '../assets/thumbnails/car.png'

import {
  PiHouseLineBold,
  IoCarSportOutline,
  TbPlaneDeparture,
} from '../assets/icons'

export const PRODUCTS = [
  {
    id: 1,
    thumb: houseThumb,
    title: 'Consórcio de imóveis',
    icon: PiHouseLineBold,
  },
  {
    id: 2,
    thumb: carThumb,
    title: 'Consórcio de veículos',
    icon: IoCarSportOutline,
  },
  {
    id: 3,
    thumb: serviceThumb,
    title: 'Consórcio de serviços',
    icon: TbPlaneDeparture,
  },
]
