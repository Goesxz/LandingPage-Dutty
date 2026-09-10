import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__container">

        <a href="#inicio" className="navbar__logo" aria-label="Eduardo Henrique — início">
          <span></span>
        </a>

       <nav className="navbar__menu" aria-label="Navegação principal">
  <a href="#musica">Música</a>
  <a href="#sobre">Sobre</a>
  <a href="#videos">Vídeos</a>
  <a href="#galeria">Galeria</a>
  <a href="#agenda">Agenda</a>
  <a href="#contato">Contato</a>
</nav>

        <a
          href="#contrate"
          className="navbar__button"
        >
          Contrate
        </a>

      </div>
    </header>
  )
}

export default Navbar
