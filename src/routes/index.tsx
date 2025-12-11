import { createFileRoute } from "@tanstack/react-router";
import App from "../components/pages/App";

export const Route = createFileRoute("/")({
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
  component: App,
});
