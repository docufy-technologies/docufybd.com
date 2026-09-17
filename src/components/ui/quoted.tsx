import { cn } from "@/lib/utils";
import { IconQuote, IconQuoteOpen } from "@tabler/icons-solidjs";

export function Quoted({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div
      class={cn(
        "relative mx-auto flex w-[min(40rem,90dvw)] flex-col justify-between gap-y-6 px-4 py-1 sm:py-8 text-center font-regular text-lg sm:text-3xl",
        className,
      )}
    >
      <IconQuoteOpen
        class="absolute -top-3 sm:-top-1 -left-1.5 sm:-left-1 z-1 size-6 text-accent fill-accent"
        stroke-width={1}
      />
      <IconQuote
        class="absolute -right-1.5 sm:-right-1.5 -bottom-3 sm:-bottom-1 z-1 size-6 text-accent fill-accent"
        stroke-width={1}
      />
      {text}
    </div>
  );
}
