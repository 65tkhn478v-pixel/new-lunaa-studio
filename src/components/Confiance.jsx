import Reveal from "./Reveal";
import styles from "./Confiance.module.css";

// Pas d'avis ni de logo à ce stade — seul le nom remplace le placeholder
// "Client à venir", dans le même format. Aucune citation ni logo inventés.
const SLOTS = ["Studio Eight (Lille)", "Mathilde Lecomte, photographe (Lille)", "Client à venir"];

export default function Confiance() {
  return (
    <section className="section-tight">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Ils me font confiance</span>
          <h2>Bientôt leurs avis, ici</h2>
        </Reveal>
        <div className={styles["testi-grid"]}>
          {SLOTS.map((label, i) => (
            <Reveal as="div" key={label} delay={i} className={styles["testi-slot"]}>
              <span className={styles["quote-mark"]}>&ldquo;</span>
              <div className={styles.who}>
                <span className={styles.avatar}></span>
                <span>{label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
