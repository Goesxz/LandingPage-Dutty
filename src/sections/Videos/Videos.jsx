import './Videos.css'

const videos = [
  {
    id: '01',
    category: 'SHOW AO VIVO',
    title: 'Performance ao vivo',
    duration: '03:42',
    featured: true,
  },
  {
    id: '02',
    category: 'ACÚSTICO',
    title: 'Samba & Pagode',
    duration: '02:18',
  },
  {
    id: '03',
    category: 'BASTIDORES',
    title: 'Por trás do show',
    duration: '01:56',
  },
]

function Videos() {
  return (
    <section className="videos section" id="videos">

      <div className="videos__glow videos__glow--purple"></div>
      <div className="videos__glow videos__glow--orange"></div>

      <div className="container">

        {/* HEADER */}

        <div className="videos__header">

          <div className="videos__heading">

            <div className="section-label">
              <span></span>
              VÍDEOS
            </div>

            <h2>
              SINTA O SHOW
              <br />
              <strong>ANTES DELE COMEÇAR.</strong>
            </h2>

          </div>

          <div className="videos__intro">

            <span className="videos__counter">
              03
            </span>

            <p>
              Música, palco e momentos que mostram
              a energia de Eduardo Henrique ao vivo.
            </p>

          </div>

        </div>

        {/* FEATURED VIDEO */}

        <article className="videos__featured">

          <div className="video-card video-card--featured">

            <div className="video-card__visual">

              <div className="video-card__gradient"></div>

              <div className="video-card__placeholder">

                <span className="video-card__placeholder-logo">
                  EH.
                </span>

                <small>
                  VÍDEO PRINCIPAL
                </small>

              </div>

              <button
                className="video-card__play"
                aria-label="Reproduzir vídeo"
              >
                <span>▶</span>
              </button>

              <div className="video-card__top">

                <span>
                  {videos[0].id}
                </span>

                <span>
                  {videos[0].category}
                </span>

              </div>

              <div className="video-card__bottom">

                <div>
                  <span className="video-card__category">
                    {videos[0].category}
                  </span>

                  <h3>
                    {videos[0].title}
                  </h3>
                </div>

                <span className="video-card__duration">
                  {videos[0].duration}
                </span>

              </div>

            </div>

          </div>

        </article>

        {/* SECONDARY VIDEOS */}

        <div className="videos__secondary">

          {videos.slice(1).map((video) => (
            <article
              className="video-card video-card--secondary"
              key={video.id}
            >

              <div className="video-card__visual">

                <div
                  className={`video-card__gradient video-card__gradient--${video.id}`}
                ></div>

                <div className="video-card__placeholder">

                  <span className="video-card__placeholder-number">
                    {video.id}
                  </span>

                  <small>
                    {video.category}
                  </small>

                </div>

                <button
                  className="video-card__play"
                  aria-label={`Reproduzir ${video.title}`}
                >
                  <span>▶</span>
                </button>

                <div className="video-card__bottom">

                  <div>
                    <span className="video-card__category">
                      {video.category}
                    </span>

                    <h3>
                      {video.title}
                    </h3>
                  </div>

                  <span className="video-card__duration">
                    {video.duration}
                  </span>

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* FOOTER */}

        <div className="videos__footer">

          <div className="videos__footer-line"></div>

          <span>
            MAIS CONTEÚDO
          </span>

          <a href="#redes">
            Ver todos os vídeos
            <span>↗</span>
          </a>

        </div>

      </div>

    </section>
  )
}

export default Videos
