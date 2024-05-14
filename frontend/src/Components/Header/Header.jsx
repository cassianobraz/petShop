import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logoWhite from '../../assets/img/logo-white.svg'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Verifica se o clique foi fora do conteúdo do header (considera clicar no botão como parte do header)
      if (menuOpen && !event.target.closest('.header__content, .menu-button')) {
        setMenuOpen(false)
      }
    }

    // Adiciona o listener para o clique no documento
    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      // Remove o listener ao desmontar o componente
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [menuOpen])

  return (
    <header className="header__content fixed top-0 z-50 h-10 w-full">
      <a href="index.html">
        <img
          src={logoWhite}
          alt="logo do site"
          className="h-6 w-auto md:-mt-2 md:h-8"
        />
      </a>
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          className="menu-button rounded-full p-2"
        >
          {menuOpen ? (
            <X size={30} color="white" />
          ) : (
            <Menu size={30} color="white" />
          )}
        </button>
      </div>
      <nav
        className={`${menuOpen ? 'flex bg-customOrange py-4 pt-2 md:py-0 md:pt-0' : 'hidden'} absolute left-0 top-full w-full flex-col shadow-md md:static md:mt-2 md:flex md:flex-row md:space-x-4 md:py-8 md:shadow-none`}
      >
        <div className="-mt-7 flex items-center justify-center p-4 md:-mt-2 md:ml-auto">
          <a
            href="#inicio"
            className="rounded-lg px-5 py-1 text-white hover:text-gray-900 md:mx-2"
          >
            Início
          </a>
          <a
            href="#clinica"
            className="rounded-lg px-5 py-1 text-white hover:text-gray-900 md:mx-2"
          >
            Clínica
          </a>
          <a
            href="#farmacia"
            className="rounded-lg px-5 py-1 text-white hover:text-gray-900 md:mx-2"
          >
            Farmácia
          </a>
          <a
            href="#duvidas"
            className="rounded-lg px-5 py-1 text-white hover:text-gray-900 md:mx-2"
          >
            Dúvida
          </a>
        </div>
      </nav>
    </header>
  )
}
