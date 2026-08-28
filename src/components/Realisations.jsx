import Reveal from "./Reveal";
import styles from "./Realisations.module.css";

const SLOTS = [
  {
    delay: 0,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8.5" stroke="#a89a86" strokeWidth="1.3" />
        <path
          d="M9 12L11 14L15.5 9.5"
          stroke="#a89a86"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0"
        />
      </svg>
    ),
  },
  {
    delay: 1,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8.5" stroke="#a89a86" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    delay: 2,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8.5" stroke="#a89a86" strokeWidth="1.3" />
      </svg>
    ),
  },
];

export default function Realisations() {
  return (
    <section className="section" id="realisations">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Réalisations</span>
          <h2>Ce que ça donne, concrètement</h2>
          <p>
            Les sites créés pour des commerçants des Hauts-de-France, présentés ici au fil des
            mises en ligne.
          </p>
        </Reveal>

        <div className={styles["showcase-grid"]}>
          {SLOTS.map((slot, i) => (
            <Reveal as="div" key={i} delay={slot.delay} className={styles["showcase-slot"]}>
              <div className={styles.mark} aria-hidden="true">
                {slot.icon}
              </div>
              <span>Réalisation à venir</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
