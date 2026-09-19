import { createFileRoute } from "@tanstack/solid-router";
import {
  TeamShowcaseDesktop,
  TeamShowcaseMobile,
} from "@/components/blocks/team-showcase";
import AnimatedButton from "@/components/ui/animated-button";
import { Quoted } from "@/components/ui/quoted";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function getGMT6Time() {
  const now = new Date();
  const gmt6Date = new Date(now.getTime() + 6 * 3600000);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[gmt6Date.getUTCMonth()];
  const day = String(gmt6Date.getUTCDate()).padStart(2, "0");
  const year = gmt6Date.getUTCFullYear();
  const hours = String(gmt6Date.getUTCHours()).padStart(2, "0");
  const minutes = String(gmt6Date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(gmt6Date.getUTCSeconds()).padStart(2, "0");

  return `${month} ${day}, ${year}, ${hours}:${minutes}:${seconds}`;
}

function RouteComponent() {
  return (
    <>
      <section class="w-full flex justify-center items-center flex-col gap-4 pt-30">
        <h1 class="text-center tracking-wider">About Docufy</h1>
        <span class="text-center text-sm sm:text-lg uppercase tracking-widest text-accent">
          work you can trust
        </span>
        <span class="text-center text-sm max-sm:w-[75%] tracking-wider font-light">
          You landed on{" "}
          <span class="border-b border-accent font-normal">
            {getGMT6Time()}
          </span>{" "}
          according to our local time
        </span>
      </section>

      <section class="max-w-3xl sm:py-20 h-fit mx-auto flex flex-col gap-8 items-center justify-center">
        <div class="flex flex-col items-center justify-center sm:grid sm:grid-cols-3 gap-4 w-full pt-10">
          <span class="uppercase font-bold h-full sm:mt-1 text-center text-accent">
            who we are
          </span>
          <span class="sm:text-xl max-sm:text-center col-span-2 font-light max-sm:px-4">
            Docufy runs three specialized units: Docs by Docufy for
            documentation,{" "}
            <a
              href="https://tech.docufybd.com"
              target="_blank"
              rel="noopener noreferrer"
              class="border-b border-accent"
            >
              Docufy Tech
            </a>{" "}
            for technology, and{" "}
            <a
              href="https://fiscal.docufybd.com"
              target="_blank"
              rel="noopener noreferrer"
              class="border-b border-accent"
            >
              Docufy Fiscal
            </a>{" "}
            for finance. We work with companies that need real outcomes, not
            slide decks. Every project ships with structure, clear
            communication, and someone actually accountable.
          </span>
        </div>
        <div class="flex flex-col sm:grid sm:grid-cols-3 gap-4 w-full pt-10">
          <span class="uppercase h-full sm:mt-1 text-center font-bold text-accent">
            what we do
          </span>
          <span class="sm:text-xl max-sm:text-center col-span-2 font-light max-sm:px-4">
            We start with research, not templates. As the first move, we
            understand the problem, then define the outcome, then build the
            solution. You get what you need to achieve your goals. Nothing
            trendy, nothing extra, nothing irrelevant.
          </span>
        </div>
      </section>

      <section class="py-30 flex flex-col gap-12 justify-center items-center">
        <h1 class="text-center text-accent max-sm:text-2xl">
          Meet Our Core Members
        </h1>
        <TeamShowcaseDesktop />
        <TeamShowcaseMobile />
      </section>

      <section class="pb-30 pt-10 flex flex-col gap-14 justify-center items-center">
        <Quoted
          text="We deliver work you can trust. Built on research, understanding,
        and accountability."
        />
        <AnimatedButton variant="accent">
          <a
            href="https://calendly.com/docufy-bd/30min"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full h-full flex justify-center items-center"
          >
            Schedule A Meeting
          </a>
        </AnimatedButton>
      </section>
    </>
  );
}
