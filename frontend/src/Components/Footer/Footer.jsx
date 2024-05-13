import imgLogo from '../../assets/img/logo.svg'

export function Footer() {
  return (
    <>
      <footer>
        <div>
          <img src={imgLogo} alt="PetLife" />
          <p>
            Cuidado com amor, vivendo com alegria: PetLife, onde a vida dos pets
            é mais feliz!
          </p>
        </div>

        <div>
          <strong className="titulo">Links rápidos</strong>
          <nav>
            <a href="#inicio">Início</a>
            <a href="#clinica">Clínica</a>
            <a href="#farmacia">Farmácia</a>
            <a href="#duvidas">Dúvida</a>
          </nav>
        </div>

        <div>
          <strong className="titulo">Encontre-nos</strong>
          <p>
            WhatsApp:
            <a href="https://wa.me/0000000000000" target="_blank">
              (00) 00000-0000
            </a>
          </p>
          <p>
            Email: <a href="mailto:contato@petlife.com">contato@petlife.com</a>
          </p>
          <p>Endereço: Av. 7 de setembro, nº 00, Centro</p>
        </div>
      </footer>
      <div id="copyright">
        Desenvolvido por
        <a href="https://github.com/cassianobraz" target="_blank">
          @CassianoPereira
        </a>
        na trilha Start na Programação 🤘 da OneBitCode
      </div>
    </>
  )
}
