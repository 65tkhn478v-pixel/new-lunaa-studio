import { MapPin } from "lucide-react";
import styles from "./AvatarBorder.module.css";

// Avatar avec bordure animée (dégradé conique tournant), inspiré du
// composant "Avatar Border" de shadcnspace, adapté à la palette du site.
// `initials` : placeholder neutre en attendant la vraie photo.
export default function AvatarBorder({ initials = "LC", label = "Louis, Lunaa Studio" }) {
  return (
    <div className={styles.wrapper} role="img" aria-label={label}>
      <span className={styles.spin} aria-hidden="true" />
      <span className={styles.inner}>{initials}</span>
      <span className={styles.badge} aria-hidden="true">
        <MapPin size={11} strokeWidth={2.5} />
      </span>
    </div>
  );
}
