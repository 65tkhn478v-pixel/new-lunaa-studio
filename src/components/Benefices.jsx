import { MapPin, Phone, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";
import styles from "./Benefices.module.css";

const BENEFITS = [
  {
    icon: MapPin,
    title: "Être trouvé",
    text: "Votre commerce apparaît sur Google et Google Maps quand on cherche votre métier près de chez vous.",
  },
  {
    icon: Phone,
    title: "Être joignable",
    text: "Horaires à jour, appel et itinéraire en un clic, directement depuis le téléphone de vos clients.",
  },
  {
    icon: ShieldCheck,
    title: "Inspirer confiance",
    text: "Des photos, des avis et un site soigné : on choisit plus facilement un commerce qu'on a déjà vu.",
  },
];

export default function Benefices() {
  return (
    <section className="section" id="benefices">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Concrètement</span>
          <h2>Ce que votre commerce y gagne</h2>
        </Reveal>

        <div className={styles.grid}>
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal as="article" key={b.title} delay={i + 1} className={styles.card}>
                <span className={styles.icon}>
                  <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
