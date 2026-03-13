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
          {images.map((img, index) => (
            <figure key={img.src} className="galleryItem reveal">
              <img
                src={img.src}
                alt={img.alt}
                loading={index < 2 ? "eager" : "lazy"}
                decoding="async"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
