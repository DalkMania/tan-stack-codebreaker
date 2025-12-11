import { createFileRoute } from "@tanstack/react-router";
import About from "../components/pages/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        name: "description",
        content: "My App is a web application",
      },
      {
        title: "My App",
      },
    ],
  }),
  component: About,
});
