import { IconPlus as PlusIcon } from "@tabler/icons-solidjs";
import { createFileRoute } from "@tanstack/solid-router";
import { For, type JSX } from "solid-js";
import Testimonial from "@/components/blocks/testimonial";
import AnimatedButton from "@/components/ui/animated-button";
import Timeline from "@/components/ui/timeline";
import { reasons, testimonials, workProcessSteps } from "@/constants";
export const Route = createFileRoute("/")({ component: Home });

function BracketContainer(props: { children: JSX.Element }) {
  return (
    <div class="relative mx-auto flex max-w-3xl w-full flex-col gap-8 justify-between border-y bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)] px-16 max-sm:px-4 py-8">
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
      <section class="w-dvw h-dvh flex items-center justify-center text-center px-16 max-sm:px-8 flex-col gap-12 max-sm:pt-12">
        <BracketContainer>
          <p class="text-foreground/90 text-sm capitalize">Docufy delivers</p>
          <h1 class="lg:text-6xl text-3xl capitalize leading-none">
            Work You Can <span class="italic text-accent">Trust</span>
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

      <section class="w-full px-4 pt-8 pb-24">
        <div class="max-w-5xl mx-auto">
          <h1 class="capitalize text-center pb-16">Why choose Docufy?</h1>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <For each={reasons}>
              {(reason, i) => (
                <div class="border p-6 flex flex-col justify-start items-start gap-8 transition-colors hover:border-border">
                  <h1 class="md:text-5xl text-accent">{i() + 1}</h1>
                  <span class="text-2xl leading-snug">{reason}</span>
                </div>
              )}
            </For>
          </div>
        </div>
      </section>

      <section class="w-full px-4 py-24">
        <div class="mx-auto max-w-6xl">
          <div class="w-full pb-16 text-center max-w-2xl mx-auto">
            <h1 class="capitalize pb-8 max-sm:px-6">Work Process of Docufy</h1>
            <p class="text-base leading-relaxed text-foreground/80 max-sm:px-6">
              From first message to final copy, a clear path with updates at
              each stage. No guesswork about what happens next.
            </p>
          </div>
          <Timeline items={workProcessSteps} />
        </div>
      </section>

      <section class="w-full px-4 py-24">
        <h1 class="text-center capitalize pb-8">What Folks Say About Docufy</h1>
        <For each={testimonials}>
          {(testimonial) => (
            <div class="max-w-3xl mx-auto px-4 py-8">
              <Testimonial
                quote={testimonial.quote}
                name={testimonial.name}
                designation={testimonial.designation}
                rightward={true}
              />
            </div>
          )}
        </For>
      </section>

      <section class="w-full px-16 py-32">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-center leading-tight font-body mb-8">
            Add a why to your worries. Let Docufy handle them.
          </h2>
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
