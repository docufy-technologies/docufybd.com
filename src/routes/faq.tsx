import { createFileRoute } from "@tanstack/solid-router";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/constants";

export const Route = createFileRoute("/faq")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section class="mx-auto max-w-4xl px-6 py-30 mt-10">
      <div class="mb-10 max-w-3xl">
        <h1>Frequently Asked Questions</h1>
        <p class="mt-4 text-lg">
          Clear answers on pricing, support, compliance, and platform features.
        </p>
      </div>

      <div class="space-y-10">
        {faqItems.map((section) => (
          <div class="space-y-4">
            <h2 class="text-accent">{section.category}</h2>
            <Accordion>
              {section.questionnaire.map((item) => (
                <AccordionItem>
                  <AccordionTrigger class="text-base sm:text-lg hover:no-underline hover:text-primary font-body">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p class="text-base sm:text-lg text-muted-foreground">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>

      <p class="mt-12 text-base sm:text-lg text-muted-foreground">
        Need a tailored quote? Reach us at{" "}
        <a
          href="mailto:info@tech.docufybd.com"
          class="underline underline-offset-3"
        >
          info@tech.docufybd.com
        </a>{" "}
        .
      </p>
    </section>
  );
}
