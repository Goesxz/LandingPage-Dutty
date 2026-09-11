import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__container">

        <a
  href="#inicio"
  className="navbar__logo"
  aria-label="Eduardo Henrique — início"
>
  <img
    src="/src/assets/images/deboa.png"
    alt=""
    className="navbar__mascot"
  />

  <span className="navbar__brand">
    EDUARDO
    <strong>HENRIQUE</strong>
  </span>
</a>

        <nav
          className="navbar__menu"
          aria-label="Navegação principal"
        >
          <a href="#musica">Música</a>
          <a href="#sobre">Sobre</a>
          <a href="#videos">Vídeos</a>
          <a href="#galeria">Galeria</a>
          <a href="#agenda">Agenda</a>
          <a href="#contrate">Contato</a>
        </nav>

        <a
          href="#contrate"
          className="navbar__button"
        >
          <span>Contrate</span>
          <strong aria-hidden="true">↗</strong>
        </a>

      </div>
    </header>
  )
}

export default Navbar