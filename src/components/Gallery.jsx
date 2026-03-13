export default function Gallery({ images }) {
  return (
    <section id="kamar" className="section sectionAlt">
      <div className="container">
        <div className="sectionHead reveal">
          <h2 className="sectionTitle">Kamar Nyaman</h2>
          <p className="muted">
            Ruang bersih dan mengundang dengan nuansa minimalis agar Anda bisa
            beristirahat dalam.
          </p>
        </div>

        <div className="gallery">
          {images.map((img) => (
            <figure key={img.src} className="galleryItem reveal">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
