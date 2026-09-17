import type { JSX } from "solid-js";
import { createSignal, onCleanup, onMount } from "solid-js";
import { cn } from "@/lib/utils";

type AnimatedButtonVariant =
  | "default"
  | "outline"
  | "secondary"
  | "ghost"
  | "destructive"
  | "accent"
  | "link";

type AnimatedButtonSize =
  | "default"
  | "xs"
  | "sm"
  | "lg"
  | "icon"
  | "icon-xs"
  | "icon-sm"
  | "icon-lg";

type AnimatedButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: JSX.Element;
  variant?: AnimatedButtonVariant;
  size?: AnimatedButtonSize;
};

const variantClasses: Record<AnimatedButtonVariant, string> = {
  default: "bg-primary text-primary-foreground",
  outline: "bg-background text-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  ghost: "bg-transparent text-foreground",
  destructive: "bg-destructive/10 text-destructive",
  accent: "bg-accent text-accent-foreground",
  link: "bg-transparent text-primary",
};

const sizeClasses: Record<AnimatedButtonSize, string> = {
  default:
    "h-9 gap-1.5 px-3 text-sm has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
  xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
  sm: "h-8 gap-1 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
  lg: "h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
  icon: "size-9",
  "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
  "icon-sm": "size-8",
  "icon-lg": "size-10",
};

export function AnimatedButton(props: AnimatedButtonProps) {
  const {
    variant = "default",
    size = "default",
    children = "Browse Components",
    class: className,
    ...rest
  } = props;

  const [pressed, setPressed] = createSignal(false);

  let textRef: HTMLSpanElement | undefined;

  onMount(() => {
    let frameId: number;
    let maskX = 100;

    const animateText = () => {
      maskX -= 1.1;
      if (maskX < -100) {
        maskX = 100;
      }
      if (textRef) {
        textRef.style.setProperty("--mask-x", `${maskX}%`);
      }
      frameId = requestAnimationFrame(animateText);
    };

    frameId = requestAnimationFrame(animateText);

    onCleanup(() => cancelAnimationFrame(frameId));
  });

  return (
    <button
      type="button"
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      style={{
        transform: pressed() ? "scale(0.97)" : "scale(1)",
        transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
      class={cn(
        "group inline-flex items-center justify-center rounded-4xl relative overflow-hidden border border-secondary cursor-pointer text-sm",
        "font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50",
        "[--shine:rgba(0,0,0,.66)] dark:[--shine:rgba(255,255,255,.66)]",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...rest}
    >
      {/* Text with shine mask - animated via rAF */}
      <span
        ref={textRef}
        class="tracking-wide flex items-center justify-center h-full w-full relative z-10"
        style={{
          "--mask-x": "100%",
          "mask-image":
            "linear-gradient(-75deg, white calc(var(--mask-x) + 20%), transparent calc(var(--mask-x) + 30%), white calc(var(--mask-x) + 100%))",
          "-webkit-mask-image":
            "linear-gradient(-75deg, white calc(var(--mask-x) + 20%), transparent calc(var(--mask-x) + 30%), white calc(var(--mask-x) + 100%))",
        }}
      >
        {children}
      </span>

      {/* Border shine effect */}
      <span
        class="block absolute inset-0 rounded-4xl p-px pointer-events-none"
        style={{
          background:
            "linear-gradient(-75deg, transparent 30%, var(--shine) 50%, transparent 70%)",
          "background-size": "200% 100%",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          "mask-composite": "exclude",
          "-webkit-mask":
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          "-webkit-mask-composite": "xor",
          animation: "btn-border-shine 2s linear infinite",
        }}
      />

      <style>{`
        @keyframes btn-border-shine {
          0% { background-position: 100% 0; opacity: 0; }
          50% { opacity: 1; }
          100% { background-position: 0% 0; opacity: 0; }
        }
      `}</style>
    </button>
  );
}

export default AnimatedButton;
