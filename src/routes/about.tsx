import { createFileRoute } from "@tanstack/react-router";
import About from "../components/pages/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        name: "description",
        content: "A simple code-breaking game app built with TanStack Router and TanStack DB.",
      },
      {
        title: "CodeBreaker | About",
      },
    ],
  }),
  component: About,
});
