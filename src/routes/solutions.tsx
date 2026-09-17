import { createFileRoute } from "@tanstack/solid-router";
import { createSignal, For, type JSX } from "solid-js";
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

function RouteComponent() {
  const [activeTab, setActiveTab] = createSignal<"tech" | "fiscal" | "docs">(
    "tech",
  );

  const tabs = [
    { key: "tech" as const, label: "Docufy Tech" },
    { key: "fiscal" as const, label: "Docufy Fiscal" },
    { key: "docs" as const, label: "Docs by Docufy" },
  ];

  return (
    <section class="py-12 md:py-20 mt-10 max-sm:mt-20">
      <div class="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 class="capitalize leading-relaxed tracking-wider text-center">
          The Smart Solutions Docufy Offers
        </h2>

        <div class="flex justify-center gap-2">
          <For each={tabs}>
            {(tab) => (
              <button
                type="button"
                class={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab() === tab.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            )}
          </For>
        </div>

        <div class="relative mx-auto grid max-w-6xl *:p-12 sm:grid-cols-2 lg:grid-cols-3 backdrop-blur-xl overflow-hidden gap-2">
          {activeTab() === "tech" && (
            <For each={techSolutions}>
              {(s) => (
                <SolutionsCardCustom
                  title={s.title}
                  description={s.description}
                  icon={s.icon}
                />
              )}
            </For>
          )}
          {activeTab() === "fiscal" && (
            <For each={fiscalSolutions}>
              {(s) => (
                <SolutionsCardCustom
                  title={s.title}
                  description={s.description}
                  icon={s.icon}
                />
              )}
            </For>
          )}
          {activeTab() === "docs" && (
            <For each={docsSolutions}>
              {(s) => (
                <SolutionsCardCustom
                  title={s.title}
                  description={s.description}
                  icon={s.icon}
                />
              )}
            </For>
          )}
        </div>
      </div>
    </section>
  );
}
