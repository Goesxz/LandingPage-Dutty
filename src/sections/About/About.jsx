import imgabout from '../../assets/images/imgabout.jpg'
import { useEffect, useRef } from 'react'
import './About.css'

function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const revealEls = section.querySelectorAll('.reveal')

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      revealEls.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -70px 0px',
      }
    )

    revealEls.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="about section"
      id="sobre"
      ref={sectionRef}
      aria-labelledby="about-title"
    >
      <div className="about__background" aria-hidden="true">
        <span className="about__background-word">HISTÓRIA</span>
        <span className="about__background-line"></span>
      </div>

      <div className="container about__container">
        <header className="about__masthead reveal">
          <div className="section-label">
            <span></span>
            SOBRE O ARTISTA
          </div>

          <div className="about__meta">
            <span>01 / 03</span>
            <span>EDUARDO HENRIQUE</span>
          </div>
        </header>

        <div className="about__editorial">
          <figure className="about__photo reveal">
            <img
  className="about__photo-media"
  src={imgabout}
  alt="Eduardo Henrique"
/>

            <div className="about__photo-texture" aria-hidden="true"></div>

            <figcaption className="about__photo-caption">
              <span>EDUARDO HENRIQUE</span>
              <span>CANTOR • COMPOSITOR</span>
            </figcaption>

            <span className="about__photo-number" aria-hidden="true">
              01
            </span>
          </figure>

          <div className="about__story">
            <div className="about__headline reveal">
              <span className="about__eyebrow">
                UMA VOZ. UMA IDENTIDADE.
              </span>

              <h2 id="about-title">
                MAIS QUE UM
                <br />
                CANTOR.
                <strong>
                  UMA HISTÓRIA
                  <br />
                  QUE VIROU MÚSICA.
                </strong>
              </h2>
            </div>

            <div className="about__chapters">
              <article className="about__chapter reveal">
                <div className="about__chapter-heading">
                  <span>01</span>
                  <strong>IDENTIDADE</strong>
                </div>

                <p>
                  Eduardo Henrique encontrou no samba e no pagode
                  uma forma de transformar sentimentos, experiências
                  e histórias em música.
                </p>
              </article>

              <article className="about__chapter reveal">
                <div className="about__chapter-heading">
                  <span>02</span>
                  <strong>TRAJETÓRIA</strong>
                </div>

                <p>
                  Cantor e compositor, vem construindo sua trajetória
                  com autenticidade, presença de palco e uma conexão
                  verdadeira com o público.
                </p>
              </article>

              <article className="about__chapter reveal">
                <div className="about__chapter-heading">
                  <span>03</span>
                  <strong>PALCO</strong>
                </div>

                <p>
                  Sua caminhada já o levou a dividir o palco com
                  grandes nomes da música brasileira, incluindo
                  <strong> Mumuzinho</strong>.
                </p>
              </article>
            </div>

            <div className="about__signature reveal">
              <span>
                A MÚSICA É A FORMA
                <br />
                DE CONTAR ESSA HISTÓRIA.
              </span>

              <strong>EH.</strong>
            </div>
          </div>
        </div>

        <section
          className="about__marks reveal"
          aria-label="Essência artística"
        >
          <div className="about__marks-heading">
            <span className="about__marks-index">04</span>

            <div>
              <span className="about__marks-kicker">MARCA</span>
              <h3>O QUE MOVE O SOM.</h3>
            </div>
          </div>

          <div className="about__marks-row">
            <div className="about__mark about__mark--large">
              <strong>+</strong>
              <span>COMPOSIÇÕES</span>
            </div>

            <div className="about__mark">
              <strong>+</strong>
              <span>SHOWS</span>
            </div>

            <div className="about__mark about__mark--accent">
              <strong>01</strong>
              <span>PROPÓSITO</span>
            </div>

            <div className="about__mark">
              <strong>100%</strong>
              <span>VERDADE</span>
            </div>
          </div>
        </section>

        <div className="about__cta reveal">
          <a href="#musica">
            <span>CONHEÇA O SOM</span>
            <strong>Ouvir a música do Eduardo</strong>
            <b aria-hidden="true">↗</b>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
