import styles from "./Footer.module.css";

// `homeHref`: "#main" sur la page d'accueil, "/" depuis la page mentions légales.
export default function Footer({ homeHref = "#main" }) {
  return (
    <footer className={styles["site-footer"]}>
      <div className="wrap">
        <div className={styles["footer-inner"]}>
          <a href={homeHref} className={styles["footer-brand"]}>
            <img src="/assets/icone-mono-noir.svg" alt="" width="22" height="22" />
            Lunaa Studio
          </a>
          <div className={styles["footer-meta"]}>
            <span>Lille · Hauts-de-France · Micro-entreprise</span>
            <a href="/mentions-legales.html">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
