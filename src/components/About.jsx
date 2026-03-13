export default function About({ brandName }) {
  return (
    <section id="about" className="section">
      <div className="container grid2">
        <div className="reveal">
          <h2 className="sectionTitle">Tentang Kami</h2>
          <p className="lead">
            Dirancang untuk tamu yang menghargai ketenangan, kenyamanan, dan
            suasana yang benar-benar menenangkan.
          </p>
          <p className="muted">
            Di {brandName}, kami fokus pada hal-hal penting, ruang bersih, nada
            yang menenangkan, dan keramahan hangat. Hasilnya adalah pengalaman
            penginapan alghifari yang terasa sederhana, berangin, dan tenang.
          </p>
          <div className="stats">
            <div className="stat">
              <div className="statNumber">Minimalis</div>
              <div className="statLabel">desain berangin</div>
            </div>
            <div className="stat">
              <div className="statNumber">Hangat</div>
              <div className="statLabel">keramahan</div>
            </div>
            <div className="stat">
              <div className="statNumber">Damai</div>
              <div className="statLabel">suasana</div>
            </div>
          </div>
        </div>

        <div className="reveal">
          <div className="aboutCard">
            <div className="aboutCardInner">
              <p className="quote">
                “Tempat yang tenang dan nyaman untuk melambat dan merasa seperti
                di rumah.”
              </p>
              <div className="aboutFeatures">
                <div className="feature">
                  <span className="featureDot" aria-hidden="true" />
                  Pencahayaan lembut & tekstur alami
                </div>
                <div className="feature">
                  <span className="featureDot" aria-hidden="true" />
                  Kamar bersih dengan tempat tidur nyaman
                </div>
                <div className="feature">
                  <span className="featureDot" aria-hidden="true" />
                  Layanan ramah untuk menginap yang tenang
                </div>
              </div>
            </div>
            <div className="woodBar" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
