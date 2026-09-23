import { createRootRoute, Outlet } from "@tanstack/solid-router";

import "../styles.css";
import Footer from "@/components/blocks/footer";
import NavBar from "@/components/blocks/navbar";

export const Route = createRootRoute({ component: RootComponent });

function RootComponent() {
  return (
    <div class="relative min-h-dvh w-full overflow-hidden bg-background">
      <div
        aria-hidden="true"
        class="pointer-events-none fixed inset-0 z-0 bg-[url('/background.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed"
      />
      <div class="relative z-10 bg-background/50 min-h-screen w-screen overflow-y-auto flex flex-col backdrop-blur-lg">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
