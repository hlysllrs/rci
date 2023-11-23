import Image from 'next/image'
import Link from 'next/link'
import RCILogo from '../../../public/rci-logo.png'

import { NAV_LINKS } from '../constants'

const NavBar = () => {
  return (
    <nav className="flex justify-between m-4 bg-slate-400">
      <Link href="/">
        <Image src={RCILogo} alt="logo" height={100} width={200} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-black flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
