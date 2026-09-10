import './Booking.css'

function Booking() {
  return (
    <section className="booking section" id="contrate" aria-labelledby="booking-title">
      <div className="booking__glow booking__glow--purple" aria-hidden="true" />
      <div className="booking__glow booking__glow--orange" aria-hidden="true" />

      <div className="container">
        <div className="booking__card">
          <div className="booking__background" aria-hidden="true">
            <div className="booking__background-grid" />
            <span className="booking__background-word">SHOW</span>
          </div>

          <div className="booking__content">
            <div className="section-label">
              <span />
              CONTRATE O ARTISTA
            </div>

            <div className="booking__headline">
              <span className="booking__eyebrow">SEU EVENTO</span>
              <h2 id="booking-title">
                LEVE O SHOW
                <br />
                <strong>DE EDUARDO.</strong>
              </h2>
            </div>

            <p className="booking__description">
              Leve a experiência de Eduardo Henrique para o seu evento. Entre em contato,
              conte um pouco sobre a ocasião e solicite uma proposta personalizada.
            </p>

            <div className="booking__actions">
              <a
                href="#"
                className="booking__button booking__button--whatsapp"
               
              >
                <span className="booking__button-icon" aria-hidden="true">↗</span>
                <span className="booking__button-text">
                  <small>FALE PELO</small>
                  WhatsApp
                </span>
                <span className="booking__button-arrow" aria-hidden="true">→</span>
              </a>

              <a
                href="mailto:contato@eduardohenrique.com"
                className="booking__button booking__button--email"
              >
                <span className="booking__button-icon" aria-hidden="true">@</span>
                <span className="booking__button-text">
                  <small>ENVIE UM</small>
                  E-mail
                </span>
                <span className="booking__button-arrow" aria-hidden="true">→</span>
              </a>
            </div>

            <span className="booking__note">
              RESPONDEREMOS COM AS INFORMAÇÕES SOBRE DISPONIBILIDADE E CONTRATAÇÃO.
            </span>
          </div>

          <aside className="booking__side" aria-label="Informações sobre o show">
            <div className="booking__side-top">
              <span>EH.</span>
              <strong>02</strong>
            </div>

            <div className="booking__side-content">
              <span>
                SHOW <i>•</i> EVENTOS <i>•</i> EXPERIÊNCIAS
              </span>
              <h3>
                Vamos fazer
                <br />
                esse show
                <br />
                <strong>acontecer.</strong>
              </h3>
            </div>

            <div className="booking__side-bottom">
              <span>EDUARDO HENRIQUE</span>
              <div aria-hidden="true">↗</div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Booking
