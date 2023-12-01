import Image from 'next/image'
import Link from 'next/link'
import RCILogo from '../../../public/rci-logo.png'

import { NAV_LINKS } from '../constants'

const NavBar = () => {
  return (
    <nav className="flex justify-between h-36 lg:grid lg:grid-cols-12 p-8 border-b-2 border-white z-10 items-center">
      <Link href="/" className="lg: col-span-7">
        <Image src={RCILogo} alt="logo" height={80} width={160} />
      </Link>
      <ul className="hidden h-full gap-12 lg:col-start-8 lg:col-end-13 lg:flex lg:items-center lg:justify-between">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
