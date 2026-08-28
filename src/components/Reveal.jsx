import { motion, useReducedMotion } from "framer-motion";

// Reproduit l'effet "reveal on scroll" de l'ancien js/main.js
// (IntersectionObserver, threshold 0.15, rootMargin "0px 0px -8% 0px",
// transition opacity/transform/filter 0.9s cubic-bezier(0.22,1,0.36,1))
// avec Framer Motion, y compris les paliers de délai .reveal-delay-1..4
// et le respect de prefers-reduced-motion.

const DELAYS = [0, 0.08, 0.16, 0.24, 0.32];

export default function Reveal({
  as = "div",
  delay = 0,
  className,
  children,
  ...rest
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (shouldReduceMotion) {
    const Plain = as;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, filter: "blur(6px)", y: "2.2rem" }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: "0rem" }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: DELAYS[delay] || 0 }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
