import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const ARROW_ICON = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M3 11L11 3M11 3H4.5M11 3V9.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// `variant`: "home" (page principale, ancres locales) ou "legal"
// (page mentions légales, ancres préfixées par "/" vers la page d'accueil).
export default function Header({ variant = "home" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const prefix = variant === "legal" ? "/" : "";
  const brandHref = variant === "legal" ? "/" : "#main";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks =
    variant === "legal"
      ? [
          { href: `${prefix}#approche`, label: "Approche" },
          { href: `${prefix}#tarifs`, label: "Tarifs" },
        ]
      : [
          { href: `${prefix}#approche`, label: "Approche" },
          { href: `${prefix}#realisations`, label: "Réalisations" },
          { href: `${prefix}#qui-suis-je`, label: "Qui suis-je" },
          { href: `${prefix}#tarifs`, label: "Tarifs" },
        ];

  const mobileLinks = [
    { href: `${prefix}#approche`, label: "Approche" },
    { href: `${prefix}#realisations`, label: "Réalisations" },
    { href: `${prefix}#qui-suis-je`, label: "Qui suis-je" },
    { href: `${prefix}#contact`, label: "Contact" },
  ];

  return (
    <>
      <div className={styles["nav-shell"]}>
        <nav className={`${styles.nav} ${isScrolled ? styles["is-scrolled"] : ""}`}>
          <a href={brandHref} className={styles["nav-brand"]}>
            <img src="/assets/icone-couleur.svg" alt="" width="26" height="26" />
            lunaa<small>STUDIO</small>
          </a>
          <div className={styles["nav-links"]}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <a className={`btn btn-primary ${styles["nav-cta"]}`} href={`${prefix}#contact`}>
            <span>Contact</span>
            <span className="btn-icon">{ARROW_ICON}</span>
          </a>
          <button
            className={`${styles["nav-toggle"]} ${isMenuOpen ? styles["is-open"] : ""}`}
            aria-label="Ouvrir le menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>

      <div className={`${styles["mobile-menu"]} ${isMenuOpen ? styles["is-open"] : ""}`}>
        {mobileLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <span className={styles["mobile-menu-foot"]}>contact@lunaa-studio.fr</span>
      </div>
    </>
  );
}
