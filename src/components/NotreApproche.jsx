import { useRef } from "react";
import { motion, useScroll, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import styles from "./NotreApproche.module.css";

// Contenu inchangé — repris tel quel, seule la mise en forme change
// (timeline verticale animée au scroll, façon "How It Works").
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
  const trackRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.85", "end 0.6"],
  });

  return (
    <section className="section" id="approche">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Mon approche</span>
          <h2>De votre commerce à votre vitrine en ligne.</h2>
          <p>Une méthode simple, sans jargon, pensée pour des commerçants qui n'ont jamais eu de site.</p>
        </Reveal>

        <div className={styles.timeline} ref={trackRef}>
          <span className={styles.track} aria-hidden="true" />
          {!shouldReduceMotion && (
            <motion.span
              className={styles.progress}
              aria-hidden="true"
              style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
            />
          )}

          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className={styles.step}
              initial={shouldReduceMotion ? undefined : { opacity: 0, x: -18 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
            >
              <span className={styles.node}>{step.num}</span>
              <div className={styles["step-body"]}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
