import Icon from "./Icon.jsx";

export default function Hero({ brandName, heroBg, waHref, address }) {
  return (
    <section className="hero" aria-label="Hero">
      <div
        className="heroBg"
        style={{ backgroundImage: `url("${heroBg}")` }}
        role="presentation"
      />
      <div className="container heroInner">
        <div className="heroCopy">
          <p className="eyebrow">Penginapan Alghifari di Bongganan</p>
          <h1 className="heroTitle">
            Tempat tenang untuk beristirahat
            <span className="accent"> sejuk</span>,{" "}
            <span className="accent">nyaman</span>, dan menyambut.
          </h1>
          <p className="heroSubtitle">
            {brandName} menawarkan suasana damai, keramahan hangat, dan
            kenyamanan minimalis dan sempurna untuk menginap yang menenangkan.
          </p>
          <div className="heroActions">
            <a className="btn btnPrimary btnLg" href="#kontak">
              Pesan Sekarang
            </a>
            <a className="btn btnGhost btnLg" href="#kamar">
              Lihat Kamar
            </a>
          </div>

          <div className="heroBadges" aria-label="Sorotan">
            <div className="badge">
              <span className="badgeDot" aria-hidden="true" />
              Suasana tenang dan berangin
            </div>
            <div className="badge">
              <span className="badgeDot" aria-hidden="true" />
              Kamar bersih dan nyaman
            </div>
            <div className="badge">
              <span className="badgeDot" aria-hidden="true" />
              Ruang sholat tersedia
            </div>
          </div>
        </div>

        <div className="heroCard" aria-label="Info Cepat">
          <div className="card">
            <div className="cardHeader">
              <div>
                <p className="cardKicker">Location</p>
                <p className="cardTitle">Bongganan, Tinangkung</p>
              </div>
              <div className="pill">Sejuk & Nyaman</div>
            </div>

            <p className="cardText">{address}</p>

            <div className="cardActions">
              {waHref && (
                <a
                  className="btn btnPrimary"
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  Pesan Sekarang
                </a>
              )}
              <a className="btn btnQuiet" href="#kontak">
                Hubungi Kami
              </a>
              <a className="btn btnGhost" href="#fasilitas">
                Fasilitas
              </a>
            </div>

            <div className="divider" />
            <div className="miniGrid" aria-label="Fasilitas Utama">
              <div className="mini">
                <Icon name="bed" />
                <span>Tempat Tidur Nyaman</span>
              </div>
              <div className="mini">
                <Icon name="parking" />
                <span>Parkir</span>
              </div>
              <div className="mini">
                <Icon name="market" />
                <span>Akses Pasar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="heroFade" aria-hidden="true" />
    </section>
  );
}
