import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "@/styles/app.css";

type LayoutProps = {
  children: ReactNode;
};

export const BaseLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="flex flex-col flex-1">{children}</main>
      <Footer />
    </>
  );
};
