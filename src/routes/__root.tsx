import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { BaseLayout } from "@/components/layout/RootLayout";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const RootLayout = () => (
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <BaseLayout>
      <HeadContent />
      <Outlet />
      <Scripts />
    </BaseLayout>
  </ThemeProvider>
);

export const Route = createRootRoute({
  component: RootLayout,
});
