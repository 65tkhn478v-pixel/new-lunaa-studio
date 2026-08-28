import Header from "./components/Header";
import Hero from "./components/Hero";
import Offre from "./components/Offre";
import NotreApproche from "./components/NotreApproche";
import Realisations from "./components/Realisations";
import APropos from "./components/APropos";
import Tarifs from "./components/Tarifs";
import CeQuOnGere from "./components/CeQuOnGere";
import CTAFinal from "./components/CTAFinal";
import Confiance from "./components/Confiance";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Aller au contenu
      </a>
      <div className="grain" aria-hidden="true"></div>

      <Header variant="home" />

      <main id="main">
        <Hero />
        <Offre />
        <NotreApproche />
        <Realisations />
        <APropos />
        <Tarifs />
        <CeQuOnGere />
        <CTAFinal />
        <Confiance />
      </main>

      <Footer homeHref="#main" />
    </>
  );
}
