import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logoWhite from '../../assets/img/logo-white.svg'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 h-16 w-full">
      <a href="index.html">
        <img src={logoWhite} alt="logo do site" className="h-8 w-auto" />
      </a>
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          className="rounded-full p-2"
        >
          {menuOpen ? (
            <X size={24} color="black" />
          ) : (
            <Menu size={24} color="black" />
          )}
        </button>
      </div>
      <nav
        className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 top-full w-full flex-col py-3 shadow-md md:static md:flex md:flex-row md:space-x-4 md:py-0 md:shadow-none`}
      >
        <div className="mx-auto flex items-center  justify-between">
          <a
            href="#inicio"
            className="rounded-lg px-5 py-2 text-gray-700 hover:bg-white hover:text-gray-900 md:mx-2"
          >
            Início
          </a>
          <a
            href="#clinica"
            className="rounded-lg px-5 py-2 text-gray-700 hover:bg-white hover:text-gray-900 md:mx-2"
          >
            Clínica
          </a>
          <a
            href="#farmacia"
            className="rounded-lg px-5 py-2 text-gray-700 hover:bg-white hover:text-gray-900 md:mx-2"
          >
            Farmácia
          </a>
          <a
            href="#duvidas"
            className="rounded-lg px-5 py-2 text-gray-700 hover:bg-white hover:text-gray-900 md:mx-2"
          >
            Dúvida
          </a>
        </div>
      </nav>
    </header>
  )
}
