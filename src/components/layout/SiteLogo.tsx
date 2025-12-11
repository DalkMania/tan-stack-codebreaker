import { Link } from "@tanstack/react-router";
import { CircleLogo } from "@/components/icons/CircleLogo";
import { TextLogo } from "@/components/icons/TextLogo";

export const SiteLogo = () => {
  return (
    <Link
      to="/"
      className="print:grayscale print:text-black flex gap-4 items-center w-56 lg:w-80"
      aria-label="CodeBreaker Logo"
    >
      <CircleLogo />
      <TextLogo />
    </Link>
  );
};
