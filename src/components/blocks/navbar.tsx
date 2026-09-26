import { IconMenu2, IconX } from "@tabler/icons-solidjs";
import { Link, type LinkProps } from "@tanstack/solid-router";
import { createSignal, For, type JSX } from "solid-js";
import { navLinks } from "@/constants";
import AnimatedButton from "../ui/animated-button";

function NavTab(props: {
  children: JSX.Element;
  class?: string;
  to: LinkProps["to"];
  onClick?: () => void;
}) {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      props.onClick?.();
    }
  };

  return (
    <Link to={props.to}>
      <li
        onClick={props.onClick}
        onKeyDown={handleKeyDown}
        class="relative z-10 block cursor-pointer px-3 py-1.5 text-base! md:text-sm rounded-full hover:bg-secondary"
        classList={{ [props.class ?? ""]: !!props.class }}
      >
        {props.children}
      </li>
    </Link>
  );
}

function NavTabMobile(props: {
  children: JSX.Element;
  to: LinkProps["to"];
  onClick?: () => void;
}) {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      props.onClick?.();
    }
  };

  return (
    <Link to={props.to}>
      <li
        onClick={props.onClick}
        onKeyDown={handleKeyDown}
        class="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
      >
        {props.children}
      </li>
    </Link>
  );
}

const ContactUsCTA = () => (
  <a
    href="mailto:info@docufybd.com"
    class="px-4 rounded-4xl hover:bg-secondary h-9 flex items-center justify-center transition-all duration-300 ease-in-out text-sm"
  >
    Contact Us
  </a>
);

const BookMeetingCTA = () => (
  <AnimatedButton variant="foreground">
    <a
      href="https://calendly.com/docufy-bd/30min"
      target="_blank"
      rel="noopener noreferrer"
      class="w-full h-full flex justify-center items-center"
    >
      Book A Call Now
    </a>
  </AnimatedButton>
);

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = createSignal(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav class="fixed top-0 left-0 z-100 flex w-full items-center justify-between px-12 py-6 max-sm:px-8">
      {/* Logo */}
      <Link to="/" class="flex shrink-0 items-center" onClick={closeMobileMenu}>
        <img src="/logo.png" alt="Docufy" class="h-8 object-contain" />
      </Link>

      {/* Center nav links - Desktop */}
      <ul class="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full bg-transparent px-2 py-1 md:flex">
        <For each={navLinks}>
          {(l) => (
            <NavTab to={l.to} onClick={closeMobileMenu}>
              {l.label}
            </NavTab>
          )}
        </For>
      </ul>

      {/* Right side actions - Desktop */}
      <div class="flex shrink-0 items-center gap-3 md:flex max-sm:hidden">
        <ContactUsCTA />
        <BookMeetingCTA />
      </div>

      {/* Mobile menu button */}
      <button
        type="button"
        class="md:hidden p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
        onClick={toggleMobileMenu}
        aria-expanded={isMobileMenuOpen()}
        aria-controls="mobile-menu"
        aria-label={isMobileMenuOpen() ? "Close menu" : "Open menu"}
      >
        {isMobileMenuOpen() ? (
          <IconX class="size-6" aria-hidden="true" />
        ) : (
          <IconMenu2 class="size-6" aria-hidden="true" />
        )}
      </button>

      {/* Mobile menu panel */}
      <button
        id="mobile-menu"
        type="button"
        class="fixed inset-0 z-99 md:hidden transition-opacity duration-300"
        classList={{
          "opacity-100 pointer-events-auto": isMobileMenuOpen(),
          "opacity-0 pointer-events-none": !isMobileMenuOpen(),
        }}
        onClick={closeMobileMenu}
        onKeyDown={(e) => e.key === "Escape" && closeMobileMenu()}
        aria-hidden={!isMobileMenuOpen()}
      >
        <div class="absolute right-0 top-0 h-full w-full max-w-sm bg-background/90 backdrop-blur-2xl shadow-xl border-l border-secondary flex flex-col">
          <div class="flex flex-col items-start px-6 py-16 gap-6">
            <For each={navLinks}>
              {(l) => (
                <NavTabMobile to={l.to} onClick={closeMobileMenu}>
                  {l.label}
                </NavTabMobile>
              )}
            </For>
            <div class="flex flex-col gap-3 w-full pt-4 border-t border-secondary">
              <ContactUsCTA />
              <BookMeetingCTA />
            </div>
          </div>
        </div>
      </button>
    </nav>
  );
}

export default NavBar;
