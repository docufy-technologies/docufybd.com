import { createFileRoute } from "@tanstack/solid-router";
import type { JSXElement } from "solid-js";

export const Route = createFileRoute("/concerns")({
  component: RouteComponent,
});

function ConcernLink(props: { href: string; children: JSXElement }) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      class="size-full bg-muted/75 p-12 border hover:bg-muted/30 backdrop-blur-2xl hover:border-accent flex items-center justify-center"
    >
      {props.children}
    </a>
  );
}

function RouteComponent() {
  return (
    <section class="py-12 md:py-20 max-sm:mt-20">
      <div class="mx-auto py-20 max-w-4xl space-y-8 gap-12 px-6 text-center flex flex-col items-center justify-center">
        <p class="text-center md:text-lg max-w-3xl font-medium text-foreground [&>a]:font-heading [&>a]:text-accent [&>a]:italic [&>a]:hover:underline [&>a]:underline-offset-4">
          Docufy helps businesses and individuals through three services
          subsidiaries:{" "}
          <a
            href="https://docufybd.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Docufy Covero
          </a>
          ,{" "}
          <a
            href="https://tech.docufybd.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Docufy Tech
          </a>
          , and{" "}
          <a
            href="https://fiscal.docufybd.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Docufy Fiscal
          </a>
          . Each of these subsidiaries is designed to address specific
          challenges in document management, providing tailored solutions that
          enhance productivity and organization.
        </p>

        <div class="flex flex-col gap-6 w-full">
          <div class="text-center w-full flex flex-col items-center justify-center gap-4">
            <h1>Concerns of Docufy</h1>
            <small class="text-muted-foreground">
              Click to See What Solutions They Offer
            </small>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
            <ConcernLink href="https://tech.docufybd.com/solutions">
              <img
                src="https://tech.docufybd.com/logo512.png"
                alt="Docufy Tech Logo"
                class="object-contain mx-auto h-4"
              />
            </ConcernLink>
            <ConcernLink href="https://fiscal.docufybd.com/solutions">
              <h3>[Docufy Fiscal Logo]</h3>
            </ConcernLink>
            <ConcernLink href="/docufy-covero-solutions">
              <img
                src="/logo.png"
                alt="Docufy Tech Logo"
                class="object-contain h-8 mx-auto"
              />
            </ConcernLink>
          </div>
        </div>
      </div>
    </section>
  );
}
