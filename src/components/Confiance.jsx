import Reveal from "./Reveal";
import styles from "./Confiance.module.css";

export default function Confiance() {
  return (
    <section className="section-tight">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Ils me font confiance</span>
          <h2>Bientôt leurs avis, ici</h2>
        </Reveal>
        <div className={styles["testi-grid"]}>
          {[0, 1, 2].map((i) => (
            <Reveal as="div" key={i} delay={i} className={styles["testi-slot"]}>
              <span className={styles["quote-mark"]}>&ldquo;</span>
              <div className={styles.who}>
                <span className={styles.avatar}></span>
                <span>Client à venir</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
