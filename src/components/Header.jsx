import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
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

// Masquage au scroll : basé uniquement sur window.scrollY (molette, trackpad,
// clavier et tactile se comportent pareil).
const TOP_ZONE = 80; // px : toujours visible en haut de page
const THRESHOLD = 8; // px : variations ignorées (anti-tremblement)
const ANCHOR_LOCK_MAX = 1000; // ms : verrou max pendant un scroll vers une ancre

// `variant`: "home" (page principale, ancres locales) ou "legal"
// (page mentions légales, ancres préfixées par "/" vers la page d'accueil).
export default function Header({ variant = "home" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHiddenByScroll, setIsHiddenByScroll] = useState(false);
  const [hasFocusWithin, setHasFocusWithin] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const lastY = useRef(0);
  const anchorLock = useRef(false);

  const prefix = variant === "legal" ? "/" : "";
  const brandHref = variant === "legal" ? "/" : "#main";

  useEffect(() => {
    let frame = 0;
    lastY.current = window.scrollY;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const maxY = document.documentElement.scrollHeight - window.innerHeight;
      // Rebond élastique (iOS) : valeurs hors de la page, ignorées.
      if (y < 0 || y > maxY + 1) return;

      setIsScrolled(y > 12);

      if (y < TOP_ZONE) {
        setIsHiddenByScroll(false);
        lastY.current = y;
        return;
      }
      if (anchorLock.current) {
        lastY.current = y;
        return;
      }
      const delta = y - lastY.current;
      if (Math.abs(delta) < THRESHOLD) return;
      setIsHiddenByScroll(delta > 0);
      lastY.current = y;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Clic sur une ancre du menu : le header reste visible pendant le scroll
  // automatique, puis la référence repart de la position d'arrivée.
  const lockDuringAnchorScroll = () => {
    anchorLock.current = true;
    setIsHiddenByScroll(false);
    let timer = 0;
    const release = () => {
      anchorLock.current = false;
      lastY.current = window.scrollY;
      window.removeEventListener("scrollend", release);
      clearTimeout(timer);
    };
    window.addEventListener("scrollend", release, { once: true });
    timer = setTimeout(release, ANCHOR_LOCK_MAX);
  };

  const isHidden =
    isHiddenByScroll && !isMenuOpen && !hasFocusWithin && !shouldReduceMotion;

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    lockDuringAnchorScroll();
  };

  const navLinks =
    variant === "legal"
      ? [
          { href: `${prefix}#approche`, label: "Approche" },
          { href: `${prefix}#fiche-google`, label: "Fiche Google" },
          { href: `${prefix}#tarifs`, label: "Tarifs" },
        ]
      : [
          { href: `${prefix}#approche`, label: "Approche" },
          { href: `${prefix}#realisations`, label: "Réalisations" },
          { href: `${prefix}#qui-suis-je`, label: "Qui suis-je" },
          { href: `${prefix}#fiche-google`, label: "Fiche Google" },
          { href: `${prefix}#tarifs`, label: "Tarifs" },
        ];

  const mobileLinks = [
    { href: `${prefix}#approche`, label: "Approche" },
    { href: `${prefix}#realisations`, label: "Réalisations" },
    { href: `${prefix}#qui-suis-je`, label: "Qui suis-je" },
    { href: `${prefix}#fiche-google`, label: "Fiche Google" },
    { href: `${prefix}#tarifs`, label: "Tarifs" },
    { href: `${prefix}#contact`, label: "Contact" },
  ];

  return (
    <>
      <div
        className={`${styles["nav-shell"]} ${isHidden ? styles["is-hidden"] : ""}`}
        // Focus clavier uniquement : un clic souris sur un lien ne doit pas
        // bloquer le header en position visible.
        onFocus={(e) => {
          if (e.target.matches(":focus-visible")) setHasFocusWithin(true);
        }}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setHasFocusWithin(false);
        }}
        onClick={(e) => {
          if (e.target.closest('a[href*="#"]')) lockDuringAnchorScroll();
        }}
      >
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
