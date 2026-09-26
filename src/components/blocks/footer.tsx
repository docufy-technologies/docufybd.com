import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-solidjs";
import { Link, type LinkProps } from "@tanstack/solid-router";

function FooterLink(props: { label: string; to: LinkProps["to"] }) {
  return (
    <Link
      to={props.to}
      class="text-muted-foreground hover:text-primary block duration-150"
    >
      {props.label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer class="pb-8">
      <div class="mx-auto max-w-4xl px-6">
        <div class="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
          <FooterLink label="Who We Are" to="/about" />
          <FooterLink label="Terms of Service" to="/terms-and-conditions" />
          <FooterLink label="Privacy Policy" to="/privacy-policy" />
        </div>
        <div class="my-5 flex flex-wrap justify-center gap-6 text-sm">
          <a
            href="https://x.com/docufybd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X/Twitter"
            class="text-muted-foreground hover:text-primary block"
          >
            <IconBrandX />
          </a>
          <a
            href="https://linkedin.com/company/docufybd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            class="text-muted-foreground hover:text-primary block"
          >
            <IconBrandLinkedin />
          </a>
          <a
            href="https://facebook.com/docufy.bd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            class="text-muted-foreground hover:text-primary block"
          >
            <IconBrandFacebook />
          </a>
          <a
            href="https://instagram.com/docufy_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            class="text-muted-foreground hover:text-primary block"
          >
            <IconBrandInstagram />
          </a>
          <a
            href="mailto:info@tech.docufybd.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            class="text-muted-foreground hover:text-primary block"
          >
            <IconMail />
          </a>
        </div>
        <p class="text-muted-foreground block text-center text-base">
          {" "}
          © {new Date().getFullYear()} <a href="https://docufybd.com">Docufy</a>
          , All rights reserved
        </p>
      </div>
    </footer>
  );
}
