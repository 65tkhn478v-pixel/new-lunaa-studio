import Reveal from "./Reveal";
import styles from "./CeQuOnGere.module.css";

const ITEMS = [
  {
    label: "Le nom de domaine",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12H20.5M12 3.5C14.5 6 15.5 9 15.5 12C15.5 15 14.5 18 12 20.5C9.5 18 8.5 15 8.5 12C8.5 9 9.5 6 12 3.5Z" />
      </svg>
    ),
  },
  {
    label: "L'hébergement",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="4" width="16" height="6" rx="1.5" />
        <rect x="4" y="14" width="16" height="6" rx="1.5" />
      </svg>
    ),
  },
  {
    label: "La sécurité du site",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5.5" y="10.5" width="13" height="9.5" rx="2" />
        <path d="M8 10.5V7.8C8 5.7 9.8 4 12 4C14.2 4 16 5.7 16 7.8V10.5" />
      </svg>
    ),
  },
  {
    label: "L'optimisation pour Google",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3.4" />
        <path d="M12 2.2V5M12 19V21.8M2.2 12H5M19 12H21.8" />
      </svg>
    ),
  },
  {
    label: "Le support, par téléphone ou e-mail",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 20c4.4 0 8-3.4 8-7.5S16.4 5 12 5 4 8.4 4 12.5c0 1.5.5 2.9 1.3 4L4.5 20l3.7-1.2c1.1.6 2.4 1 3.8 1Z" />
      </svg>
    ),
  },
];

export default function CeQuOnGere() {
  return (
    <section className="section-tight">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Zéro paperasse</span>
          <h2>Ce qu'on gère à votre place</h2>
        </Reveal>
        <Reveal as="div" className={styles["manage-list"]}>
          {ITEMS.map((item) => (
            <div className={styles["manage-item"]} key={item.label}>
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
