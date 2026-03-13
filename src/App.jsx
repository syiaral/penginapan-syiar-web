import { Suspense, lazy } from "react";
import "./App.css";

import About from "./components/About.jsx";
import Kontak from "./components/Kontak.jsx";
import Footer from "./components/Footer.jsx";
import Gallery from "./components/Gallery.jsx";
import Hero from "./components/Hero.jsx";
import Topbar from "./components/Topbar.jsx";
import { BRAND, GALLERY, HERO_BG } from "./content/brand.js";
import {
  getMailtoHref,
  getMapEmbedSrc,
  getWhatsappHref,
} from "./lib/kontak.js";

const Fasilitas = lazy(() => import("./components/Fasilitas.jsx"));

function App() {
  const tagline = `${BRAND.taglineId} · ${BRAND.taglineEn}`;
  const waHref = getWhatsappHref({
    whatsappNumberE164: BRAND.whatsappNumberE164,
    brandName: BRAND.name,
  });
  const mailtoHref = getMailtoHref(BRAND.email, `Booking — ${BRAND.name}`);
  const mapSrc = getMapEmbedSrc(BRAND.address);

  return (
    <div className="page">
      <Topbar brandName={BRAND.name} tagline={tagline} waHref={waHref} />

      <main id="top">
        <Hero
          brandName={BRAND.name}
          heroBg={HERO_BG}
          waHref={waHref}
          address={BRAND.address}
        />
        <About brandName={BRAND.name} />
        <Gallery images={GALLERY} />
        <Suspense fallback={<div>Loading...</div>}>
          <Fasilitas />
        </Suspense>
        <Kontak
          brandName={BRAND.name}
          address={BRAND.address}
          phoneDisplay={BRAND.phoneDisplay}
          email={BRAND.email}
          waHref={waHref}
          mailtoHref={mailtoHref}
          mapSrc={mapSrc}
        />
      </main>

      <Footer
        brandName={BRAND.name}
        tagline={tagline}
        address={BRAND.address}
      />
    </div>
  );
}

export default App;
