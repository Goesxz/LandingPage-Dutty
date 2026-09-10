import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">

      <div className="footer__glow footer__glow--purple"></div>
      <div className="footer__glow footer__glow--orange"></div>

      <div className="container">

        {/* CTA PRINCIPAL */}

        <div className="footer__hero">

          <div className="footer__hero-watermark">
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

            <p>
              Samba, pagode e histórias que
              continuam sendo cantadas.
            </p>

            <a
              href="#contrate"
              className="footer__hero-button"
            >
              Contrate o artista
              <span>↗</span>
            </a>

          </div>

          <div className="footer__hero-number">
            <span>09</span>
            <i></i>
            <small>FIM</small>
          </div>

        </div>

        {/* DIVISOR */}

        <div className="footer__divider"></div>

        {/* MAIN */}

        <div className="footer__main">

          <div className="footer__brand">

            <a
              href="#inicio"
              className="footer__logo"
            >
              EH<span>.</span>
            </a>

            <p>
              O pagode que faz
              <br />
              a galera cantar.
            </p>

          </div>

          <div className="footer__column">

            <span className="footer__title">
              NAVEGAÇÃO
            </span>

            <a href="#inicio">Início</a>
            <a href="#musica">Música</a>
            <a href="#sobre">Sobre</a>
            <a href="#videos">Vídeos</a>
            <a href="#galeria">Galeria</a>
            <a href="#agenda">Agenda</a>

          </div>

          <div className="footer__column">

            <span className="footer__title">
              CONTATO
            </span>

            <a href="#contrate">
              Solicitar orçamento
            </a>

            <a href="mailto:contato@eduardohenrique.com">
              contato@eduardohenrique.com
            </a>

            <span className="footer__muted">
              São Paulo • Brasil
            </span>

          </div>

          <div className="footer__column">

            <span className="footer__title">
              REDES
            </span>

            <a href="#redes">Instagram ↗</a>
            <a href="#redes">YouTube ↗</a>
            <a href="#redes">Spotify ↗</a>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="footer__bottom">

          <p>
            © {currentYear} Eduardo Henrique.
            Todos os direitos reservados.
          </p>

          <div className="footer__bottom-right">

            <span>
              SAMBA • PAGODE • MÚSICA
            </span>

            <a
              href="#inicio"
              className="footer__back-top"
              aria-label="Voltar ao início"
            >
              ↑
            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer
