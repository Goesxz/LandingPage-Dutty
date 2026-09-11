import tocandoviolão from '../../assets/images/tocandoviolão.png'
import './Socials.css'

const socials = [
  {
    id: '01',
    name: 'Instagram',
    handle: '@eduardohenrique',
    description: 'Bastidores, shows, novidades e momentos da rotina.',
    symbol: '◎',
    className: 'instagram',
    featured: true,
  },
  {
    id: '02',
    name: 'YouTube',
    handle: 'Eduardo Henrique',
    description: 'Shows, performances e conteúdos em vídeo.',
    symbol: '▶',
    className: 'youtube',
  },
  {
    id: '03',
    name: 'Spotify',
    handle: 'Eduardo Henrique',
    description: 'Músicas, lançamentos e o som que acompanha a história.',
    symbol: '●',
    className: 'spotify',
  },
]

function Socials() {
  return (
    <section
      className="socials section"
      id="redes"
      aria-labelledby="socials-title"
    >
      {/* BACKGROUND */}

      <div className="socials__background" aria-hidden="true">
        <span className="socials__background-word">
          CONECTA
        </span>

        <span className="socials__background-number">
          05
        </span>
      </div>

      <div className="container">

        {/* HEADER */}

        <header className="socials__header">

          <div className="socials__heading">

            <div className="section-label">
              <span />
              REDES SOCIAIS
            </div>

            <h2 id="socials-title">
              O SHOW
              <br />
              <strong>CONTINUA.</strong>
            </h2>

          </div>

          <div className="socials__intro">

            <div
              className="socials__intro-mascot"
              aria-hidden="true"
            >
              <img
                src={tocandoviolão}
                alt=""
              />
            </div>

            <p>
              Acompanhe Eduardo Henrique além do palco.
              Música, bastidores, novidades e tudo o que
              acontece entre um show e outro.
            </p>

          </div>

        </header>

        {/* SOCIAL EDITORIAL GRID */}

        <div
          className="socials__grid"
          aria-label="Redes sociais de Eduardo Henrique"
        >

          {socials.map((social) => (

            <a
              href="#"
              className={`social-card social-card--${social.className} ${
                social.featured
                  ? 'social-card--featured'
                  : ''
              }`}
              key={social.id}
              aria-label={`${social.name} de Eduardo Henrique`}
            >

              {/* CARD BACKGROUND */}

              <div
                className="social-card__background"
                aria-hidden="true"
              >
                <span>
                  {social.name}
                </span>
              </div>

              {/* CARD TOP */}

              <div className="social-card__top">

                <span className="social-card__number">
                  {social.id}
                </span>

                <span className="social-card__type">
                  {social.name}
                </span>

              </div>

              {/* CARD VISUAL */}

              <div
                className="social-card__visual"
                aria-hidden="true"
              >

                <div className="social-card__icon">
                  {social.symbol}
                </div>

                <span className="social-card__visual-word">
                  {social.name}
                </span>

              </div>

              {/* CARD BOTTOM */}

              <div className="social-card__bottom">

                <div className="social-card__info">

                  <span>
                    {social.handle}
                  </span>

                  <p>
                    {social.description}
                  </p>

                </div>

                <div
                  className="social-card__arrow"
                  aria-hidden="true"
                >
                  ↗
                </div>

              </div>

            </a>

          ))}

        </div>

        {/* FINAL CTA */}

        <div className="socials__closing">

          <div className="socials__closing-index">

            <span>
              05
            </span>

            <i />

          </div>

          <div className="socials__closing-copy">

            <span>
              SIGA DE PERTO
            </span>

            <h3>
              A música muda.
              <br />
              <strong>
                A conexão fica.
              </strong>
            </h3>

          </div>

          <a
            href="#"
            className="socials__closing-link"
          >

            <span>
              @eduardohenrique
            </span>

            <strong aria-hidden="true">
              ↗
            </strong>

          </a>

        </div>

        {/* FOOTER DA SEÇÃO */}

        <div className="socials__footer">

          <span>
            EDUARDO HENRIQUE
          </span>

          <span>
            SAMBA • PAGODE • MÚSICA
          </span>

          <span>
            ATÉ O PRÓXIMO SHOW ↗
          </span>

        </div>

      </div>
    </section>
  )
}

export default Socials

