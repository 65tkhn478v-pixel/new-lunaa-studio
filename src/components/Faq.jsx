import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import styles from "./Faq.module.css";

const QUESTIONS = [
  {
    q: "Je n'ai pas le temps de m'en occuper.",
    a: "Vous n'avez rien à faire. Je m'occupe du site, de l'hébergement et des mises à jour. Un message suffit quand quelque chose change.",
  },
  {
    q: "Je ne suis pas à l'aise avec l'informatique.",
    a: "Vous n'avez pas besoin de l'être. Vous avez mon numéro et mon e-mail, et c'est moi qui réponds.",
  },
  {
    q: "Combien de temps avant que mon site soit en ligne ?",
    a: "Vous recevez d'abord une maquette à consulter sur votre téléphone. Le site est mis en ligne une fois que vous l'avez validée.",
  },
  {
    q: "Je suis loin de Lille, c'est possible ?",
    a: "Je travaille avec les commerces des Hauts-de-France et je peux passer vous voir sur place.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(null);
  const reduceMotion = useReducedMotion();
  const baseId = useId();

  return (
    <section className="section" id="faq">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Questions fréquentes</span>
          <h2>Vous vous demandez peut-être</h2>
        </Reveal>

        <Reveal as="div" className={styles.list}>
          {QUESTIONS.map((item, i) => {
            const isOpen = open === i;
            const buttonId = `${baseId}-q${i}`;
            const panelId = `${baseId}-a${i}`;
            return (
              <div key={item.q} className={`${styles.item} ${isOpen ? styles["is-open"] : ""}`}>
                <h3 className={styles.question}>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className={styles.toggle} aria-hidden="true">
                      <Plus size={18} strokeWidth={1.8} />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={styles.panel}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
