import './Gallery.css'

const galleryItems = [
  {
    id: '01',
    type: 'SHOW',
    title: 'No palco',
    size: 'featured',
  },
  {
    id: '02',
    type: 'ARTISTA',
    title: 'Eduardo Henrique',
    size: 'portrait',
  },
  {
    id: '03',
    type: 'BASTIDORES',
    title: 'Antes do show',
    size: 'square',
  },
  {
    id: '04',
    type: 'PÚBLICO',
    title: 'A galera canta junto',
    size: 'wide',
  },
  {
    id: '05',
    type: 'LIVE',
    title: 'Energia ao vivo',
    size: 'portrait',
  },
]

function GalleryPlaceholder({ item }) {
  return (
    <div className={`gallery__media gallery__media--${item.id}`}>
      <div className="gallery__media-noise" aria-hidden="true"></div>

      <div className="gallery__media-mark" aria-hidden="true">
        <span>EH.</span>
      </div>

      <div className="gallery__media-index">
        {item.id}
      </div>

      <div className="gallery__media-type">
        {item.type}
      </div>
    </div>
  )
}

function Gallery() {
  return (
    <section
      className="gallery section"
      id="galeria"
      aria-labelledby="gallery-title"
    >
      <div className="gallery__background" aria-hidden="true">
        <span className="gallery__background-word">
          MEMÓRIA
        </span>

        <span className="gallery__background-line"></span>
      </div>

      <div className="container gallery__container">

        {/* HEADER */}

        <header className="gallery__header">
          <div className="gallery__heading">
            <div className="section-label">
              <span></span>
              GALERIA
            </div>

            <h2 id="gallery-title">
              CADA SHOW
              <br />
              <strong>VIRA HISTÓRIA.</strong>
            </h2>
          </div>

          <div className="gallery__intro">
            <span>05</span>

            <div>
              <p>
                Palco, público, bastidores e a energia
                que existe antes, durante e depois do show.
              </p>

              <small>
                EDUARDO HENRIQUE / MOMENTOS
              </small>
            </div>
          </div>
        </header>

        {/* GALLERY */}

        <div className="gallery__grid">

          {/* FEATURED */}

          <article className="gallery__item gallery__item--featured">
            <GalleryPlaceholder item={galleryItems[0]} />

            <div className="gallery__caption">
              <div className="gallery__caption-top">
                <span>{galleryItems[0].id}</span>
                <span>{galleryItems[0].type}</span>
              </div>

              <div className="gallery__caption-bottom">
                <div>
                  <small>AO VIVO</small>
                  <h3>{galleryItems[0].title}</h3>
                </div>

                <span className="gallery__arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </div>
          </article>

          {/*
            TRACK: no desktop/tablet vira "display: contents"
            (some do fluxo — cada item continua sendo filho
            direto do grid, como antes). No mobile vira um
            carrossel horizontal de verdade.
          */}

          <div className="gallery__track-wrap">
            <p className="gallery__track-hint" aria-hidden="true">
              ARRASTE <span>→</span>
            </p>

            <div
              className="gallery__track"
              role="list"
              aria-label="Mais momentos da galeria"
            >

              {/* PORTRAIT */}

              <article
                className="gallery__item gallery__item--portrait"
                role="listitem"
              >
                <GalleryPlaceholder item={galleryItems[1]} />

                <div className="gallery__caption">
                  <div className="gallery__caption-top">
                    <span>{galleryItems[1].id}</span>
                    <span>{galleryItems[1].type}</span>
                  </div>

                  <div className="gallery__caption-bottom">
                    <div>
                      <small>ARTISTA</small>
                      <h3>{galleryItems[1].title}</h3>
                    </div>

                    <span className="gallery__arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                </div>
              </article>

              {/* SQUARE */}

              <article
                className="gallery__item gallery__item--square"
                role="listitem"
              >
                <GalleryPlaceholder item={galleryItems[2]} />

                <div className="gallery__caption">
                  <div className="gallery__caption-top">
                    <span>{galleryItems[2].id}</span>
                    <span>{galleryItems[2].type}</span>
                  </div>

                  <div className="gallery__caption-bottom">
                    <div>
                      <small>BASTIDORES</small>
                      <h3>{galleryItems[2].title}</h3>
                    </div>

                    <span className="gallery__arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                </div>
              </article>

              {/* WIDE */}

              <article
                className="gallery__item gallery__item--wide"
                role="listitem"
              >
                <GalleryPlaceholder item={galleryItems[3]} />

                <div className="gallery__caption">
                  <div className="gallery__caption-top">
                    <span>{galleryItems[3].id}</span>
                    <span>{galleryItems[3].type}</span>
                  </div>

                  <div className="gallery__caption-bottom">
                    <div>
                      <small>PÚBLICO</small>
                      <h3>{galleryItems[3].title}</h3>
                    </div>

                    <span className="gallery__arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                </div>
              </article>

              {/* FINAL PORTRAIT (agora visível no carrossel mobile) */}

              <article
                className="gallery__item gallery__item--last"
                role="listitem"
              >
                <GalleryPlaceholder item={galleryItems[4]} />

                <div className="gallery__caption">
                  <div className="gallery__caption-top">
                    <span>{galleryItems[4].id}</span>
                    <span>{galleryItems[4].type}</span>
                  </div>

                  <div className="gallery__caption-bottom">
                    <div>
                      <small>LIVE</small>
                      <h3>{galleryItems[4].title}</h3>
                    </div>

                    <span className="gallery__arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                </div>
              </article>

            </div>
          </div>

        </div>

        {/* FOOTER */}

        <footer className="gallery__footer">
          <div className="gallery__footer-left">
            <span className="gallery__footer-number">
              05 / 05
            </span>

            <div>
              <strong>EDUARDO HENRIQUE</strong>
              <p>
                Samba • Pagode • Música
              </p>
            </div>
          </div>

          <a href="#redes" className="gallery__instagram">
            <span>MAIS MOMENTOS</span>

            <strong>
              Instagram
              <b aria-hidden="true">↗</b>
            </strong>
          </a>
        </footer>

      </div>
    </section>
  )
}

export default Gallery
