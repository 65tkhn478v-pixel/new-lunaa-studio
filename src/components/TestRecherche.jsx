import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";
import Reveal from "./Reveal";
import styles from "./TestRecherche.module.css";

const QUERY = "boulangerie Lille";

// Barre de recherche stylisée : la requête s'écrit lettre par lettre
// la première fois que l'encart entre à l'écran. Texte complet d'emblée
// si prefers-reduced-motion.
function SearchMock() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const id = setInterval(() => {
      setCount((c) => {
        if (c >= QUERY.length) {
          clearInterval(id);
          return c;
        }
        return c + 1;
      });
    }, 85);
    return () => clearInterval(id);
  }, [inView, reduceMotion]);

  const shown = reduceMotion ? QUERY : QUERY.slice(0, count);

  return (
    <div ref={ref} className={styles.search} aria-hidden="true">
      <Search size={18} strokeWidth={1.8} className={styles["search-icon"]} />
      <span className={styles["search-text"]}>
        {shown}
        <span className={styles.caret} />
      </span>
    </div>
  );
}

export default function TestRecherche() {
  return (
    <section className="section-tight" id="test">
      <div className="wrap">
        <Reveal as="div" className={styles.box}>
          <div className={styles.copy}>
            <h2>Testez-vous en 30 secondes</h2>
            <p>
              Prenez votre téléphone et cherchez votre métier suivi de votre ville, par exemple
              « boulangerie Lille ». Votre commerce apparaît-il ? Avec vos horaires, vos photos
              et vos avis ?
            </p>
            <p className={styles.punch}>Si la réponse est non, c'est exactement ce que je règle.</p>
            <a className="btn btn-primary" href="#contact">
              <span>Me contacter</span>
              <span className="btn-icon">
                <ArrowUpRight size={14} strokeWidth={1.8} aria-hidden="true" />
              </span>
            </a>
          </div>
          <SearchMock />
        </Reveal>
      </div>
    </section>
  );
}
