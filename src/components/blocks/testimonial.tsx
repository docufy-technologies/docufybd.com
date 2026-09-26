export default function Testimonial(props: {
  quote: string;
  name: string;
  designation: string;
  rightward?: boolean;
}) {
  const alignRight = !!props.rightward;
  return (
    <div
      class="flex flex-col gap-6 max-sm:text-center max-sm:items-center"
      classList={{ "items-end": alignRight, "items-start": !alignRight }}
    >
      <p class="font-heading text-xl text-foreground">
        <span class="text-muted-foreground">&ldquo;</span>
        {props.quote}
        <span class="text-muted-foreground">&rdquo;</span>
      </p>

      <div class="flex max-sm:flex-col items-center gap-3">
        <div
          class="h-px w-8 bg-foreground"
          classList={{ "sm:ml-4": !alignRight }}
        />
        <p
          classList={{ "sm:mr-8": alignRight }}
          class="max-sm:flex max-sm:flex-col max-sm:text-center max-sm:items-center max-sm:justify-center max-sm:w-full"
        >
          <span class="text-accent font-semibold">{props.name}</span>
          <span class="text-muted-foreground">
            <span class="max-sm:hidden">,</span> {props.designation}
          </span>
        </p>
      </div>
    </div>
  );
}
