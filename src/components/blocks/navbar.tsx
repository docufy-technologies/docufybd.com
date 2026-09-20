import { IconMenu2, IconX } from "@tabler/icons-solidjs";
import { Link, type LinkProps } from "@tanstack/solid-router";
import { createSignal, type JSX } from "solid-js";

type Position = {
  left: number;
  width: number;
  opacity: number;
};

function NavBar() {
  const [position, setPosition] = createSignal<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = createSignal(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav class="fixed top-0 left-0 z-100 flex w-full items-center justify-between px-12 py-6 max-sm:px-4">
      {/* Logo */}
      <Link to="/" class="flex shrink-0 items-center" onClick={closeMobileMenu}>
        <img src="/logo.png" alt="Docufy" class="h-8 object-contain" />
      </Link>

      {/* Center nav links - Desktop */}
      <ul
        class="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border-2 border-secondary bg-transparent px-2 py-1 md:flex"
        onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      >
        <NavTab setPosition={setPosition} to="/" onClick={closeMobileMenu}>
          Home
        </NavTab>
        <NavTab setPosition={setPosition} to="/about" onClick={closeMobileMenu}>
          About
        </NavTab>
        <NavTab
          setPosition={setPosition}
          to="/solutions"
          onClick={closeMobileMenu}
        >
          Solutions
        </NavTab>
        <NavTab setPosition={setPosition} to="/faq" onClick={closeMobileMenu}>
          FAQs
        </NavTab>

        <Cursor position={position} />
      </ul>

      {/* Right side actions - Desktop */}
      <div class="flex shrink-0 items-center gap-3 md:flex">
        <a
          href="mailto:info@docufybd.com"
          class="rounded-full px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors max-sm:hidden"
        >
          Contact Us
        </a>
        <a
          href="https://calendly.com/docufy-bd/30min"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
        >
          Book a Meeting
        </a>
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
        <div class="absolute right-0 top-0 h-full w-full max-w-sm bg-background shadow-xl border-l border-secondary flex flex-col">
          <div class="flex flex-col items-start px-6 py-8 gap-6">
            <NavTabMobile to="/" onClick={closeMobileMenu}>
              Home
            </NavTabMobile>
            <NavTabMobile to="/about" onClick={closeMobileMenu}>
              About
            </NavTabMobile>
            <NavTabMobile to="/solutions" onClick={closeMobileMenu}>
              Solutions
            </NavTabMobile>
            <NavTabMobile to="/faq" onClick={closeMobileMenu}>
              FAQs
            </NavTabMobile>
            <div class="flex flex-col gap-3 w-full pt-4 border-t border-secondary">
              <a
                href="mailto:info@docufybd.com"
                class="rounded-full px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors text-center"
              >
                Contact Us
              </a>
              <a
                href="https://calendly.com/docufy-bd/30min"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
              >
                Book a Meeting
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </button>
    </nav>
  );
}

function NavTab(props: {
  children: JSX.Element;
  setPosition: (position: Position) => void;
  class?: string;
  to: LinkProps["to"];
  onClick?: () => void;
}) {
  let ref: HTMLLIElement | undefined;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      props.onClick?.();
    }
  };

  return (
    <Link to={props.to}>
      <li
        ref={ref}
        onMouseEnter={() => {
          if (!ref) return;
          const { width } = ref.getBoundingClientRect();
          props.setPosition({
            width,
            opacity: 1,
            left: ref.offsetLeft,
          });
        }}
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

function Cursor(props: { position: () => Position }) {
  return (
    <li
      class="absolute z-0 h-9 -translate-y-1/2 top-1/4 rounded-full bg-secondary transition-all duration-300 ease-out"
      style={{
        left: `${props.position().left}px`,
        width: `${props.position().width}px`,
        opacity: props.position().opacity,
      }}
    />
  );
}

export default NavBar;
