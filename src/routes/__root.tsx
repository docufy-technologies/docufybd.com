import { createRootRoute, Outlet } from "@tanstack/solid-router";

import "../styles.css";

export const Route = createRootRoute({ component: RootComponent });

function RootComponent() {
  return <Outlet />;
}
