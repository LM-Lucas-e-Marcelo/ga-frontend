import { VariantProps, tv } from 'tailwind-variants'
import { NAV_BAR_ITEMS } from '../../constants/nav'

const mobileMenu = tv({
  base: 'fixed top-0 left-[-1000px] bg-gradient-to-r from-white to-zinc-100 w-full h-screen mt-[60px] transition-all md:hidden',
  variants: {
    isOpen: {
      true: 'left-0',
    },
  },
})

// const dropdownMenu = tv({
//   base: "h-[0] overflow-hidden transition-all bg-zinc-100",
//   variants: {
//     isOpen: {
//       true: "h-[130px]",
//     },
//   },
// });

interface MobileMenuProps extends VariantProps<typeof mobileMenu> {
  onClose: () => void
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div className={mobileMenu({ isOpen })}>
      <nav>
        <ul className="flex flex-col">
          {Object.entries(NAV_BAR_ITEMS).map(([key, value]) => (
            <li>
              <a
                onClick={onClose}
                href={value.link}
                className="p-5 text-center border-b border-zinc-200 w-full block"
              >
                {key}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
