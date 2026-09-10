import './FeaturedMusic.css'

function FeaturedMusic() {
  return (
    <section
      className="featured-music"
      id="musica"
      aria-labelledby="featured-music-title"
    >
      <div className="featured-music__container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="featured-music__header">

          <div className="featured-music__index">
            <span>02</span>
            <span>MÚSICA</span>
          </div>

          <div className="featured-music__heading">

            <p className="featured-music__eyebrow">
              EDUARDO HENRIQUE / SOM EM MOVIMENTO
            </p>

            <h2 id="featured-music-title">
              UMA MÚSICA.
              <br />
              <strong>UMA HISTÓRIA.</strong>
            </h2>

          </div>

          <p className="featured-music__intro">
            O som que representa o momento atual
            de Eduardo Henrique.
          </p>

        </header>


        {/* =====================================================
            FEATURED RELEASE
        ===================================================== */}

        <div className="featured-music__feature">

          {/* -------------------------------------------------
              ARTWORK
          ------------------------------------------------- */}

          <div className="featured-music__artwork">

            <div
              className="featured-music__artwork-bg"
              aria-hidden="true"
            />

            <div
              className="featured-music__artwork-grid"
              aria-hidden="true"
            />

            <div className="featured-music__artwork-top">
              <span>EH.</span>
              <span>01 / 01</span>
            </div>

            <div className="featured-music__artwork-main">

              <span className="featured-music__artwork-name">
                EDUARDO
              </span>

              <strong>
                EH.
              </strong>

              <span className="featured-music__artwork-title">
                NOME DA
                <br />
                MÚSICA
              </span>

            </div>

            <div className="featured-music__artwork-bottom">
              <span>PAGODE • SAMBA</span>
              <span>2026</span>
            </div>

            <div
              className="featured-music__record"
              aria-hidden="true"
            >
              <div className="featured-music__record-label">
                EH
              </div>
            </div>

          </div>


          {/* -------------------------------------------------
              INFORMATION
          ------------------------------------------------- */}

          <div className="featured-music__content">

            <div className="featured-music__meta">

              <span className="featured-music__release">
                ● LANÇAMENTO
              </span>

              <span className="featured-music__year">
                2026
              </span>

            </div>

            <h3>
              NOME DA
              <br />
              <strong>MÚSICA</strong>
            </h3>

            <p className="featured-music__description">
              Uma canção que carrega sentimento,
              histórias e a energia do samba e do pagode.
              Um pouco daquilo que Eduardo vive,
              sente e transforma em música.
            </p>


            <div className="featured-music__line" />


            <div className="featured-music__listen">

              <span>
                DISPONÍVEL NAS PLATAFORMAS
              </span>

              <div className="featured-music__platforms">

                <a
                  href="#"
                  className="featured-music__platform"
                  aria-label="Ouvir no Spotify"
                >
                  <span>01</span>
                  Spotify
                  <strong>↗</strong>
                </a>

                <a
                  href="#"
                  className="featured-music__platform"
                  aria-label="Ouvir no YouTube"
                >
                  <span>02</span>
                  YouTube
                  <strong>↗</strong>
                </a>

                <a
                  href="#"
                  className="featured-music__platform"
                  aria-label="Ouvir no Deezer"
                >
                  <span>03</span>
                  Deezer
                  <strong>↗</strong>
                </a>

              </div>

            </div>


            <a
              href="#"
              className="featured-music__button"
            >
              <span>OUÇA AGORA</span>
              <strong>↗</strong>
            </a>

          </div>

        </div>


        {/* =====================================================
            MINI PLAYER
        ===================================================== */}

        <div
          className="featured-music__player"
          aria-label="Prévia da música em destaque"
        >

          <button
            type="button"
            className="featured-music__player-button"
            aria-label="Reproduzir música"
          >
            ▶
          </button>

          <div className="featured-music__player-info">

            <span>
              OUVINDO AGORA
            </span>

            <strong>
              Nome da Música
            </strong>

          </div>


          <div
            className="featured-music__wave"
            aria-hidden="true"
          >
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>


          <span className="featured-music__duration">
            03:42
          </span>

        </div>

      </div>
    </section>
  )
}

export default FeaturedMusic

