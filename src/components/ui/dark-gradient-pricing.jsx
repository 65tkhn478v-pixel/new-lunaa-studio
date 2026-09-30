import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, X } from "lucide-react";

// Adapté du composant 21st.dev "Dark Gradient Pricing" (@vaib215).
// Différences avec la source :
// - JSX au lieu de TSX, sans shadcn : Card devient un <div>, Button un <a>
//   (le CTA est un lien d'ancre), cn() une simple concaténation.
// - Palette Lunaa (#111111 / #C97B3A / #F5F1E8 / #FFFFFF) au lieu de zinc.
// - `featured` remplace le test codé en dur `tier === "Pro"`.
// - Le preflight Tailwind est désactivé sur le site : chaque bordure
//   déclare explicitement son style (border-solid) et ses côtés.

const cx = (...classes) => classes.filter(Boolean).join(" ");

const SERIF = "font-[family-name:var(--serif)] font-[560]";

export const Benefit = ({ text, checked }) => {
  return (
    <li className="flex items-start gap-3">
      {checked ? (
        <span className="mt-[0.2rem] grid size-4 flex-none place-content-center rounded-full bg-[#C97B3A] text-[#111111]">
          <Check className="size-3" strokeWidth={3} aria-hidden="true" />
        </span>
      ) : (
        <span className="mt-[0.2rem] grid size-4 flex-none place-content-center rounded-full bg-[#F5F1E8]/10 text-[#F5F1E8]/50">
          <X className="size-3" strokeWidth={3} aria-hidden="true" />
        </span>
      )}
      <span className="text-[0.95rem] leading-snug text-[#F5F1E8]/80">{text}</span>
    </li>
  );
};

export const PricingCard = ({
  tier,
  price,
  period,
  bestFor,
  CTA,
  href,
  benefits,
  badge,
  featured = false,
  className,
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="h-full"
      initial={reduceMotion ? false : { filter: "blur(2px)" }}
      whileInView={{ filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.25 }}
    >
      <div
        className={cx(
          "relative flex h-full w-full flex-col overflow-hidden rounded-[2rem] border border-solid",
          "bg-gradient-to-br p-6 sm:p-8",
          featured
            ? "border-[#C97B3A]/60 from-[#C97B3A]/[0.22] via-[#111111]/60 to-[#111111]/90 shadow-[0_30px_80px_-40px_rgba(201,123,58,0.55)]"
            : "border-[#F5F1E8]/15 from-[#F5F1E8]/[0.05] to-[#111111]/80",
          className,
        )}
      >
        <div className="flex flex-col items-center border-0 border-b border-solid border-[#F5F1E8]/15 pb-6 text-center">
          {/* Emplacement du badge réservé sur les deux cartes : les prix
              restent alignés quand les cartes sont côte à côte. */}
          <span
            className={cx(
              "mb-4 inline-block rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.1em]",
              badge ? "bg-[#C97B3A] text-[#111111]" : "invisible hidden md:inline-block",
            )}
            aria-hidden={badge ? undefined : "true"}
          >
            {badge || " "}
          </span>
          <span className={cx("mb-5 inline-block text-2xl text-[#FFFFFF]", SERIF)}>{tier}</span>
          <span className="mb-3 inline-flex items-baseline gap-2">
            <span className={cx("text-4xl text-[#FFFFFF] sm:text-5xl", SERIF)}>{price}</span>
            {period && <span className="text-[0.9rem] font-medium text-[#F5F1E8]/60">{period}</span>}
          </span>
          <span className="bg-gradient-to-br from-[#F5F1E8] to-[#C97B3A] bg-clip-text text-center text-[0.95rem] text-transparent">
            {bestFor}
          </span>
        </div>
        <ul className="flex-1 space-y-4 py-8 sm:py-9">
          {benefits.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </ul>
        <a
          href={href}
          className={cx(
            "flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[0.92rem] font-semibold",
            "transition-colors duration-300",
            featured
              ? "bg-[#C97B3A] text-[#111111] hover:bg-[#F5F1E8]"
              : "border border-solid border-[#F5F1E8]/25 text-[#F5F1E8] hover:bg-[#F5F1E8] hover:text-[#111111]",
          )}
        >
          <span>{CTA}</span>
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </motion.div>
  );
};
