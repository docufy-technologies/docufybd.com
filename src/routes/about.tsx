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
      <section class="h-[50dvh] w-full flex justify-center items-center flex-col gap-4 pt-30">
        <h1 class="text-center tracking-wider">About The Company</h1>
        {/*tagline*/}
        <span class="text-center text-sm sm:text-lg uppercase tracking-widest text-accent">
          work you can trust
        </span>
        {/*gmt+6 time*/}
        <span class="text-center text-sm max-sm:w-[75%] tracking-wider font-light">
          You landed on{" "}
          <span class="border-b border-accent font-normal">
            {getGMT6Time()}
          </span>{" "}
          according to our local time!
        </span>
      </section>

      {/*what we do, who we are*/}
      <section class="max-w-3xl sm:py-20 h-fit mx-auto flex flex-col gap-8 items-center justify-center">
        <div class="flex flex-col items-center justify-center sm:grid sm:grid-cols-3 gap-4 w-full pt-10">
          <span class="uppercase font-bold h-full sm:mt-1 text-center text-accent">
            who we are
          </span>
          <span class="sm:text-xl max-sm:text-center col-span-2 font-light max-sm:px-4">
            Docufy is a business solutions provider. Through our specialized
            subsidiaries, Docs by Docufy,{" "}
            <a
              href="https://tech.docufybd.com"
              target="_blank"
              rel="noopener noreferrer"
              class="border-b border-accent"
            >
              Docufy Tech
            </a>
            , and{" "}
            <a
              href="https://fiscal.docufybd.com"
              target="_blank"
              rel="noopener noreferrer"
              class="border-b border-accent"
            >
              Docufy Fiscal
            </a>
            , we deliver documentation, technology, and fiscal solutions to
            businesses and organizations who expect concrete results in every
            project, backed by a reliable partner to fulfill their needs with
            structure, clear communication, and accountability.
          </span>
        </div>
        <div class="flex flex-col sm:grid sm:grid-cols-3 gap-4 w-full pt-10">
          <span class="uppercase h-full sm:mt-1 text-center font-bold text-accent">
            what we do
          </span>
          <span class="sm:text-xl max-sm:text-center col-span-2 font-light max-sm:px-4">
            We work through research and understanding, not templates. Every
            engagement starts with understanding the problem, defining the
            outcome, and engineering the solution to match. Our focus is helping
            you accomplish your goals, not chasing what's trendy.
          </span>
        </div>
      </section>

      {/*team section*/}
      <section class="py-30 flex flex-col gap-12 justify-center items-center">
        <h1 class="text-center text-accent max-sm:text-2xl">
          Meet Our Core Members
        </h1>
        <TeamShowcaseDesktop />
        <TeamShowcaseMobile />
      </section>

      {/*cta*/}
      <section class="pb-30 pt-10 flex flex-col gap-14 justify-center items-center">
        <Quoted
          text="We are committed to delivering work you can trust, built on
        research, understanding, and accountability."
        />
        <AnimatedButton variant="accent">
          <a
            href="https://calendly.com/docufy-bd/30min"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full h-full flex justify-center items-center"
          >
            Schedule A Meeting Now
          </a>
        </AnimatedButton>
      </section>
    </>
  );
}
