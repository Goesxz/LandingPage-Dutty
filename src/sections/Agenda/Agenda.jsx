import './Agenda.css'

function Agenda() {
  return (
    <section
      className="agenda section"
      id="agenda"
      aria-labelledby="agenda-title"
    >
      <div className="agenda__background" aria-hidden="true">
        <span className="agenda__background-word">LIVE</span>
        <span className="agenda__background-line"></span>
      </div>

      <div className="container agenda__container">

        {/* HEADER */}

        <header className="agenda__header">

          <div className="agenda__heading">

            <div className="section-label">
              <span></span>
              AO VIVO
            </div>

            <h2 id="agenda-title">
              NOVAS DATAS
              <br />
              <strong>ESTÃO SENDO ESCRITAS.</strong>
            </h2>

          </div>

          <div className="agenda__intro">

            <span className="agenda__counter">
              01
            </span>

            <p>
              O palco ainda está sendo construído.
              E pode ser na sua cidade, no seu evento
              ou na sua próxima celebração.
            </p>

          </div>

        </header>


        {/* AVAILABILITY */}

        <div className="agenda__availability">

          <div className="agenda__availability-main">

            <span className="agenda__eyebrow">
              DISPONIBILIDADE
            </span>

            <h3>
              O PRÓXIMO SHOW
              <br />
              <strong>PODE SER O SEU.</strong>
            </h3>

          </div>


          <div className="agenda__availability-info">

            <div className="agenda__availability-status">
              <span></span>
              NOVAS DATAS ABERTAS
            </div>

            <p>
              Eduardo Henrique está disponível para
              shows, eventos, festas, casas e projetos
              musicais.
            </p>

          </div>

        </div>


        {/* AREAS */}

        <div className="agenda__areas">

          <div className="agenda__area">

            <span className="agenda__area-index">
              01
            </span>

            <div>
              <strong>
                SHOWS
              </strong>

              <p>
                Samba e pagode ao vivo,
                com repertório para cantar junto.
              </p>
            </div>

          </div>


          <div className="agenda__area">

            <span className="agenda__area-index">
              02
            </span>

            <div>
              <strong>
                EVENTOS
              </strong>

              <p>
                Festas, confraternizações,
                celebrações e eventos particulares.
              </p>
            </div>

          </div>


          <div className="agenda__area">

            <span className="agenda__area-index">
              03
            </span>

            <div>
              <strong>
                NOVOS PROJETOS
              </strong>

              <p>
                Casas, parcerias e oportunidades
                para levar o som mais longe.
              </p>
            </div>

          </div>

        </div>


        {/* CTA */}

        <div className="agenda__cta">

          <div className="agenda__cta-copy">

            <span>
              SEU EVENTO PODE ESTAR AQUI
            </span>

            <strong>
              VAMOS MARCAR
              <br />
              UMA DATA?
            </strong>

          </div>


          <a
            href="#contrate"
            className="agenda__cta-link"
          >
            <span>
              CONTRATE O EDUARDO
            </span>

            <strong aria-hidden="true">
              ↗
            </strong>
          </a>

        </div>


        {/* FOOTER */}

        <div className="agenda__footer">

          <span>
            EDUARDO HENRIQUE
          </span>

          <span>
            SAMBA • PAGODE • MÚSICA
          </span>

          <span>
            NOVAS OPORTUNIDADES
          </span>

        </div>

      </div>
    </section>
  )
}

export default Agenda

