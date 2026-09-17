import { createFileRoute } from "@tanstack/solid-router";
import { For, type JSX } from "solid-js";
import { docsSolutions, fiscalSolutions, techSolutions } from "@/constants";

export const Route = createFileRoute("/solutions")({
  component: RouteComponent,
});

function SolutionsCardCustom({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: JSX.Element;
}) {
  return (
    <div class="space-y-3 text-center bg-secondary/30">
      <div class="relative mx-auto flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border items-center justify-center mb-4">
        {icon}
      </div>
      <h3 class="text-xl">{title}</h3>
      <p class="text-base mt-2 leading-tight">{description}</p>
    </div>
  );
}

function Entitled({ children }: { children: JSX.Element }) {
  return (
    <p class="capitalize leading-relaxed tracking-wider text-center font-heading mt-4">
      {children}
    </p>
  );
}

function RouteComponent() {
  return (
    <section class="py-12 md:py-20 backdrop-blur-sm bg-transparent max-sm:mt-20">
      <div class="mx-auto max-w-5xl space-y-8 px-6 text-center flex flex-col items-center justify-center">
        <p class="text-center text-2xl font-medium text-foreground">
          Docufy helps businesses and individuals through three services
          subsidiaries: Docs by Docufy, Docufy Tech, and Docufy Fiscal. Each of
          these subsidiaries is designed to address specific challenges in
          document management, providing tailored solutions that enhance
          productivity and organization.
        </p>
        <Entitled>Solutions that Docufy Tech Offers</Entitled>
        <div class="relative mx-auto grid max-w-6xl *:p-12 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden gap-2">
          <For each={techSolutions}>
            {(s) => (
              <SolutionsCardCustom
                title={s.title}
                description={s.description}
                icon={s.icon}
              />
            )}
          </For>
        </div>
        <Entitled>Solutions that Docufy Fiscal Offers</Entitled>
        <div class="relative mx-auto grid max-w-6xl *:p-12 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden gap-2">
          <For each={fiscalSolutions}>
            {(s) => (
              <SolutionsCardCustom
                title={s.title}
                description={s.description}
                icon={s.icon}
              />
            )}
          </For>
        </div>
        <Entitled>Solutions that Docs by Docufy Offers</Entitled>
        <div class="flex justify-center gap-2">
          <div class="relative mx-auto grid max-w-6xl *:p-12 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden gap-2">
            <For each={docsSolutions}>
              {(s) => (
                <SolutionsCardCustom
                  title={s.title}
                  description={s.description}
                  icon={s.icon}
                />
              )}
            </For>
          </div>
        </div>
      </div>
    </section>
  );
}
