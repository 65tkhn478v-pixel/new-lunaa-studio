import { TrendingUp } from "lucide-react";
import { siCloudflare, siGoogle, siClaude, siFigma } from "simple-icons";
import Reveal from "./Reveal";
import styles from "./OutilsInfrastructure.module.css";

// Icône de marque officielle (simple-icons), rendue en currentColor pour
// rester cohérente avec le reste des cartes du site.
function BrandIcon({ icon, size = 20 }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}

// "Logo cloud" listant les vrais outils utilisés pour faire tourner le
// site — pas des clients, un titre honnête. Logos officiels via
// simple-icons, recolorés en currentColor pour rester dans la palette.
const TOOLS = [
  {
    name: "Cloudflare",
    role: "Hébergement & sécurité",
    icon: <BrandIcon icon={siCloudflare} />,
    href: "https://www.cloudflare.com",
  },
  {
    name: "Google",
    role: "Référencement & fiche Google Business",
    icon: <BrandIcon icon={siGoogle} />,
    href: "https://www.google.com",
  },
  {
    name: "Claude",
    role: "Conception & développement (Anthropic)",
    icon: <BrandIcon icon={siClaude} />,
    href: "https://www.anthropic.com/claude",
  },
  {
    name: "Figma",
    role: "Maquettes",
    icon: <BrandIcon icon={siFigma} />,
    href: "https://www.figma.com",
  },
  {
    name: "Optimisation SEO",
    role: "Une pratique suivie en continu, pas un outil",
    icon: <TrendingUp size={20} strokeWidth={1.6} />,
    href: null,
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
          {TOOLS.map((tool, i) => (
            <Reveal
              as={tool.href ? "a" : "div"}
              key={tool.name}
              delay={i}
              className={styles.card}
              {...(tool.href ? { href: tool.href, target: "_blank", rel: "noopener" } : {})}
            >
              <span className={styles.icon}>{tool.icon}</span>
              <span className={styles.name}>{tool.name}</span>
              <span className={styles.role}>{tool.role}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
