import { IconPlus as PlusIcon } from "@tabler/icons-solidjs";
import { createFileRoute } from "@tanstack/solid-router";
import { For, type JSX } from "solid-js";
import AnimatedButton from "@/components/ui/animated-button";
import { reasons } from "@/constants";
export const Route = createFileRoute("/")({ component: Home });

function BracketContainer(props: { children: JSX.Element }) {
  return (
    <div class="relative mx-auto flex max-w-3xl w-full flex-col gap-8 justify-between border-y bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)] px-16 py-8">
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
      <section class="w-dvw h-dvh flex items-center justify-center text-center px-16 flex-col gap-12">
        <BracketContainer>
          <p class="text-foreground/90 text-sm">Docufy delivers</p>
          <h1 class="lg:text-6xl capitalize leading-none">
            Work You Can <span class="italic">Trust</span>
          </h1>
          <span class="text-foreground/90">
            At Docufy, we are committed to delivering high-quality services that
            you can rely on. Our team of experts works diligently to ensure that
            every project meets the highest standards of excellence.
          </span>
        </BracketContainer>
        <div class="grid grid-cols-2 max-sm:flex max-sm:flex-col gap-4 w-full max-w-sm justify-center items-center">
          <AnimatedButton size="lg" variant="accent" class="w-full">
            <a
              href="https://calendly.com/docufy-bd/30min"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full h-full flex justify-center items-center"
            >
              Book A Call Now
            </a>
          </AnimatedButton>
          <AnimatedButton variant={"outline"} size={"lg"} class="w-full">
            <a
              href="mailto:info@tech.docufybd.com"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full h-full flex justify-center items-center"
            >
              Contact Team
            </a>
          </AnimatedButton>
        </div>
      </section>

      <section class="w-full px-16 py-16">
        <div class="max-w-6xl mx-auto">
          <div class="font-body leading-tight text-center text-3xl max-sm:text-2xl w-full pb-16">
            Why choose <span class="italic font-heading ">Docufy</span>?
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <For each={reasons}>
              {(reason, i) => (
                <div class="bg-card/75 p-6 flex flex-col justify-start items-start gap-8 transition-colors hover:border-border">
                  <h1 class="text-7xl">{i() + 1}</h1>
                  <span class="text-2xl leading-snug">{reason}</span>
                </div>
              )}
            </For>
          </div>
        </div>
      </section>

      <section class="w-full px-16 py-6 md:py-32">
        <div class="max-w-2xl mx-auto">
          <h1 class="text-center leading-tight font-medium text-3xl md:text-5xl mb-8">
            Add a why to your worries. Let Docufy handle them for you.
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
