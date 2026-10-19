import Reveal from "./Reveal";
import { Benefit, PricingCard } from "./ui/dark-gradient-pricing";

const SERIF = "font-[family-name:var(--serif)] font-[560]";

export default function Tarifs() {
  return (
    <section className="section overflow-hidden bg-[#111111] text-[#F5F1E8]" id="tarifs">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] max-w-none -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(201,123,58,0.22),transparent)]"
        aria-hidden="true"
      />

      <div className="wrap relative">
        <Reveal as="div" className="section-head mx-auto items-center text-center">
          <span className="eyebrow text-[#C97B3A]">Tarifs standards</span>
          <h2>Mes tarifs</h2>
          <p className="!text-[#F5F1E8]/70">
            Deux formules, selon que vous préférez payer au mois ou une fois pour toutes.
          </p>
        </Reveal>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <PricingCard
              featured
              badge="Le plus choisi"
              tier="Abonnement"
              price="39 €"
              period="/ mois"
              bestFor="0 € à la création · engagement 12 mois"
              CTA="En discuter"
              href="#contact"
              benefits={[
                { text: "Création du site incluse (1 à 5 pages)", checked: true },
                { text: "Hébergement inclus", checked: true },
                { text: "Maintenance et mises à jour", checked: true },
                { text: "1 modification par mois", checked: true },
              ]}
            />
            <PricingCard
              tier="Achat unique"
              price="500 €"
              bestFor="payé une seule fois, aucun abonnement"
              CTA="En discuter"
              href="#contact"
              benefits={[
                { text: "Création du site (1 à 5 pages)", checked: true },
                { text: "Le site est payé une fois pour toutes", checked: true },
                { text: "Modifications à la demande : 40 € l'unité", checked: true },
              ]}
            />
          </div>

          {/* Complément compatible avec les deux formules, pas un 3ᵉ tier :
              bloc pleine largeur, visuellement en retrait des cartes. */}
          <Reveal
            as="div"
            className="mt-6 grid gap-6 rounded-[2rem] border border-dashed border-[#C97B3A]/40 bg-[#F5F1E8]/[0.03] p-6 sm:p-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-center"
          >
            <div className="flex flex-col gap-2">
              <span className={`text-2xl text-[#FFFFFF] ${SERIF}`}>Option Visibilité</span>
              <span className="inline-flex items-baseline gap-2">
                <span className={`text-3xl text-[#C97B3A] ${SERIF}`}>+30 €</span>
                <span className="text-[0.9rem] font-medium text-[#F5F1E8]/60">/ mois</span>
              </span>
              <span className="text-[0.9rem] text-[#F5F1E8]/60">
                (compatible avec les deux formules)
              </span>
            </div>
            <ul className="space-y-4">
              <Benefit text="Fiche Google Business créée et tenue à jour" checked />
              <Benefit text="Un article SEO par mois" checked />
              <Benefit text="Suivi de votre position dans les recherches" checked />
            </ul>
          </Reveal>

          <p className="mt-8 text-center text-[0.85rem] text-[#F5F1E8]/55">
            Une modification = changement de texte, photo, horaires ou tarifs. Une nouvelle page
            fait l'objet d'un devis.
          </p>
        </div>
      </div>
    </section>
  );
}
