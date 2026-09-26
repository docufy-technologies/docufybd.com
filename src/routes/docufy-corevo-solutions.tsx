import { createFileRoute } from "@tanstack/solid-router";
import { For, type JSX } from "solid-js";
import { docsSolutions } from "@/constants";
export const Route = createFileRoute("/docufy-corevo-solutions")({
  component: RouteComponent,
});

function SolutionsCardCustom(props: {
  title: string;
  description: string;
  icon: () => JSX.Element;
}) {
  return (
    <div class="space-y-3 text-center bg-secondary/30">
      <div class="relative mx-auto flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border items-center justify-center mb-4">
        {props.icon()}
      </div>
      <h3 class="text-xl">{props.title}</h3>
      <p class="text-base mt-2 leading-tight">{props.description}</p>
    </div>
  );
}

function Entitled(props: { children: JSX.Element }) {
  return (
    <h2 class="capitalize leading-relaxed tracking-wider text-center font-heading mt-4">
      {props.children}
    </h2>
  );
}

function RouteComponent() {
  return (
    <section class="py-12 md:py-20 max-sm:mt-20">
      <div class="mx-auto max-w-5xl space-y-8 px-6 text-center flex flex-col items-center justify-center">
        <Entitled>Solutions that Docufy Corevo Offers</Entitled>
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
