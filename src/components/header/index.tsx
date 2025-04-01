import { NAV_BAR_ITEMS } from '../../constants/nav'
import logo from '../../assets/short-logo.png'
import { ContactButton } from './contact-button'
import { useState } from 'react'
import { FiX, RxHamburgerMenu } from '../../assets/icons'
import { MobileMenu } from './mobile-menu'

export const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  const handleToggleMobileMenu = () =>
    setOpenMobileMenu((prevState) => !prevState)

  return (
    <header className="bg-white px-4 fixed top-0 left-0 right-0 z-60 border-b border-zinc-200">
      <div className="w-full flex h-[70px] items-center gap-[100px] max-w-[1440px] mx-auto px-[16px]">
        <a href="/" className='mb-[-10px] ml-[-40px] md:ml-0'>
          <img src={logo} alt="Logo" width={200} />
        </a>
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-8 text-lg">
            {Object.entries(NAV_BAR_ITEMS).map(([key, value]) => (
              <li className="text-black hover:underline" key={key}>
                <a href={value.link}>{key}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex ml-auto gap-4">
          <ContactButton />
          {openMobileMenu ? (
            <button
              onClick={handleToggleMobileMenu}
              className="text-red-500 md:hidden"
            >
              <FiX size={30} />
            </button>
          ) : (
            <button onClick={handleToggleMobileMenu} className="md:hidden">
              <RxHamburgerMenu size={24} />
            </button>
          )}
        </div>
      </div>
      <MobileMenu isOpen={openMobileMenu} onClose={handleToggleMobileMenu} />
    </header>
  )
}
