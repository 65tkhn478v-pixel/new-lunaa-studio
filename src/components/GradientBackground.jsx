import styles from "./GradientBackground.module.css";

// Fond décoratif fixe : grille de lignes fines très subtile + deux taches
// de dégradé radial flouté en bas de page. Couleurs limitées à celles déjà
// définies par le thème (accent cuivre --terracotta + teinte neutre claire
// --paper-dim) — aucune nouvelle couleur introduite.
// Réf. d'inspiration : gradient-blur-bg "sky-gradient-grid-bottom" (21st.dev),
// adapté à la palette du site.
export default function GradientBackground() {
  return (
    <div className={styles.background} aria-hidden="true">
      <div className={styles.grid} />
      <div className={`${styles.blob} ${styles["blob-copper"]}`} />
      <div className={`${styles.blob} ${styles["blob-neutral"]}`} />
    </div>
  );
}
