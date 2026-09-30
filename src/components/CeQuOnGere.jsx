import { Globe, Server, Shield, TrendingUp, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import styles from "./CeQuOnGere.module.css";

const ITEMS = [
  { label: "Le nom de domaine", icon: Globe },
  { label: "L'hébergement", icon: Server },
  { label: "La sécurité du site", icon: Shield },
  { label: "L'optimisation pour Google", icon: TrendingUp },
  { label: "Le support, par téléphone ou e-mail", icon: MessageCircle },
];

export default function CeQuOnGere() {
  return (
    <section className="section-tight">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Zéro paperasse</span>
          <h2>Ce que je gère à votre place</h2>
        </Reveal>
        <div className={styles["manage-grid"]}>
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal as="div" key={item.label} delay={i} className={styles["manage-card"]}>
                <span className={styles.icon}>
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <span className={styles.label}>{item.label}</span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
