import './Agenda.css'

const events = [
  {
    id: '01',
    month: 'OUT',
    day: '18',
    weekday: 'SÁB',
    title: 'Eduardo Henrique Ao Vivo',
    venue: 'Local do evento',
    city: 'São Paulo',
    state: 'SP',
    status: 'CONFIRMADO',
  },
  {
    id: '02',
    month: 'OUT',
    day: '25',
    weekday: 'SÁB',
    title: 'Pagode Sunset',
    venue: 'Local do evento',
    city: 'Barueri',
    state: 'SP',
    status: 'CONFIRMADO',
  },
  {
    id: '03',
    month: 'NOV',
    day: '08',
    weekday: 'SÁB',
    title: 'Samba & Pagode',
    venue: 'Local do evento',
    city: 'São Paulo',
    state: 'SP',
    status: 'CONFIRMADO',
  },
]

function Agenda() {
  return (
    <section className="agenda section" id="agenda">

      <div className="agenda__glow agenda__glow--purple"></div>
      <div className="agenda__glow agenda__glow--orange"></div>

      <div className="container">

        {/* HEADER */}

        <div className="agenda__header">

          <div className="agenda__heading">

            <div className="section-label">
              <span></span>
              AGENDA
            </div>

            <h2>
              ONDE A
              <br />
              <strong>GALERA VAI CANTAR.</strong>
            </h2>

          </div>

          <div className="agenda__intro">

            <span className="agenda__counter">
              2026
            </span>

            <p>
              Confira os próximos shows e acompanhe
              de perto a agenda de Eduardo Henrique.
            </p>

          </div>

        </div>

        {/* EVENTS */}

        <div className="agenda__list">

          {events.map((event) => (
            <article
              className="agenda__event"
              key={event.id}
            >

              {/* INDEX */}

              <div className="agenda__index">
                {event.id}
              </div>

              {/* DATE */}

              <div className="agenda__date">

                <span>
                  {event.month}
                </span>

                <strong>
                  {event.day}
                </strong>

                <small>
                  {event.weekday}
                </small>

              </div>

              {/* INFO */}

              <div className="agenda__info">

                <div className="agenda__status">
                  <i></i>
                  {event.status}
                </div>

                <h3>
                  {event.title}
                </h3>

                <p>
                  {event.venue}
                </p>

              </div>

              {/* LOCATION */}

              <div className="agenda__location">

                <span>
                  LOCAL
                </span>

                <strong>
                  {event.city}
                  <small>
                    / {event.state}
                  </small>
                </strong>

              </div>

              {/* ACTION */}

              <a
                href="#contrate"
                className="agenda__action"
                aria-label={`Solicitar informações sobre ${event.title}`}
              >
                <span>
                  +
                </span>

                <small>
                  INFO
                </small>
              </a>

            </article>
          ))}

        </div>

        {/* BOTTOM */}

        <div className="agenda__bottom">

          <div className="agenda__bottom-content">

            <span>
              SEU EVENTO PODE ESTAR AQUI
            </span>

            <strong>
              Quer levar o show
              <br />
              para sua cidade?
            </strong>

          </div>

          <a
            href="#contrate"
            className="agenda__cta"
          >
            Solicitar orçamento
            <span>↗</span>
          </a>

        </div>

      </div>

    </section>
  )
}

export default Agenda
