export default function Kontak({
  brandName,
  address,
  phoneDisplay,
  email,
  waHref,
  mailtoHref,
  mapSrc,
}) {
  return (
    <section id="kontak" className="section sectionAlt">
      <div className="container grid2">
        <div className="reveal">
          <h2 className="sectionTitle">Kontak & Lokasi</h2>
          <p className="muted">
            Siap untuk menginap yang menenangkan? Hubungi kami kapan saja untuk
            ketersediaan dan pemesanan.
          </p>

          <div className="kontakCard">
            <div className="kontakRow">
              <div className="kontakLabel">Telepon / WhatsApp</div>
              <div className="kontakValue">
                {waHref ? (
                  <a href={waHref} target="_blank" rel="noreferrer">
                    {phoneDisplay || "Chat di WhatsApp"}
                  </a>
                ) : (
                  <span>{phoneDisplay || "-"}</span>
                )}
              </div>
            </div>

            <div className="kontakRow">
              <div className="kontakLabel">Email</div>
              <div className="kontakValue">
                {mailtoHref ? (
                  <a href={mailtoHref}>{email}</a>
                ) : (
                  <span>{email || "-"}</span>
                )}
              </div>
            </div>

            <div className="kontakRow">
              <div className="kontakLabel">Alamat</div>
              <div className="kontakValue">{address}</div>
            </div>

            <div className="kontakActions">
              <a className="btn btnPrimary" href={waHref ?? "#kontak"}>
                Pesan Sekarang
              </a>
              <a className="btn btnGhost" href="#top">
                Kembali ke atas
              </a>
            </div>
          </div>
        </div>

        <div className="reveal">
          <div className="map">
            <iframe
              title={`${brandName} map`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
