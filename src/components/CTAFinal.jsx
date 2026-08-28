import Reveal from "./Reveal";
import styles from "./CTAFinal.module.css";

const CONTACT_MAILTO =
  "mailto:contact@lunaa-studio.fr?subject=Je%20r%C3%A9serve%20une%20place%20gratuite%20%E2%80%94%20Lunaa%20Studio&body=Bonjour%20Louis%2C%0A%0AJe%20souhaite%20r%C3%A9server%20une%20des%20places%20gratuites.%0A%0ANom%20du%20commerce%20%3A%20%0AVille%20%3A%20%0AT%C3%A9l%C3%A9phone%20%3A%20%0ACe%20que%20je%20vends%20%2F%20mes%20services%20%3A%20%0A%0AMerci%2C";

export default function CTAFinal() {
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <Reveal as="div" className={styles["cta-final"]}>
          <span className="eyebrow">C'est le moment</span>
          <h2>Site créé gratuitement, 15 €/mois d'hébergement, votre avis en échange.</h2>
          <p>
            Écrivez-moi le nom de votre commerce et votre ville. Je vous réponds sous 24 h pour
            fixer l'appel de 20 minutes.
          </p>
          <div className={styles["cta-final-actions"]}>
            <a className="btn btn-primary" href={CONTACT_MAILTO}>
              <span>Réserver ma place gratuite</span>
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
            <span className={styles["cta-final-mail"]}>
              <a href="mailto:contact@lunaa-studio.fr">contact@lunaa-studio.fr</a>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
