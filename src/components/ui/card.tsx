import type { JSX } from "solid-js";

import { cn } from "@/lib/utils";

type CardProps = JSX.HTMLAttributes<HTMLDivElement>;
type CardHeaderProps = JSX.HTMLAttributes<HTMLDivElement>;
type CardTitleProps = JSX.HTMLAttributes<HTMLHeadingElement>;
type CardDescriptionProps = JSX.HTMLAttributes<HTMLParagraphElement>;
type CardContentProps = JSX.HTMLAttributes<HTMLDivElement>;
type CardFooterProps = JSX.HTMLAttributes<HTMLDivElement>;

export function Card({ class: className, ...props }: CardProps) {
  return (
    <div
      class={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({ class: className, ...props }: CardHeaderProps) {
  return (
    <div class={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  );
}

export function CardTitle({ class: className, ...props }: CardTitleProps) {
  return (
    <h3
      class={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

export function CardDescription({
  class: className,
  ...props
}: CardDescriptionProps) {
  return (
    <p class={cn("text-sm text-muted-foreground", className)} {...props} />
  );
}

export function CardContent({ class: className, ...props }: CardContentProps) {
  return <div class={cn("p-6 pt-0", className)} {...props} />;
}

export function CardFooter({ class: className, ...props }: CardFooterProps) {
  return <div class={cn("flex items-center p-6 pt-0", className)} {...props} />;
}
