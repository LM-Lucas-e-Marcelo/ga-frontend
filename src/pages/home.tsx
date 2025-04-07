import { Advantages } from '../components/advantages'
import { Contact } from '../components/contact'
import { Hero } from '../components/hero'
import { Products } from '../components/products'
import { Questions } from '../components/questions'
import { Rating } from '../components/rating'
import { WhoAreWe } from '../components/who-are-we'
import { YouKnow } from '../components/youknow'

export function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <YouKnow />
      <Products />
      <WhoAreWe />
      <Advantages />
      <Questions />
      <Rating />
      <Contact />
    </div>
  )
}
