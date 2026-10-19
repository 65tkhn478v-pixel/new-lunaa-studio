import { Check, Globe, ImageOff, Navigation, Phone, Star, X } from "lucide-react";
import Reveal from "./Reveal";
import styles from "./FicheGoogle.module.css";

const BEFORE = ["Pas de photo", "Horaires manquants", "Aucune description", "Aucun avis"];
const AFTER = ["Photos de l'établissement", "Horaires à jour", "Description du commerce", "Avis clients"];

const CHECKLIST = [
  "Catégorie principale et catégories secondaires",
  "Horaires, y compris jours fériés et fermetures exceptionnelles",
  "Photos de l'établissement, des produits et de l'équipe",
  "Description, services et produits",
  "Lien vers le site, téléphone et itinéraire",
  "Mêmes nom, adresse et téléphone sur la fiche et sur le site",
  "Réponses aux avis",
  "Un QR code à poser sur votre comptoir pour récolter des avis",
];

// Maquettes génériques en HTML/CSS, aucune donnée réelle :
// pas de note chiffrée, pas de nombre d'avis, nom affiché générique.
function FicheAvant() {
  return (
    <div className={`${styles.fiche} ${styles.before}`}>
      <span className={styles.tag}>Avant</span>
      <div className={styles.photo}>
        <ImageOff size={26} strokeWidth={1.4} aria-hidden="true" />
      </div>
      <div className={styles.name}>Votre commerce</div>
      <ul className={styles.rows}>
        {BEFORE.map((t) => (
          <li key={t}>
            <X size={16} strokeWidth={2} aria-hidden="true" />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FicheApres() {
  return (
    <div className={`${styles.fiche} ${styles.after}`}>
      <span className={styles.tag}>Après</span>
      <div className={styles.photos} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className={styles.name}>Votre commerce</div>
      <div className={styles.stars} aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} size={14} strokeWidth={1.6} />
        ))}
      </div>
      <ul className={styles.rows}>
        {AFTER.map((t) => (
          <li key={t}>
            <Check size={16} strokeWidth={2.2} aria-hidden="true" />
            {t}
          </li>
        ))}
      </ul>
      <div className={styles.actions} aria-hidden="true">
        <span><Phone size={15} strokeWidth={1.8} />Appeler</span>
        <span><Navigation size={15} strokeWidth={1.8} />Itinéraire</span>
        <span><Globe size={15} strokeWidth={1.8} />Site</span>
      </div>
    </div>
  );
}

export default function FicheGoogle() {
  return (
    <section className="section" id="fiche-google">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Visibilité locale</span>
          <h2>Votre fiche Google, complète et à jour</h2>
          <p>Inclus dans l'Option Visibilité.</p>
        </Reveal>

        <div className={styles.compare}>
          <Reveal as="div" delay={0}>
            <FicheAvant />
          </Reveal>
          <Reveal as="div" delay={3}>
            <FicheApres />
          </Reveal>
        </div>
        <p className={styles.caption}>Illustration</p>

        <ul className={styles.checklist}>
          {CHECKLIST.map((item, i) => (
            <Reveal as="li" key={item} delay={Math.min(i, 4)} className={styles["check-item"]}>
              <Check size={18} strokeWidth={2.2} aria-hidden="true" />
              <span>{item}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
