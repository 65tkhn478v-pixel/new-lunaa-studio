import Reveal from "./Reveal";
import styles from "./Tarifs.module.css";

const CHECK_ICON = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M3 8.5L6.2 11.5L13 4"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ARROW_ICON = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M3 11L11 3M11 3H4.5M11 3V9.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Tarifs() {
  return (
    <section className="section" id="tarifs">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Tarifs standards</span>
          <h2>Après le lancement</h2>
          <p>
            Ce sont les tarifs qui s'appliquent après la période de lancement. Les 3 places de
            ce mois-ci restent à 15 €/mois d'hébergement.
          </p>
        </Reveal>

        <div className={styles.plans}>
          <Reveal as="div" className={styles.plan}>
            <div className={styles["plan-head"]}>
              <span className={styles["plan-name"]}>Essentiel</span>
              <div className={styles["plan-price"]}>
                <span className={styles.amount}>39 €</span>
                <span className={styles.period}>/ mois</span>
              </div>
            </div>
            <ul className={styles["plan-features"]}>
              <li>{CHECK_ICON} Site professionnel de 1 à 5 pages</li>
              <li>{CHECK_ICON} Hébergement inclus</li>
              <li>{CHECK_ICON} Maintenance et mises à jour</li>
              <li>{CHECK_ICON} 1 modification par mois</li>
            </ul>
            <a className="btn btn-ghost" href="#contact">
              <span>En discuter</span>
              <span className="btn-icon">{ARROW_ICON}</span>
            </a>
          </Reveal>

          <Reveal
            as="div"
            delay={1}
            className={`${styles.plan} ${styles["plan-featured"]}`}
          >
            <div className={styles["plan-head"]}>
              <span className={styles["plan-badge"]}>Pour être trouvé sur Google</span>
              <span className={styles["plan-name"]}>Visibilité</span>
              <div className={styles["plan-price"]}>
                <span className={styles.amount}>69 €</span>
                <span className={styles.period}>/ mois</span>
              </div>
            </div>
            <ul className={styles["plan-features"]}>
              <li>{CHECK_ICON} Tout ce que comprend l'offre Essentiel</li>
              <li>{CHECK_ICON} Fiche Google Business créée et tenue à jour</li>
              <li>{CHECK_ICON} Un article SEO par mois</li>
              <li>{CHECK_ICON} Suivi de votre position dans les recherches</li>
            </ul>
            <a className="btn btn-light" href="#contact">
              <span>En discuter</span>
              <span className="btn-icon">{ARROW_ICON}</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
