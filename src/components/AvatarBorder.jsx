import { MapPin } from "lucide-react";
import styles from "./AvatarBorder.module.css";

// Avatar avec bordure animée (dégradé conique tournant), inspiré du
// composant "Avatar Border" de shadcnspace, adapté à la palette du site.
// `src` : photo réelle. Si absente, retombe sur les initiales en placeholder.
export default function AvatarBorder({
  src = "/assets/louis-portrait.jpg",
  initials = "LC",
  label = "Louis, Lunaa Studio",
}) {
  return (
    <div className={styles.wrapper} role="img" aria-label={label}>
      <span className={styles.spin} aria-hidden="true" />
      {src ? (
        <img className={styles.photo} src={src} alt="" />
      ) : (
        <span className={styles.inner}>{initials}</span>
      )}
      <span className={styles.badge} aria-hidden="true">
        <MapPin size={11} strokeWidth={2.5} />
      </span>
    </div>
  );
}
