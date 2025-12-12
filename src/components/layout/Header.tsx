import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { useSticky } from "@/hooks/useSticky";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { NavigationMenu } from "./NavigationMenu";

export const Header = () => {
  const headerRef = useRef(null);
  const { isSticky } = useSticky(headerRef, 0);
  const defaultClasses = "py-4 border-transparent";
  const stickyClasses = "py-3";

  return (
    <header
      id="masthead"
      className={` sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 ${
        !isSticky ? defaultClasses : stickyClasses
      }`}
      role="banner"
      ref={headerRef}
    >
      <Container>
        <div className="print:hidden flex w-full lg:w-auto items-center justify-between">
          <SiteLogo />
          <NavigationMenu />
        </div>
        <div className="hidden print:flex print:w-full print:items-center print:justify-center">
          <SiteLogo />
        </div>
      </Container>
    </header>
  );
};
