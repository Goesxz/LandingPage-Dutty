import './Videos.css'

const videos = [
  {
    id: '01',
    category: 'SHOW AO VIVO',
    title: 'Eduardo Henrique ao vivo',
    src: '/src/assets/videos/videoaovivo.mp4',
    featured: true,
  },
  {
    id: '02',
    category: 'AUTORAL',
    title: 'Só Mais Um Pagode',
    src: '/src/assets/videos/somaisumpagode.mp4',
  },
  {
    id: '03',
    category: 'ACÚSTICO',
    title: 'Acústico',
    src: '/src/assets/videos/videoacusticomp4.mp4',
  },
]

function VideoReel({ video, featured = false }) {
  return (
    <article className={`video-reel ${featured ? 'video-reel--featured' : 'video-reel--secondary'}`}>
      <div className="video-reel__media">
        <video
          className="video-reel__video"
          src={video.src}
          controls
          playsInline
          muted
          preload={featured ? 'metadata' : 'none'}
          aria-label={`Reel: ${video.title}`}
        />

        <div className="video-reel__top" aria-hidden="true">
          <span>{video.id}</span>
          <span>{video.category}</span>
        </div>

        <div className="video-reel__bottom">
          <div>
            <span className="video-reel__category">{video.category}</span>
            <h3>{video.title}</h3>
          </div>
          <span className="video-reel__arrow" aria-hidden="true">↗</span>
        </div>
      </div>
    </article>
  )
}

function Videos() {
  return (
    <section className="videos section" id="videos">
      <div className="videos__background" aria-hidden="true">
        <span className="videos__background-word">REELS</span>
        <span className="videos__background-line"></span>
      </div>

      <div className="container videos__container">
        <header className="videos__header">
          <div className="videos__heading">
            <div className="section-label">
              <span></span>
              REELS
            </div>

            <h2>
              A ENERGIA
              <br />
              <strong>DE QUEM VIVE O PAGODE.</strong>
            </h2>
          </div>

          <div className="videos__intro">
            <span className="videos__counter">03</span>
            <p>
              Palco, música autoral e momentos acústicos.
              Um pouco do universo de Eduardo Henrique.
            </p>
          </div>
        </header>

        <div className="videos__content">
          <div className="videos__featured">
            <VideoReel video={videos[0]} featured />
          </div>

          <div className="videos__secondary">
            {videos.slice(1).map((video) => (
              <VideoReel key={video.id} video={video} />
            ))}
          </div>
        </div>

        <div className="videos__footer">
          <div className="videos__footer-line"></div>
          <span>CONTEÚDO</span>

          <a href="#redes">
            <span>Ver mais no Instagram</span>
            <strong aria-hidden="true">↗</strong>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Videos
