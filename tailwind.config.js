/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './mentions-legales.html', './src/**/*.{js,jsx}'],
  // Preflight (le reset de base de Tailwind) est désactivé : le CSS existant
  // du site fait déjà son propre reset et redéfinit les styles de base
  // (body, h1-h4, ul, boutons, etc.). L'activer risquerait des micro-écarts
  // visuels par rapport au rendu actuel — contraire à la règle de migration
  // "pixel pour pixel". Tailwind reste disponible (utilitaires, config,
  // cohérence de stack) mais ne pilote pas le rendu existant.
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
