import styles from "./MovingBorderButton.module.css";

// Bordure animée façon "Moving Border" (Aceternity), réservée au CTA
// principal du site. Un seul usage sur toute la page, volontairement.
// `children` doit être le bouton existant (ex. <a className="btn btn-primary">).
export default function MovingBorderButton({ children, className = "" }) {
  return (
    <span className={`${styles.wrapper} ${className}`}>
      <span className={styles.spin} aria-hidden="true" />
      <span className={styles.content}>{children}</span>
    </span>
  );
}
