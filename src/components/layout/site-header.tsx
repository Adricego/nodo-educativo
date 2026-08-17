import { MainNavigation } from "./main-navigation";
import { Container } from "../ui/container";
import { SiteBrand } from "../ui/site-brand";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-surface py-4">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
          <SiteBrand className="shrink-0" />
          <div className="w-full md:w-auto [&_nav>div]:flex [&_nav>div]:flex-col [&_nav>div]:items-end [&_nav>div>div]:w-full md:[&_nav>div]:hidden">
            <MainNavigation />
          </div>
        </div>
      </Container>
    </header>
  );
}
