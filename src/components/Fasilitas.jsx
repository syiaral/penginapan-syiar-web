import Icon from "./Icon.jsx";

const FASILITAS = [
  {
    key: "bed",
    title: "Tempat Tidur yang Nyaman",
    desc: "Tempat tidur empuk dan bersih untuk istirahat yang dalam.",
  },
  { key: "parking", title: "Parkir", desc: "Parkir mudah untuk tamu." },
  {
    key: "market",
    title: "Akses Pasar",
    desc: "Dekat dengan pasar untuk kebutuhan sehari-hari.",
  },
];

export default function Fasilitas() {
  return (
    <section id="fasilitas" className="section">
      <div className="container">
        <div className="sectionHead reveal">
          <h2 className="sectionTitle">Fasilitas</h2>
          <p className="muted">
            Lebih dari sekadar tempat menginap, ini adalah pengalaman.
          </p>
        </div>

        <div className="fasilitas">
          {FASILITAS.map((a) => (
            <div key={a.key} className="amenity reveal">
              <div className="amenityIcon">
                <Icon name={a.key} />
              </div>
              <div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
