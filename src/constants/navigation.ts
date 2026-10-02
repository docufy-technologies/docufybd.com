import type { LinkProps } from "@tanstack/solid-router";

export const navLinks = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Concerns",
    to: "/concerns",
  },
  {
    label: "FAQs",
    to: "/faq",
  },
] satisfies readonly {
  label: string;
  to: LinkProps["to"];
}[];
