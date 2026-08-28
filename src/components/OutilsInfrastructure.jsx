import { Cloud, Search } from "lucide-react";
import Reveal from "./Reveal";
import styles from "./OutilsInfrastructure.module.css";

// "Logo cloud" listant les vrais outils utilisés pour faire tourner le
// site — pas des clients, un titre honnête. Logos rendus en wordmark
// typographique monochrome (cohérent avec la palette du site) plutôt
// qu'en SVG de marque reconstitués de mémoire.
const TOOLS = [
  {
    name: "Cloudflare",
    role: "Hébergement & sécurité",
    icon: Cloud,
    href: "https://www.cloudflare.com",
  },
  {
    name: "Google",
    role: "Référencement & fiche Google Business",
    icon: Search,
    href: "https://www.google.com",
  },
];

export default function OutilsInfrastructure() {
  return (
    <section className="section-tight">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Sous le capot</span>
          <h2>Outils &amp; infrastructure</h2>
          <p>Les services réels qui font tourner votre site, au quotidien.</p>
        </Reveal>

        <div className={styles.grid}>
          {TOOLS.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <Reveal
                as="a"
                key={tool.name}
                delay={i}
                className={styles.card}
                href={tool.href}
                target="_blank"
                rel="noopener"
              >
                <span className={styles.icon}>
                  <Icon size={20} strokeWidth={1.6} />
                </span>
                <span className={styles.name}>{tool.name}</span>
                <span className={styles.role}>{tool.role}</span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
