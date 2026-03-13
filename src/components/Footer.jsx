export default function Footer({ brandName, tagline, address }) {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="footerLeft">
          <div className="footerBrand">
            <span className="brandMark" aria-hidden="true" />
            <span>
              <div className="footerName">{brandName}</div>
              <div className="footerTag">{tagline}</div>
            </span>
          </div>
          <div className="footerSmall">{address}</div>
        </div>
        <div className="footerLinks" aria-label="Footer">
          <a href="#about">Tentang</a>
          <a href="#kamar">Kamar</a>
          <a href="#fasilitas">Fasilitas</a>
          <a href="#kontak">Kontak</a>
        </div>
      </div>
    </footer>
  );
}
