import { ImageOff } from "lucide-react";
import Reveal from "./Reveal";
import styles from "./Realisations.module.css";

// Deux réalisations réelles, captures fournies (mon environnement bloque
// les connexions sortantes vers *.workers.dev, impossible de les générer
// moi-même — voir message de suivi).
const REALISATIONS = [
  {
    name: "Studio Eight",
    caption: "Studio Eight · Prothésiste ongulaire · Lille",
    url: "https://studio-eighttt.h9759k6njr.workers.dev",
    screenshot: "/assets/realisation-studio-eight.jpg",
  },
  {
    name: "Mathilde Lecomte",
    caption: "Mathilde Lecomte · Photographe · Lille",
    url: "https://mathilde-photographe-lilloise.h9759k6njr.workers.dev",
    screenshot: "/assets/realisation-mathilde.jpg",
  },
];

const EMPTY_SLOT_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="8.5" stroke="#a89a86" strokeWidth="1.3" />
  </svg>
);

export default function Realisations() {
  return (
    <section className="section" id="realisations">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Réalisations</span>
          <h2>Ce que ça donne, concrètement</h2>
          <p>
            Les sites que je crée pour des commerçants des Hauts-de-France, présentés ici au
            fil des mises en ligne.
          </p>
        </Reveal>

        <div className={styles["showcase-grid"]}>
          {REALISATIONS.map((r, i) => (
            <Reveal
              as="a"
              key={r.name}
              delay={i}
              className={styles["showcase-card"]}
              href={r.url}
              target="_blank"
              rel="noopener"
            >
              <span className={styles["showcase-card-image"]}>
                {r.screenshot ? (
                  <img src={r.screenshot} alt="" />
                ) : (
                  // Capture d'écran réelle à intégrer manuellement — voir
                  // message de suivi. Placeholder neutre en attendant,
                  // aucune image inventée du site.
                  <ImageOff size={22} strokeWidth={1.4} aria-hidden="true" />
                )}
              </span>
              <span className={styles["showcase-card-caption"]}>{r.caption}</span>
            </Reveal>
          ))}

          <Reveal as="div" delay={2} className={styles["showcase-slot"]}>
            <div className={styles.mark} aria-hidden="true">
              {EMPTY_SLOT_ICON}
            </div>
            <span>Réalisation à venir</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
