import './Socials.css'

const socials = [
  {
    id: '01',
    name: 'Instagram',
    handle: '@eduardohenrique',
    description: 'Bastidores, shows, novidades e momentos da rotina.',
    symbol: '◎',
    className: 'instagram',
  },
  {
    id: '02',
    name: 'YouTube',
    handle: 'Eduardo Henrique',
    description: 'Shows, performances, músicas e conteúdos exclusivos.',
    symbol: '▶',
    className: 'youtube',
  },
  {
    id: '03',
    name: 'Spotify',
    handle: 'Eduardo Henrique',
    description: 'Ouça as músicas, lançamentos e playlists.',
    symbol: '●',
    className: 'spotify',
  },
]

function Socials() {
  return (
    <section className="socials section" id="redes">

      <div className="socials__glow socials__glow--purple"></div>
      <div className="socials__glow socials__glow--orange"></div>

      <div className="container">

        {/* HEADER */}

        <div className="socials__header">

          <div className="socials__heading">

            <div className="section-label">
              <span></span>
              REDES SOCIAIS
            </div>

            <h2>
              O SHOW
              <br />
              <strong>CONTINUA AQUI.</strong>
            </h2>

          </div>

          <div className="socials__intro">

            <span>
              EH.
            </span>

            <p>
              Acompanhe Eduardo Henrique,
              fique por dentro dos próximos shows
              e viva cada momento com a gente.
            </p>

          </div>

        </div>

        {/* SOCIAL CARDS */}

        <div className="socials__grid" aria-label="Redes sociais de Eduardo Henrique">

          {socials.map((social) => (
            <a
              href="#"
              className={`social-card social-card--${social.className}`}
              key={social.id}
            >

              <div className="social-card__background">
                <span>
                  {social.name}
                </span>
              </div>

              <div className="social-card__top">

                <span className="social-card__number">
                  {social.id}
                </span>

                <span className="social-card__external">
                  ↗
                </span>

              </div>

              <div className="social-card__center">

                <div className="social-card__icon">
                  {social.symbol}
                </div>

              </div>

              <div className="social-card__bottom">

                <div>

                  <span className="social-card__platform">
                    {social.name}
                  </span>

                  <strong>
                    {social.handle}
                  </strong>

                  <p>
                    {social.description}
                  </p>

                </div>

                <span className="social-card__arrow">
                  ↗
                </span>

              </div>

            </a>
          ))}

        </div>

        {/* INSTAGRAM CTA */}

        <div className="socials__cta">

          <div className="socials__cta-decoration">
            EH.
          </div>

          <div className="socials__cta-content">

            <span>
              SIGA A EXPERIÊNCIA
            </span>

            <h3>
              Faça parte da
              <strong> galera.</strong>
            </h3>

          </div>

          <a href="#">
            @eduardohenrique
            <span>↗</span>
          </a>

        </div>

      </div>

    </section>
  )
}

export default Socials
