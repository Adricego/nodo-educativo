export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only z-50 rounded-md bg-brand-dark px-4 py-3 text-sm font-semibold text-white no-underline shadow-lg focus:not-sr-only focus:fixed focus:left-4 focus:top-4 hover:bg-brand-active"
    >
      Saltar al contenido principal
    </a>
  );
}
