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
      { threshold: 0.2, rootMargin: '0px 0px -80px 0px' }
    )

    revealEls.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="about section" id="sobre" ref={sectionRef}>

      <div className="about__glow"></div>

      <div className="about__bgword" aria-hidden="true">
        PAGODE
      </div>

      <div className="container about__container">

        <div className="about__masthead reveal">

          <div className="section-label">
            <span></span>
            SOBRE O ARTISTA
          </div>

          <span className="about__index">
            01 / 03
          </span>

        </div>

        <div className="about__editorial">

          <div className="about__photo reveal">

            <div
              className="about__photo-media"
              role="img"
              aria-label="Fotografia editorial de Eduardo Henrique"
            />

            <div className="about__photo-overlay"></div>

            <div className="about__photo-caption">
              <span>EDUARDO HENRIQUE</span>
              <span>CANTOR • COMPOSITOR</span>
            </div>

          </div>

          <div className="about__story">

            <div className="about__headline reveal">
              <h2>
                <span>MAIS QUE UM</span>
                <span>CANTOR.</span>
                <strong>
                  UMA HISTÓRIA
                  <br />
                  QUE VIROU MÚSICA.
                </strong>
              </h2>
            </div>

            <div className="about__chapters">

              <div className="about__chapter reveal">
                <span className="about__chapter-index">
                  01 — IDENTIDADE
                </span>
                <p>
                  Eduardo Henrique encontrou no samba e no
                  pagode uma forma de transformar sentimentos,
                  experiências e histórias em música.
                </p>
              </div>

              <div className="about__chapter reveal">
                <span className="about__chapter-index">
                  02 — TRAJETÓRIA
                </span>
                <p>
                  Cantor e compositor, vem construindo sua
                  trajetória com autenticidade, presença de
                  palco e uma conexão verdadeira com o público.
                </p>
              </div>

              <div className="about__chapter reveal">
                <span className="about__chapter-index">
                  03 — PALCO
                </span>
                <p>
                  Sua caminhada já o levou a dividir o palco
                  com grandes nomes da música brasileira,
                  incluindo <strong>Mumuzinho</strong>.
                </p>
              </div>

            </div>

            <div className="about__signature reveal">
              <span>
                A MÚSICA É A FORMA
                <br />
                DE CONTAR ESSA HISTÓRIA.
              </span>

              <strong>
                EH.
              </strong>
            </div>

          </div>

        </div>

        <div className="about__marks reveal">

          <span className="about__marks-label">
            04 — MARCA
          </span>

          <div className="about__marks-row">

            <div className="about__mark about__mark--lg">
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

        </div>

        <div className="about__cta reveal">
          <a href="#musica">
            Ouvir a música do Eduardo
            <span>↗</span>
          </a>
        </div>

      </div>

    </section>
  )
}

export default About


