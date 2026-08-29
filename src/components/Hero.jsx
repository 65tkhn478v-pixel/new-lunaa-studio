import Reveal from "./Reveal";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className="wrap">
        <div className={styles["hero-grid"]}>
          <Reveal as="div" className={styles["hero-copy"]}>
            <span className={styles["hero-badge"]}>
              <span className={styles.dot}></span>
              Sites internet pour commerçants
            </span>
            <h1>Une vitrine en ligne moderne, à l'image de votre commerce.</h1>
            <p className={styles["hero-sub"]}>
              Je crée, héberge et référence le site internet des commerces indépendants des
              Hauts-de-France. Boulangers, coiffeurs, artisans, petits commerces.
            </p>
            <div className={styles["hero-actions"]}>
              <a className="btn btn-primary" href="#offre">
                <span>Voir l'offre de lancement</span>
                <span className="btn-icon">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path
                      d="M3 11L11 3M11 3H4.5M11 3V9.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
              <span className={styles["hero-note"]}>
                3 places gratuites ce mois-ci · Hauts-de-France
              </span>
            </div>
          </Reveal>

          <Reveal as="div" delay={2} className={styles["hero-art"]} aria-hidden="true">
            <div className={styles["hero-art-inner"]}>
              <svg viewBox="0 0 400 480" preserveAspectRatio="xMidYMax slice">
                <rect x="30" y="330" width="60" height="150" rx="10" fill="#2c241d" />
                <rect x="105" y="260" width="60" height="220" rx="10" fill="#c97b3a" />
                <rect x="180" y="300" width="60" height="180" rx="10" fill="#2c241d" />
                <rect x="255" y="200" width="60" height="280" rx="10" fill="#3a2f24" />
                <rect x="330" y="350" width="60" height="130" rx="10" fill="#c97b3a" opacity="0.55" />
              </svg>
              <div className={styles["hero-art-tag"]}>
                <span className={styles.lbl}>Fait avec Lunaa</span>
                <span className={styles.val}>Lille</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </header>
  );
}
