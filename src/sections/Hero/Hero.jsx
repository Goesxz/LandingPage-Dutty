import heroImg from '../../assets/images/hero-img.jpg'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <h1 id="hero-title" className="sr-only">
        Eduardo Henrique — O pagode que faz a galera cantar.
      </h1>

      <div className="hero__art" aria-hidden="true">
      <img
  className="hero__image"
  src={heroImg}
  alt=""
  fetchPriority="high"
  decoding="async"
/>
      </div>

      <div className="hero__actions" aria-label="Ações principais">
        <a href="#musica" className="hero__action hero__action--listen">
          <span>Ouça agora</span>
          <span aria-hidden="true">↗</span>
        </a>
        <a href="#contrate" className="hero__action hero__action--book">
          <span>Contrate o artista</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="hero__footer" aria-hidden="true">
        <span className="hero__index">01</span>
        <span className="hero__rule" />
        <span className="hero__scroll">ROLE PARA EXPLORAR</span>
      </div>
    </section>
  )
}

export default Hero
