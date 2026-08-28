import Reveal from "./Reveal";
import AvatarBorder from "./AvatarBorder";
import styles from "./APropos.module.css";

export default function APropos() {
  return (
    <section className="section" id="qui-suis-je">
      <div className="wrap">
        <div className={styles.about}>
          <Reveal as="div" className={styles["about-visual"]}>
            <span className={styles.initial}>L.</span>
            <div className={styles["about-visual-card"]}>
              <AvatarBorder />
              <div>
                <div className={styles.role}>Fondateur</div>
                <div className={styles.place}>Louis, basé à Lille</div>
              </div>
            </div>
          </Reveal>
          <Reveal as="div" delay={1} className={styles["about-copy"]}>
            <span className="eyebrow">Qui suis-je</span>
            <p style={{ marginTop: "1.2rem" }}>
              Je suis seul à travailler sur votre site. Pas d'agence, pas d'intermédiaire, pas
              de ticket support à ouvrir : vous avez mon numéro et mon adresse e-mail, et c'est
              moi qui vous réponds.
            </p>
            <p className={styles.small}>
              Je travaille avec les commerces des Hauts-de-France, dans les villes et les
              villages autour de Lille. Je peux passer vous voir sur place.
            </p>
            <a className={styles["link-arrow"]} href="mailto:contact@lunaa-studio.fr">
              M'écrire directement
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M3 11L11 3M11 3H4.5M11 3V9.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
