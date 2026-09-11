import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">

        {/* ENCERRAMENTO */}

        <div className="footer__hero">
          <div className="footer__watermark" aria-hidden="true">
            EH.
          </div>

          <div className="footer__hero-content">
            <span className="footer__eyebrow">
              EDUARDO HENRIQUE
            </span>

            <h2>
              A MÚSICA
              <br />
              <strong>NÃO PARA.</strong>
            </h2>

            <a
              href="#inicio"
              className="footer__hero-link"
            >
              Voltar ao início
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>

        {/* NAVEGAÇÃO */}

        <div className="footer__main">

          <div className="footer__brand">
            <a
              href="#inicio"
              className="footer__logo"
              aria-label="Eduardo Henrique — início"
            >
              EH<span>.</span>
            </a>

            <p>
              O pagode que faz
              <br />
              a galera cantar.
            </p>
          </div>

          <nav
            className="footer__column"
            aria-label="Navegação do site"
          >
            <span className="footer__title">
              NAVEGAÇÃO
            </span>

            <a href="#inicio">Início</a>
            <a href="#musica">Música</a>
            <a href="#sobre">Sobre</a>
            <a href="#videos">Vídeos</a>
            <a href="#galeria">Galeria</a>
            <a href="#agenda">Agenda</a>
          </nav>

          <div className="footer__column">
            <span className="footer__title">
              CONTATO
            </span>

            <a href="#contrate">
              Contrate o artista
            </a>

            <a href="mailto:contato@eduardohenrique.com">
              contato@eduardohenrique.com
            </a>

            <span className="footer__muted">
              São Paulo • Brasil
            </span>
          </div>

          <nav
            className="footer__column"
            aria-label="Redes sociais"
          >
            <span className="footer__title">
              REDES
            </span>

            <a href="#redes">Instagram ↗</a>
            <a href="#redes">YouTube ↗</a>
            <a href="#redes">Spotify ↗</a>
          </nav>

        </div>

        {/* BOTTOM */}

        <div className="footer__bottom">
          <p>
            © {currentYear} Eduardo Henrique.
            Todos os direitos reservados.
          </p>

          <span>
            SAMBA • PAGODE • MÚSICA
          </span>

          <a
            href="#inicio"
            className="footer__top"
            aria-label="Voltar ao início"
          >
            ↑
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer

