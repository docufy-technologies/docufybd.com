import {
  IconAdjustments,
  IconAppWindow,
  IconBlocks,
  IconBook,
  IconBriefcase,
  IconBuilding,
  IconBusinessplan,
  IconCalendarEvent,
  IconClipboardCheck,
  IconFileAnalytics,
  IconFileCode,
  IconFileDescription,
  IconFileInvoice,
  IconFilePencil,
  IconFileStack,
  IconFileText,
  IconFunction,
  IconGavel,
  IconHeartHandshake,
  IconId,
  IconMail,
  IconNotes,
  IconPresentation,
  IconReceipt,
  IconReport,
  IconRobot,
  IconRubberStamp,
  IconScale,
  IconStack,
  IconUserCircle,
  IconUsers,
  IconWaveSine,
  IconWebhook,
  IconWriting,
} from "@tabler/icons-solidjs";
import type { JSX } from "solid-js";

export type Solution = {
  title: string;
  description: string;
  icon: () => JSX.Element;
};

export const docsSolutions = [
  {
    title: "Company/Business Profile",
    description:
      "Comprehensive overview of a company's history, mission, products, and positioning.",
    icon: () => <IconBriefcase class="size-6" />,
  },
  {
    title: "Business Brief",
    description:
      "Concise summary of a business or project to capture essential details and attract interest.",
    icon: () => <IconFileDescription class="size-6" />,
  },
  {
    title: "Request For Proposal (RFP)",
    description:
      "Formal document soliciting proposals from vendors with scope and evaluation criteria.",
    icon: () => <IconFileText class="size-6" />,
  },
  {
    title: "Sales Proposal",
    description:
      "Formal proposal to offer products or services to potential clients.",
    icon: () => <IconPresentation class="size-6" />,
  },
  {
    title: "Collaboration / Partnership Proposal",
    description:
      "Proposal to form a collaboration or partnership between businesses or individuals.",
    icon: () => <IconHeartHandshake class="size-6" />,
  },
  {
    title: "Sponsorship Proposal",
    description:
      "Compelling proposal to secure sponsorships for events, projects, or initiatives.",
    icon: () => <IconUsers class="size-6" />,
  },
  {
    title: "Proposal Acceptance Letter",
    description:
      "Formal letter confirming the acceptance of a proposal or offer.",
    icon: () => <IconMail class="size-6" />,
  },
  {
    title: "Employee Handbook",
    description:
      "Comprehensive guide outlining company policies, expectations, and procedures.",
    icon: () => <IconBook class="size-6" />,
  },
  {
    title: "Service Policy & Regulations",
    description: "Policies and regulations governing the delivery of services.",
    icon: () => <IconFilePencil class="size-6" />,
  },
  {
    title: "Job Description",
    description:
      "Detailed description of a role and its responsibilities within the organization.",
    icon: () => <IconNotes class="size-6" />,
  },
  {
    title: "Job Offer Letter",
    description: "Formal letter offering employment to a candidate.",
    icon: () => <IconMail class="size-6" />,
  },
  {
    title: "Joining Letter",
    description:
      "Formal confirmation of a new employee's start date and employment details.",
    icon: () => <IconMail class="size-6" />,
  },
  {
    title: "Recommendation Letter",
    description:
      "Formal letter recommending an individual for a position or opportunity.",
    icon: () => <IconUserCircle class="size-6" />,
  },
  {
    title: "Sponsorship Letter",
    description:
      "Formal letter requesting or offering sponsorship for events or projects.",
    icon: () => <IconMail class="size-6" />,
  },
  {
    title: "Asset Acknowledgement",
    description:
      "Formal documentation acknowledging the receipt or transfer of assets.",
    icon: () => <IconClipboardCheck class="size-6" />,
  },
  {
    title: "Company Formation",
    description:
      "Registering and establishing a Private Limited or Public Limited company.",
    icon: () => <IconBuilding class="size-6" />,
  },
  {
    title: "Company Filing",
    description:
      "Filing annual returns, financial statements, and mandatory company documents.",
    icon: () => <IconFileCode class="size-6" />,
  },
  {
    title: "Partnership Business Formation",
    description: "Registering and establishing a partnership business.",
    icon: () => <IconBuilding class="size-6" />,
  },
  {
    title: "Sole Proprietorship Business Formation",
    description: "Registering and establishing a sole proprietorship business.",
    icon: () => <IconBuilding class="size-6" />,
  },
  {
    title: "TIN Registration",
    description: "Registering for a Taxpayer Identification Number (TIN).",
    icon: () => <IconId class="size-6" />,
  },
  {
    title: "Legal Opinion",
    description: "Professional legal interpretation and analysis.",
    icon: () => <IconGavel class="size-6" />,
  },
  {
    title: "Memorandum of Understanding (MoU)",
    description: "Agreement between two or more parties outlining intent.",
    icon: () => <IconHeartHandshake class="size-6" />,
  },
  {
    title: "Non-Disclosure Agreement (NDA)",
    description: "Protect confidential information between parties.",
    icon: () => <IconFilePencil class="size-6" />,
  },
  {
    title: "Non-Compete Agreement (NCA)",
    description: "Restrict competition post-employment.",
    icon: () => <IconFileText class="size-6" />,
  },
  {
    title: "Trademark Registration",
    description: "Register and protect a brand trademark.",
    icon: () => <IconRubberStamp class="size-6" />,
  },
  {
    title: "Pitch Deck",
    description: "Compelling presentation to attract investors or partners.",
    icon: () => <IconPresentation class="size-6" />,
  },
  {
    title: "Speech Deck",
    description:
      "Structured presentation to accompany a speech or public address.",
    icon: () => <IconWriting class="size-6" />,
  },
  {
    title: "Event Profile",
    description:
      "Detailed overview of an event for marketing and organizational purposes.",
    icon: () => <IconCalendarEvent class="size-6" />,
  },
  {
    title: "Event Documentation",
    description: "Comprehensive records and materials for an event.",
    icon: () => <IconFileText class="size-6" />,
  },
  {
    title: "Event Data & Report",
    description:
      "Collecting and analyzing event data, then preparing a comprehensive report.",
    icon: () => <IconFileAnalytics class="size-6" />,
  },
] satisfies readonly Solution[];

export const fiscalSolutions = [
  {
    title: "Corporate Tax Filing",
    description:
      "Compliant tax submissions aligned with applicable tax laws for businesses.",
    icon: () => <IconReceipt class="size-6" />,
  },
  {
    title: "Income Tax Filing",
    description: "Accurate and compliant preparation of income tax returns.",
    icon: () => <IconFileInvoice class="size-6" />,
  },
  {
    title: "VAT Submission",
    description:
      "Timely and accurate reporting and submission of VAT returns to tax authorities.",
    icon: () => <IconFileAnalytics class="size-6" />,
  },
  {
    title: "RJSC Return Submission",
    description:
      "Regulatory filing with RJSC in line with compliance timelines.",
    icon: () => <IconFileStack class="size-6" />,
  },
  {
    title: "Tax Consultancy",
    description:
      "Navigate tax laws, optimize liabilities, and ensure compliance with local and international regulations.",
    icon: () => <IconScale class="size-6" />,
  },
  {
    title: "Financial Audit",
    description:
      "Independent review of financial statements and controls for transparency and compliance.",
    icon: () => <IconReport class="size-6" />,
  },
  {
    title: "Tax Litigation & Dispute Resolution",
    description:
      "Representation and resolution support for tax disputes and litigation matters.",
    icon: () => <IconGavel class="size-6" />,
  },
] satisfies readonly Solution[];

export const techSolutions = [
  {
    title: "Project / Product Overview",
    description:
      "A concise summary of a project's goals, scope, timeline, and outcomes.",
    icon: () => <IconStack class="size-6" />,
  },
  {
    title: "Business Requirement Document (BRD)",
    description:
      "Documents business needs to guide system or process development.",
    icon: () => <IconBusinessplan class="size-6" />,
  },
  {
    title: "Product Requirement Document (PRD)",
    description:
      "Defines product purpose, features, and user needs for development.",
    icon: () => <IconBlocks class="size-6" />,
  },
  {
    title: "Functional Requirement Document (FRD)",
    description: "Outlines system behaviors, features, and interactions.",
    icon: () => <IconFunction class="size-6" />,
  },
  {
    title: "Software Requirement Specification (SRS)",
    description: "Defines clear, verifiable system requirements.",
    icon: () => <IconAppWindow class="size-6" />,
  },
  {
    title: "Web Application Development",
    description: "Builds responsive, user-friendly websites for your needs.",
    icon: () => <IconWebhook class="size-6" />,
  },
  {
    title: "AI Agent Configuration",
    description:
      "Sets up and tunes AI coding agents like Claude Code, OpenCode, and Gemini CLI for your exact workflow.",
    icon: () => <IconRobot class="size-6" />,
  },
  {
    title: "Custom AI Instructions",
    description:
      "Builds instruction sets that turn AI assistants from generic tools into team-specific operators.",
    icon: () => <IconAdjustments class="size-6" />,
  },
  {
    title: "AI Based Automations",
    description:
      "Wires up n8n, Make, or custom integrations so repetitive work runs without you.",
    icon: () => <IconWaveSine class="size-6" />,
  },
] satisfies readonly Solution[];
