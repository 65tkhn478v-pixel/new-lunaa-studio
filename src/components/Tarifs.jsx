import Reveal from "./Reveal";
import { Benefit, PricingCard } from "./ui/dark-gradient-pricing";

const SERIF = "font-[family-name:var(--serif)] font-[560]";

const COMMON = [
  "Un site qui s'affiche bien sur téléphone, tablette et ordinateur",
  "Vos horaires, votre adresse et votre numéro visibles tout de suite",
  "Un bouton pour vous appeler et un pour venir jusqu'à vous",
  "Le petit cadenas dans la barre d'adresse, qui rassure vos clients",
  "Une maquette à regarder sur votre téléphone avant la mise en ligne",
  "Une réponse de ma part sous 24 h",
];

export default function Tarifs() {
  return (
    <section className="section overflow-hidden bg-[#111111] text-[#F5F1E8]" id="tarifs">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] max-w-none -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(201,123,58,0.22),transparent)]"
        aria-hidden="true"
      />

      <div className="wrap relative">
        <Reveal as="div" className="section-head mx-auto items-center text-center">
          <span className="eyebrow text-[#C97B3A]">Tarifs</span>
          <h2>Mes tarifs</h2>
          <p className="!text-[#F5F1E8]/70">Deux façons de payer, le même site au bout.</p>
        </Reveal>

        <div className="mx-auto max-w-5xl">
          {/* Ce qui est commun aux deux formules, avant de les comparer. */}
          <Reveal
            as="div"
            className="mb-6 rounded-[2rem] border border-solid border-[#F5F1E8]/15 bg-[#F5F1E8]/[0.03] p-6 sm:p-8"
          >
            <h3 className={`mb-6 text-2xl text-[#FFFFFF] ${SERIF}`}>Dans les deux cas, vous avez</h3>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-10">
              {COMMON.map((text) => (
                <Benefit key={text} text={text} checked />
              ))}
            </ul>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <PricingCard
              featured
              badge="Le plus simple"
              tier="Au mois"
              price="39 €"
              period="/ mois"
              bestFor="rien à payer au départ · engagement 12 mois"
              tagline="Pour ne plus jamais y penser."
              CTA="En discuter"
              href="#contact"
              benefits={[
                { text: "Je crée votre site (jusqu'à 5 pages)", checked: true },
                { text: "Je le garde en ligne et en bon état", checked: true },
                { text: "Un changement par mois offert : horaires, photo, tarif, texte", checked: true },
                { text: "Un souci ? Vous m'appelez, je m'en occupe", checked: true },
              ]}
            />
            <PricingCard
              tier="En une fois"
              price="500 €"
              bestFor="payé une seule fois, sans abonnement"
              tagline="Pour être propriétaire de son site et payer seulement quand on change quelque chose."
              CTA="En discuter"
              href="#contact"
              benefits={[
                { text: "Je crée votre site (jusqu'à 5 pages)", checked: true },
                { text: "Vous ne payez qu'une fois", checked: true },
                { text: "Un changement à faire ? 40 € à chaque fois", checked: true },
              ]}
            />
          </div>

          {/* Option compatible avec les deux formules, pas un 3ᵉ tier :
              bloc pleine largeur, bordure en pointillés. */}
          <Reveal
            as="div"
            className="mt-6 grid gap-6 rounded-[2rem] border border-dashed border-[#C97B3A]/40 bg-[#F5F1E8]/[0.03] p-6 sm:p-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-center"
          >
            <div className="flex flex-col gap-2">
              <span className={`text-2xl text-[#FFFFFF] ${SERIF}`}>Être trouvé sur Google</span>
              <span className="inline-flex items-baseline gap-2">
                <span className={`text-3xl text-[#C97B3A] ${SERIF}`}>+30 €</span>
                <span className="text-[0.9rem] font-medium text-[#F5F1E8]/60">/ mois</span>
              </span>
              <span className="text-[0.9rem] text-[#F5F1E8]/60">
                s'ajoute à l'une ou l'autre formule
              </span>
              <span className="mt-1 text-[0.95rem] italic leading-snug text-[#F5F1E8]/75">
                Pour que les gens qui cherchent « boulangerie Lille » tombent sur vous.
              </span>
            </div>
            <ul className="space-y-4">
              <Benefit
                text="Je crée ou reprends votre fiche Google, celle qui s'affiche sur Google Maps"
                checked
              />
              <Benefit text="Je la tiens à jour : horaires, photos, jours fériés" checked />
              <Benefit
                text="J'écris un article par mois sur votre métier, pour que Google vous montre plus souvent"
                checked
              />
              <Benefit text="Je vous dis chaque mois où vous apparaissez dans Google" checked />
            </ul>
          </Reveal>

          <p className="mt-8 text-center text-[0.85rem] text-[#F5F1E8]/55">
            Un changement, c'est un horaire, une photo, un prix ou un texte modifié. Une nouvelle
            page, je vous fais un devis avant.
          </p>
        </div>
      </div>
    </section>
  );
}
