import { SectionPlaceholder } from "@/components/ui/section-placeholder";

export default function NoticiasPage() {
  return (
    <SectionPlaceholder
      title="Noticias"
      description="Un espacio para contextualizar información relevante sobre educación, tecnología y políticas públicas vinculadas al sistema educativo chileno."
      statusMessage="Esta sección está en preparación y todavía no publica noticias ni artículos."
      actionHref="/"
      actionLabel="Volver al inicio"
    />
  );
}
