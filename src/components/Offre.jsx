import Reveal from "./Reveal";
import MovingBorderButton from "./MovingBorderButton";
import styles from "./Offre.module.css";

const CONTACT_MAILTO =
  "mailto:contact@lunaa-studio.fr?subject=Je%20r%C3%A9serve%20une%20place%20gratuite%20%E2%80%94%20Lunaa%20Studio&body=Bonjour%20Louis%2C%0A%0AJe%20souhaite%20r%C3%A9server%20une%20des%20places%20gratuites.%0A%0ANom%20du%20commerce%20%3A%20%0AVille%20%3A%20%0AT%C3%A9l%C3%A9phone%20%3A%20%0ACe%20que%20je%20vends%20%2F%20mes%20services%20%3A%20%0A%0AMerci%2C";

export default function Offre() {
  return (
    <section className="section" id="offre">
      <div className="wrap">
        <Reveal as="div" className={styles.offer}>
          <div className={styles["offer-grid"]}>
            <div className={styles["offer-main"]}>
              <span className="eyebrow">Offre de lancement</span>
              <h2>3 places gratuites ce mois-ci pour les commerçants des Hauts-de-France.</h2>
              <p>
                <strong>Votre site est créé gratuitement</strong>, vous ne payez que
                l'hébergement à partir de 15 €/mois. En échange, vous acceptez de partager
                votre avis une fois le site en ligne.
              </p>
              <p>Un e-mail, une réponse de ma part sous 24 h. Sans engagement.</p>
              <MovingBorderButton>
                <a className="btn btn-primary" href={CONTACT_MAILTO}>
                  <span>Réserver une place gratuite</span>
                  <span className="btn-icon">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path
                        d="M3 11L11 3M11 3H4.5M11 3V9.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </MovingBorderButton>
            </div>
            <div className={styles["offer-side"]}>
              <div className={styles.slots}>
                <div className={styles["slots-label"]}>Places restantes</div>
                <div className={styles["slots-count"]}>
                  <span className={styles.num}>1</span>
                  <span className={styles.of}>/ 3</span>
                </div>
                <div className={styles["slots-bar"]}>
                  <div className={styles["slots-bar-fill"]}></div>
                </div>
              </div>
              <p className={styles["offer-fine"]}>
                Ce compteur est mis à jour manuellement — le nombre de places réellement
                disponibles à la date de votre message.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
