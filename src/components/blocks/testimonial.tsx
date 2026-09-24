export default function Testimonial(props: {
  quote: string;
  name: string;
  designation: string;
  rightward?: boolean;
}) {
  const alignRight = !!props.rightward;
  return (
    <div
      class="flex flex-col gap-6"
      classList={{ "items-end": alignRight, "items-start": !alignRight }}
    >
      <p class="font-heading text-3xl text-foreground">
        <span class="text-muted-foreground">&ldquo;</span>
        {props.quote}
        <span class="text-muted-foreground">&rdquo;</span>
      </p>

      <div class="flex items-center gap-3">
        <div
          class="h-px w-8 bg-foreground"
          classList={{ "ml-4": !alignRight }}
        />
        <p classList={{ "mr-8": alignRight }}>
          <span class="text-accent font-semibold">{props.name}</span>
          <span class="text-muted-foreground">, {props.designation}</span>
        </p>
      </div>
    </div>
  );
}
