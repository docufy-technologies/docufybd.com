import { createFileRoute } from "@tanstack/solid-router";
import { IconPlus as PlusIcon } from "@tabler/icons-solidjs";
import { For, type JSX } from "solid-js";
import { reasons } from "@/constants";
import AnimatedButton from "@/components/ui/animated-button";
export const Route = createFileRoute("/")({ component: Home });

function BracketContainer(props: { children: JSX.Element }) {
  return (
    <div class="relative mx-auto flex w-full flex-col gap-8 justify-between border-y bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)] px-16 py-8">
      <PlusIcon
        class="absolute left-[-11.5px] top-[-12.5px] z-1 size-6"
        stroke-width={1}
      />
      <PlusIcon
        class="absolute right-[-11.5px] top-[-12.5px] z-1 size-6"
        stroke-width={1}
      />
      <PlusIcon
        class="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6"
        stroke-width={1}
      />
      <PlusIcon
        class="absolute bottom-[-12.5px] right-[-11.5px] z-1 size-6"
        stroke-width={1}
      />
      <div class="pointer-events-none absolute -inset-y-6 left-0 w-px border-l" />
      <div class="pointer-events-none absolute -inset-y-6 right-0 w-px border-r" />
      {props.children}
    </div>
  );
}
function Home() {
  return (
    <>
      <section class="w-dvw h-dvh flex items-center justify-center text-center">
        <div class="max-w-4xl w-[90dvw] h-[60dvh] bg-transparent backdrop-blur-xl flex flex-col gap-12 items-center justify-center p-16 md:p-32">
          <BracketContainer>
            <p class="text-foreground/90 text-sm">Docufy provides</p>
            <h1 class="lg:text-6xl capitalize leading-none">
              Work You Can <span class="italic">Trust</span>
            </h1>
            <span class="text-foreground/90">
              At Docufy, we are committed to delivering high-quality services
              that you can rely on. Our team of experts works diligently to
              ensure that every project meets the highest standards of
              excellence.
            </span>
          </BracketContainer>
        </div>
      </section>

      <section class="w-full px-6 py-24 md:py-32 bg-background">
        <div class="max-w-6xl mx-auto">
          <div class="max-w-2xl mb-12 md:mb-16">
            <span class="text-3xl md:text-4xl lg:text-5xl leading-tight">
              Why choose Docufy?
            </span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <For each={reasons}>
              {(reason) => (
                <div class="bg-card p-6 md:p-8 flex flex-col justify-between min-h-55 transition-colors hover:border-border">
                  <h2 class="leading-snug">{reason}</h2>
                </div>
              )}
            </For>
          </div>
        </div>
      </section>

      <section class="w-full px-6 py-24 md:py-32 bg-background">
        <div class="max-w-2xl mx-auto">
          <h1 class="text-center font-medium text-3xl md:text-5xl font-heading mb-8">
            One less thing to worry. Let Docufy Tech handle it for you.
          </h1>
          <div class="flex gap-6 justify-center items-center max-sm:flex-col max-w-sm mx-auto">
            <AnimatedButton variant="accent" class="w-full">
              <a
                href={`mailto:info@tech.docufybd.com`}
                target="_blank"
                rel="noopener noreferrer"
                class="w-full h-full flex justify-center items-center"
              >
                Request A Quote
              </a>
            </AnimatedButton>
            <AnimatedButton variant="outline" class="w-full">
              <a
                href="https://calendly.com/docufy-bd/30min"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full h-full flex justify-center items-center"
              >
                Book a Consultation
              </a>
            </AnimatedButton>
          </div>
        </div>
      </section>
    </>
  );
}
