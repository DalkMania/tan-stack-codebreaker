import { createFileRoute } from "@tanstack/react-router";
import App from "../components/pages/App";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        name: "description",
        content: "A simple code-breaking game app built with TanStack Router and TanStack DB.",
      },
      {
        title: "CodeBreaker | Home",
      },
    ],
  }),
  component: App,
});
