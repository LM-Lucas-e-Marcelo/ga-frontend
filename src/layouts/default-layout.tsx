import { Outlet } from 'react-router'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const DefaultLayout = () => {
  return (
    <div className="bg-zinc-100 w-full h-screen">
      <Header />
      <div className="pt-[70px] min-h-[calc(100%-25px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
