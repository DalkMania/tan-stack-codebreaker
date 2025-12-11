import TailwindBadge from "@/components/badges/TailwindBadge";
import TypeScriptBadge from "@/components/badges/TypeScriptBadge";
import TanStackBadge from "@/components/badges/TanStackBadge";
import ReactBadge from "@/components/badges/ReactBadge";
import { TextLogo } from "@/components/icons/TextLogo";
import { CircleLogo } from "@/components/icons/CircleLogo";

export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="print:hidden py-14 border-t">
      <div className="max-w-7xl mx-auto px-5 text-center mb-4">
        <div className="flex flex-col items-center gap-8 mx-auto max-w-fit mb-8" aria-label="CodeBreaker Logo">
          <CircleLogo width={90} height={90} />
          <TextLogo />
        </div>
        <p className="mt-4 text-sm">
          <strong>Code</strong>Breaker is a sample project for a simple Code-Breaking Game. Basically an automated way
          to create little "code-breaking" worksheets where each letter in a secret message is represented as a symbol.
          Kids can then refer to an alphabet lookup table, and perform the translation.
        </p>

        <p className="mt-4 text-sm">Built with React, TypeScript, TanStack Router, TanStack DB and Tailwind CSS.</p>
      </div>
      <div className="flex gap-2 items-center justify-center w-full">
        <ReactBadge />
        <TypeScriptBadge />
        <TanStackBadge />
        <TailwindBadge />
      </div>
      <div className="mt-14 pt-8 px-5 border-t">
        <div className="max-w-7xl mx-auto px-5">
          <p className="text-center text-sm dark:text-slate-300 text-balance">
            Copyright © {date} <strong>Code</strong>Breaker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
