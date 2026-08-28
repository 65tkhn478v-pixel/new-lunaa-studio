import Reveal from "./Reveal";
import styles from "./NotreApproche.module.css";

const STEPS = [
  {
    num: "01",
    title: "Échange & découverte",
    text: "Un appel ou une visite dans votre commerce pour comprendre votre activité, sans jargon technique.",
  },
  {
    num: "02",
    title: "Démo concrète",
    text: "Vous recevez une vraie maquette de votre site à consulter sur votre téléphone, avant toute mise en ligne.",
  },
  {
    num: "03",
    title: "Mise en ligne",
    text: "Nom de domaine, hébergement, fiche Google : tout est pris en charge, vous n'avez rien à signer.",
  },
  {
    num: "04",
    title: "Suivi mensuel",
    text: "Un changement d'horaires ou une nouvelle photo ? Un message suffit, je m'en occupe.",
  },
];

export default function NotreApproche() {
  return (
    <section className="section" id="approche">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Notre approche</span>
          <h2>De votre commerce à votre vitrine en ligne.</h2>
          <p>Une méthode simple, sans jargon, pensée pour des commerçants qui n'ont jamais eu de site.</p>
        </Reveal>

        <div className={styles.steps}>
          {STEPS.map((step) => (
            <Reveal as="div" key={step.num} className={styles.step}>
              <span className={styles["step-num"]}>{step.num}</span>
              <div className={styles["step-body"]}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
