import { createRootRoute, Outlet } from "@tanstack/solid-router";

import "../styles.css";

export const Route = createRootRoute({ component: RootComponent });

function RootComponent() {
  return (
    <div class="relative min-h-dvh w-full overflow-hidden bg-background">
      <div
        aria-hidden="true"
        class="pointer-events-none fixed inset-0 z-0 bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat bg-fixed"
      />
      <div class="relative z-10 h-screen w-screen overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
