import { Outlet } from 'react-router'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const DefaultLayout = () => {
  return (
    <div className="bg-zinc-100 w-full h-screen font-primary">
      <Header />
      <div className="pt-[70px] min-h-[calc(100%-25px)] scroll-smooth">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
