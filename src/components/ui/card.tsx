import type { JSX } from "solid-js";

type CardProps = JSX.HTMLAttributes<HTMLDivElement>;
type CardHeaderProps = JSX.HTMLAttributes<HTMLDivElement>;
type CardTitleProps = JSX.HTMLAttributes<HTMLHeadingElement>;
type CardDescriptionProps = JSX.HTMLAttributes<HTMLParagraphElement>;
type CardContentProps = JSX.HTMLAttributes<HTMLDivElement>;
type CardFooterProps = JSX.HTMLAttributes<HTMLDivElement>;

export function Card(props: CardProps) {
  return (
    <div
      class="rounded-lg border bg-card text-card-foreground shadow-sm"
      classList={{ [props.class ?? ""]: !!props.class }}
    >
      {props.children}
    </div>
  );
}

export function CardHeader(props: CardHeaderProps) {
  return (
    <div
      class="flex flex-col space-y-1.5 p-6"
      classList={{ [props.class ?? ""]: !!props.class }}
    >
      {props.children}
    </div>
  );
}

export function CardTitle(props: CardTitleProps) {
  return (
    <h3
      class="text-2xl font-semibold leading-none tracking-tight"
      classList={{ [props.class ?? ""]: !!props.class }}
    >
      {props.children}
    </h3>
  );
}

export function CardDescription(props: CardDescriptionProps) {
  return (
    <p
      class="text-sm text-muted-foreground"
      classList={{ [props.class ?? ""]: !!props.class }}
    >
      {props.children}
    </p>
  );
}

export function CardContent(props: CardContentProps) {
  return (
    <div class="p-6 pt-0" classList={{ [props.class ?? ""]: !!props.class }}>
      {props.children}
    </div>
  );
}

export function CardFooter(props: CardFooterProps) {
  return (
    <div
      class="flex items-center p-6 pt-0"
      classList={{ [props.class ?? ""]: !!props.class }}
    >
      {props.children}
    </div>
  );
}
