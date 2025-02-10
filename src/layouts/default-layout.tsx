import { Outlet } from 'react-router'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
