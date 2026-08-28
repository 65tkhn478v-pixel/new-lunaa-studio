import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./MentionsLegales.module.css";

export default function MentionsLegales() {
  return (
    <>
      <div className="grain" aria-hidden="true"></div>
      <Header variant="legal" />

      <main>
        <div className="wrap">
          <div className={styles.legal}>
            <a href="/" className={styles.back}>
              ← Retour au site
            </a>
            <h1>Mentions légales</h1>

            <h2>Éditeur du site</h2>
            <p>Clément Louis — Lunaa Studio, Entreprise individuelle (micro-entrepreneur)</p>
            <p>SIRET : 888 906 807 00019</p>
            <p>Adresse : 173 avenue de Dunkerque, 59000 Lille</p>
            <p>
              Email : <a href="mailto:contact@lunaa-studio.fr">contact@lunaa-studio.fr</a>
            </p>

            <h2>Directeur de la publication</h2>
            <p>Clément Louis</p>

            <h2>Hébergement</h2>
            <p>Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, États-Unis</p>
            <p>
              <a href="https://www.cloudflare.com" target="_blank" rel="noopener">
                https://www.cloudflare.com
              </a>
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus (textes, visuels, structure du site) est protégé. Toute
              reproduction sans autorisation est interdite.
            </p>
          </div>
        </div>
      </main>

      <Footer homeHref="/" />
    </>
  );
}
