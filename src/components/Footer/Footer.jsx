import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">

        <div className="footer__top">

          <div className="footer__brand">
            <a
              href="#inicio"
              className="footer__logo"
              aria-label="Eduardo Henrique — voltar ao início"
            >
              EH<span>.</span>
            </a>

            <p className="footer__tagline">
              O pagode que faz<br />
              a galera cantar.
            </p>
          </div>

          <nav
            className="footer__nav"
            aria-label="Navegação do rodapé"
          >
            <div className="footer__group">
              <span className="footer__label">
                NAVEGAÇÃO
              </span>

              <a href="#inicio">Início</a>
              <a href="#musica">Música</a>
              <a href="#sobre">Sobre</a>
              <a href="#videos">Vídeos</a>
              <a href="#galeria">Galeria</a>
              <a href="#agenda">Agenda</a>
            </div>
          </nav>

          <div className="footer__contact">
            <span className="footer__label">
              CONTATO
            </span>

            <a href="#contrate">
              Contrate o artista
            </a>

            <a href="mailto:contato@eduardohenrique.com">
              contato@eduardohenrique.com
            </a>

            <span className="footer__location">
              São Paulo · Brasil
            </span>
          </div>

          <div className="footer__social">
            <span className="footer__label">
              REDES
            </span>

            <a
              href="#instagram"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#youtube"
              target="_blank"
              rel="noreferrer"
            >
              YouTube
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#spotify"
              target="_blank"
              rel="noreferrer"
            >
              Spotify
              <span aria-hidden="true">↗</span>
            </a>
          </div>

        </div>

        <div className="footer__middle">
          <div className="footer__middle-line" />

          <span className="footer__middle-copy">
            COMPOSIÇÃO · VOZ · PAGODE · SHOW
          </span>

          <span className="footer__middle-copy footer__middle-copy--right">
            EH / 2026
          </span>
        </div>

        <div className="footer__bottom">

          <div className="footer__copyright">
            © {currentYear} Eduardo Henrique.
            <span>Todos os direitos reservados.</span>
          </div>

          <a
            href="#inicio"
            className="footer__back-top"
            aria-label="Voltar ao início"
          >
            <span aria-hidden="true">↑</span>
          </a>

        </div>

        <div
          className="footer__watermark"
          aria-hidden="true"
        >
          EDUARDO
        </div>

      </div>
    </footer>
  )
}

export default Footer

