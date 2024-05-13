import imgLogo from '../../assets/img/logo.svg'

export function Footer() {
  return (
    <>
      <footer className="bg-gray-100 p-4 text-gray-700 sm:p-6">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <img src={imgLogo} alt="PetLife" className="mx-auto w-48 sm:mx-0" />
            <p className="mt-2 text-center sm:text-left">
              Cuidado com amor, vivendo com alegria: PetLife, onde a vida dos
              pets é mais feliz!
            </p>
          </div>

          <div>
            <strong className="titulo mb-2 block text-lg font-bold">
              Links rápidos
            </strong>
            <nav className="flex flex-col items-center sm:items-start">
              <a href="#inicio" className="mb-1 hover:underline">
                Início
              </a>
              <a href="#clinica" className="mb-1 hover:underline">
                Clínica
              </a>
              <a href="#farmacia" className="mb-1 hover:underline">
                Farmácia
              </a>
              <a href="#duvidas" className="mb-1 hover:underline">
                Dúvidas
              </a>
            </nav>
          </div>

          <div>
            <strong className="titulo mb-2 block text-lg font-bold">
              Encontre-nos
            </strong>
            <p className="mb-1">
              WhatsApp:
              <a
                href="https://wa.me/69992991613"
                target="_blank"
                className="hover:underline"
              >
                (00) 00000-0000
              </a>
            </p>
            <p className="mb-1">
              Email:{' '}
              <a href="mailto:cassanopb@gmail.com" className="hover:underline">
                cassianodev@gmail.com
              </a>
            </p>
            <p className="mb-1">Endereço: Av. 7 de setembro, nº 00, Centro</p>
          </div>
        </div>
      </footer>

      <div id="copyright" className="bg-gray-800 p-4 text-center text-white">
        Desenvolvido por
        <a
          href="https://github.com/cassianobraz"
          target="_blank"
          className="ml-2 hover:underline"
        >
          @CassianoPereira
        </a>
      </div>
    </>
  )
}
