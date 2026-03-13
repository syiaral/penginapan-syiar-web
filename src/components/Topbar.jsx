export default function Topbar({ brandName, tagline, waHref }) {
  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label={`${brandName} home`}>
        <span className="brandMark" aria-hidden="true" />
        <span className="brandText">
          <span className="brandName">{brandName}</span>
          <span className="brandTagline">{tagline}</span>
        </span>
      </a>

      <nav className="nav" aria-label="Primary">
        <a href="#about">About</a>
        <a href="#kamar">Kamar</a>
        <a href="#fasilitas">Fasilitas</a>
        <a href="#kontak">Kontak</a>
      </nav>

      <div className="topbarCtas">
        {waHref ? (
          <a
            className="btn btnQuiet"
            href={waHref}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        ) : null}
        <a className="btn btnPrimary" href="#kontak">
          Book Now
        </a>
      </div>
    </header>
  );
}
