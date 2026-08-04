import { createRootRoute, Outlet } from "@tanstack/solid-router";

import "../styles.css";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <main class="bg-cover bg-center w-screen bg-[url('/background-img.webp')] h-screen">
      <div class="size-full bg-background/85 backdrop-blur-sm flex items-center justify-center">
        <Outlet />
      </div>
    </main>
  );
}
