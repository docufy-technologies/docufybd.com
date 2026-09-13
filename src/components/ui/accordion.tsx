import type { JSX } from "solid-js";

import { IconChevronDown } from "@tabler/icons-solidjs";

export function Accordion(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div class={`space-y-2 ${props.class || ""}`.trim()}>{props.children}</div>
  );
}

export function AccordionItem(
  props: JSX.HTMLAttributes<HTMLDetailsElement> & { open?: boolean },
) {
  return (
    <details
      open={props.open}
      class={`group border-b border-border ${props.class || ""}`.trim()}
    >
      {props.children}
    </details>
  );
}

export function AccordionTrigger(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <summary
      class={`flex cursor-pointer list-none items-center justify-between py-4 text-left font-semibold transition-all hover:underline [&::-webkit-details-marker]:hidden ${props.class || ""}`.trim()}
    >
      <span>{props.children}</span>
      <IconChevronDown
        width={16}
        height={16}
        strokeWidth={2}
        class="ml-3 shrink-0 opacity-60 transition-transform duration-200 group-open:rotate-180"
        aria-hidden="true"
      />
    </summary>
  );
}

export function AccordionContent(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      class={`overflow-hidden pb-4 pt-0 text-sm ${props.class || ""}`.trim()}
    >
      {props.children}
    </div>
  );
}
