import './Booking.css'

function Booking() {
  return (
    <section
      className="booking section"
      id="contrate"
      aria-labelledby="booking-title"
    >
      <div className="booking__background" aria-hidden="true">
        <span className="booking__background-word">SHOW</span>
        <span className="booking__background-number">06</span>
      </div>

      <div className="container">
        <header className="booking__header">
          <div className="section-label">
            <span />
            CONTRATE O ARTISTA
          </div>

          <div className="booking__meta">
            <span>06 / 06</span>
            <span>EDUARDO HENRIQUE</span>
          </div>
        </header>

        <div className="booking__editorial">
          <div className="booking__main">
            <span className="booking__eyebrow">
              SEU EVENTO. O PRÓXIMO PALCO.
            </span>

            <h2 id="booking-title">
              LEVE O
              <br />
              <strong>SHOW</strong>
              <br />
              DE EDUARDO
              <br />
              HENRIQUE.
            </h2>

            <p className="booking__description">
              Aniversários, casamentos, eventos corporativos, bares,
              restaurantes ou celebrações especiais.
              <br />
              Entre em contato e conte um pouco sobre o seu evento.
            </p>

            <div className="booking__actions">
              <a
                href="#"
                className="booking__action booking__action--primary"
              >
                <span>
                  <small>FALE PELO</small>
                  WhatsApp
                </span>
                <strong aria-hidden="true">↗</strong>
              </a>

              <a
                href="mailto:contato@eduardohenrique.com"
                className="booking__action"
              >
                <span>
                  <small>ENVIE UM</small>
                  E-mail
                </span>
                <strong aria-hidden="true">↗</strong>
              </a>
            </div>

            <span className="booking__note">
              DISPONIBILIDADE • CONTRATAÇÃO • INFORMAÇÕES DO SHOW
            </span>
          </div>

          <aside
            className="booking__aside"
            aria-label="Informações para contratação"
          >
            <div className="booking__aside-top">
              <span>EH.</span>
              <span>BOOKING</span>
            </div>

            <div className="booking__aside-middle">
              <span className="booking__aside-label">
                O PRÓXIMO PALCO
              </span>

              <p>
                PODE SER
                <br />
                <strong>O SEU.</strong>
              </p>

              <div className="booking__aside-line" />
            </div>

            <div className="booking__aside-bottom">
              <div>
                <span>01</span>
                <p>ENTRE EM<br />CONTATO</p>
              </div>

              <div>
                <span>02</span>
                <p>CONTE SOBRE<br />O EVENTO</p>
              </div>

              <div>
                <span>03</span>
                <p>VAMOS<br />CONVERSAR</p>
              </div>
            </div>
          </aside>
        </div>

        <footer className="booking__footer"> 
          <span>EDUARDO HENRIQUE</span>
          <span>SAMBA • PAGODE • MÚSICA</span>
          <span>SEU EVENTO ↗</span>
        </footer>
      </div>
    </section>
  )
}

export default Booking

