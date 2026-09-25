import { createSignal, For, onCleanup, onMount } from "solid-js";

export interface TimelineItemProps {
  label: string;
  title: string;
  description: string;
  class?: string;
}

export interface TimelineProps {
  items: TimelineItemProps[];
  class?: string;
}

function TimelineItem(props: TimelineItemProps & { index: number }) {
  const isEven = props.index % 2 === 0;

  return (
    <div
      class="relative grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-0"
      classList={{ [props.class ?? ""]: !!props.class }}
    >
      {/* Text side */}
      <div
        class="z-10 flex flex-col justify-center p-0 md:p-8"
        classList={{
          "md:items-end md:text-right": isEven,
          "md:order-2": !isEven,
        }}
      >
        <div class="flex flex-col gap-3">
          <div class="space-y-2">
            <p class="text-xs text-muted-foreground font-normal">
              ({props.label})
            </p>
            <h2 class="tracking-tight text-foreground">{props.title}</h2>
          </div>
          <p class="text-base leading-relaxed text-foreground/60">
            {props.description}
          </p>
        </div>
      </div>

      {/* Empty side — keeps the alternating timeline rhythm */}
      <div
        aria-hidden="true"
        class="hidden md:block"
        classList={{ "md:order-2": isEven }}
      />
    </div>
  );
}

export function Timeline(props: TimelineProps) {
  let containerRef: HTMLDivElement | undefined;
  const [progress, setProgress] = createSignal(0);

  onMount(() => {
    const update = () => {
      if (!containerRef) return;
      const rect = containerRef.getBoundingClientRect();
      const viewportCenter = window.innerHeight * 0.5;
      const total = rect.height;
      if (total <= 0) return;
      const passed = viewportCenter - rect.top;
      const p = Math.min(1, Math.max(0, passed / total));
      setProgress(p);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    onCleanup(() => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    });
  });

  return (
    <div
      ref={containerRef}
      class="relative"
      classList={{ [props.class ?? ""]: !!props.class }}
    >
      {/* Base line */}
      <div class="absolute top-0 bottom-0 left-4 w-px bg-border md:left-1/2 md:-translate-x-1/2" />
      {/* Progress line */}
      <div class="absolute top-0 bottom-0 left-4 w-px md:left-1/2 md:-translate-x-1/2">
        <div
          class="absolute inset-0 w-full origin-top bg-foreground"
          style={{ transform: `scaleY(${progress()})` }}
        />
        <div
          class="absolute z-30 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground md:block"
          style={{ top: `${progress() * 100}%`, left: "50%" }}
        />
      </div>

      <div class="flex flex-col gap-12 py-4 pl-10 md:gap-0 md:py-0 md:pl-0">
        <For each={props.items}>
          {(item, i) => <TimelineItem {...item} index={i()} />}
        </For>
      </div>
    </div>
  );
}

export default Timeline;
