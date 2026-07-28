import { Container } from "./container";
import { CtaLink } from "./cta-link";

type SectionPlaceholderProps = Readonly<{
  title: string;
  description: string;
  statusMessage: string;
  actionHref: `/${string}`;
  actionLabel: string;
}>;

export function SectionPlaceholder({
  title,
  description,
  statusMessage,
  actionHref,
  actionLabel,
}: SectionPlaceholderProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="max-w-3xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {title}
            </h1>
            <p className="text-lg leading-8 text-muted-foreground">
              {description}
            </p>
          </div>

          <div className="rounded-lg border border-border bg-surface-muted p-5 text-base leading-7 text-foreground">
            {statusMessage}
          </div>

          <CtaLink href={actionHref}>{actionLabel}</CtaLink>
        </div>
      </Container>
    </section>
  );
}
