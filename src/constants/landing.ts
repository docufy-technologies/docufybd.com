export const reasons = [
  "Every project starts with the analysis, not a template.",
  "Our experts review each draft so that you can move your focus to the next.",
  "Each deliverable is tailored for your goal, not for our portfolio.",
] as const;

export const testimonials = [
  {
    quote:
      "Docufy captured our event agenda, vendor notes, and approvals into a clean event dossier we could share instantly.",
    name: "Labby Ahsan",
    designation: "Founder, Newspaper Olympiad",
  },
  {
    quote:
      "Docufy standardized our corporate and HR documentation, so compliance checks are faster and handoffs are painless.",
    name: "Rakib Shahriar Rimen",
    designation: "Founder, Peora",
  },
  {
    quote:
      "Docufy refined our brand briefs and marketing decks with crisp messaging that keeps campaigns aligned.",
    name: "Alamin Pranto",
    designation: "Founder, Start2Scaleup",
  },
  {
    quote:
      "Docufy organized our SOPs and operational workflows, so the team follows one reliable playbook.",
    name: "Arifa Jahan Bithi",
    designation: "Founder, Women's Dreamer Cricket Academy, Rangpur",
  },
] as const;

export const workProcessSteps = [
  {
    label: "Step 01",
    title: "Primary Contact",
    description:
      "You hear from us within 24 hours of confirming your order. Send what you have, we help clean and complete the details so the work starts on accurate input.",
  },
  {
    label: "Step 02",
    title: "Negotiation and Deal Acceptance",
    description:
      "We agree scope, timeline, and price together, then lock it at order confirmation. Government fees and statutory charges stay separate, and you always know what applies before we start.",
  },
  {
    label: "Step 03",
    title: "Project in Progress",
    description:
      "We start the work and update you at key stages. You get an initial draft to review, and small fixes within the agreed scope are handled during review.",
  },
  {
    label: "Step 04",
    title: "Final Copy Delivered",
    description:
      "You receive the final copy in the agreed format after full payment. Filing work also includes submission proof or certificates where they apply, and you own the final documents.",
  },
] satisfies readonly {
  label: string;
  title: string;
  description: string;
}[];
