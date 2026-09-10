import './Gallery.css'

const galleryItems = [
  {
    id: '01',
    type: 'SHOW',
    title: 'No palco',
    size: 'large',
  },
  {
    id: '02',
    type: 'ARTISTA',
    title: 'Eduardo Henrique',
    size: 'small',
  },
  {
    id: '03',
    type: 'BASTIDORES',
    title: 'Antes do show',
    size: 'small',
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
    size: 'tall',
  },
]

function GalleryPlaceholder({ item }) {
  return (
    <div className={`gallery__placeholder gallery__placeholder--${item.id}`}>

      <div className="gallery__placeholder-grid"></div>

      <div className="gallery__placeholder-content">

        <span className="gallery__placeholder-number">
          {item.id}
        </span>

        <strong>
          EH.
        </strong>

        <small>
          {item.type}
        </small>

      </div>

    </div>
  )
}

function Gallery() {
  return (
    <section className="gallery section" id="galeria">

      <div className="gallery__glow gallery__glow--purple"></div>
      <div className="gallery__glow gallery__glow--orange"></div>

      <div className="container">

        {/* HEADER */}

        <div className="gallery__header">

          <div className="gallery__heading">

            <div className="section-label">
              <span></span>
              GALERIA
            </div>

            <h2>
              MOMENTOS QUE
              <br />
              <strong>FICAM NA MEMÓRIA.</strong>
            </h2>

          </div>

          <div className="gallery__intro">

            <span>
              05
            </span>

            <p>
              Palco, público, bastidores e momentos
              que fazem parte da história de Eduardo.
            </p>

          </div>

        </div>

        {/* GALLERY */}

        <div className="gallery__grid">

          {galleryItems.map((item) => (
            <article
              className={`gallery__item gallery__item--${item.size}`}
              key={item.id}
            >

              <GalleryPlaceholder item={item} />

              <div className="gallery__overlay">

                <div className="gallery__overlay-top">
                  <span>{item.id}</span>
                  <span>{item.type}</span>
                </div>

                <div className="gallery__overlay-bottom">

                  <strong>
                    {item.title}
                  </strong>

                  <span>
                    ↗
                  </span>

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* FOOTER */}

        <div className="gallery__footer">

          <div className="gallery__footer-info">
            <span>
              EDUARDO HENRIQUE
            </span>

            <p>
              Samba • Pagode • Música
            </p>
          </div>

          <a href="#redes">
            <span>
              MAIS MOMENTOS
            </span>

            <strong>
              Instagram ↗
            </strong>
          </a>

        </div>

      </div>

    </section>
  )
}

export default Gallery
