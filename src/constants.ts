type QuestionnaireItems = { question: string; answer: string }[];
type FAQItems = { category: string; questionnaire: QuestionnaireItems }[];

export const faqItems: FAQItems = [
  {
    category: "Business and about Docufy",
    questionnaire: [
      {
        question: "What is Docufy?",
        answer:
          "Docufy provides professional documentation and legal support in Bangladesh. We work with startups, established businesses, event organizers, and individuals on accurate paperwork for growth and compliance. If it needs to hold up in front of a regulator or an investor, that is our lane.",
      },
      {
        question: "Who can use Docufy?",
        answer:
          "Anyone who needs paperwork done right. Startups, small businesses, enterprises, event organizers, individuals. Business profiles, HR papers, tax filing support, legal drafts, tech specs, event materials. You do not need to be big to start.",
      },
      {
        question: "What industries do you work with?",
        answer:
          "Tech, healthcare, finance, education, retail, and general business services. The focus shifts with the use case. Investor reads for tech, compliance heavy filings for finance and healthcare, parent trust materials for education.",
      },
      {
        question: "Why should I choose Docufy over templates?",
        answer:
          "Templates give you structure and leave you alone with the blanks. We fit the document to your goal, reader, and use case, and a professional reviews it. You also get help with scope, pricing, and drafts. Honestly, templates cost more time than they save once the stakes go up.",
      },
      {
        question:
          "Where do I start if I am new and confused by terms like RJSC, MOA, TIN?",
        answer:
          "Send a short message through the contact form or to info@docufybd.com. Tell us your goal in plain words. We map the first step, like name clearance, trade license, TIN, or bank account. You do not need to know the order before you contact us.",
      },
    ],
  },
  {
    category: "Services and customization",
    questionnaire: [
      {
        question: "What services do you offer?",
        answer:
          "40 plus services in six groups. Business Setup and Registration, Tax VAT Audit and Compliance, Law Legal and Intellectual Property, Business Corporate and HR Documents, Tech Product and Digital, and Brand and Marketing. Company formation, TIN, tax filing, NDA, employee handbook, PRD, pitch deck, and web development are common examples.",
      },
      {
        question: "Can you customize documents to my needs?",
        answer:
          "Yes. We build around your reader and use case, like investors, clients, regulators, or internal teams. Share your goal, audience, and any sample you like. We adjust structure, tone, and detail from there.",
      },
      {
        question: "Can I see a sample before I order?",
        answer:
          "Yes. Ask through the website, email info@docufybd.com, or phone for a relevant sample. We share a watermarked reference so you can check structure and finish before you commit.",
      },
      {
        question:
          "Do you help with tech documents like BRD, PRD, FRD, and SRS?",
        answer:
          "Yes. BRD covers business needs and scope. PRD covers product purpose and features. FRD covers functional behavior and use cases. SRS locks detailed system needs for design and build. If you plan to hire developers, SRS cuts rework during handoff.",
      },
      {
        question: "Do you also build websites or only write documents?",
        answer:
          "We do both. Website pricing varies by type and scope, like static, WordPress based, or custom system, plus pages, features, and integrations. Many clients bundle specs plus build so the writer and builder stay aligned.",
      },
      {
        question: "Do you handle events as well?",
        answer:
          "Yes. Event pricing varies by size and scope, like profile, full documentation set, or data and reporting. That covers planning papers, registration lists, sponsor terms, and post event reports.",
      },
    ],
  },
  {
    category: "Pricing and payments",
    questionnaire: [
      {
        question: "How does pricing work?",
        answer:
          "Pricing varies with what you need. Service pages show a starting price only to set a baseline. We set the final price after scoping. Company type, shareholder count, transaction volume, complexity, and detail level decide it.",
      },
      {
        question: "Are government fees included in your price?",
        answer:
          "No. Listed prices cover professional fees only. You pay government fees, taxes, and statutory charges separately. We tell you which fees apply and whether you pay direct or through us during negotiation.",
      },
      {
        question: "When is my price locked?",
        answer:
          "We lock price at order confirmation after we agree scope and payment terms. We honor that rate for that ongoing project. A new scope or major change needs a separate order and price.",
      },
      {
        question: "How do I pay?",
        answer:
          "Pay through bKash Send Money for now. You can pay upfront or in installments based on project scope. We release final deliverables only after full payment. We will add more options later.",
      },
      {
        question: "What happens if I pay late?",
        answer:
          "Late payment can add a late fee and pause your timeline. Continued non payment can suspend or end services. If you expect a delay, tell us early so we can adjust.",
      },
    ],
  },
  {
    category: "Ordering and process",
    questionnaire: [
      {
        question: "How do I place an order?",
        answer:
          "Go to Services and pick a service to see details. Then click Start My Document or Create Order With This Service. You select service, add basic information, add company information if needed, then confirm and complete. If you come from a service page, we preselect your choice.",
      },
      {
        question: "What happens after I confirm my order?",
        answer:
          "You hear from your primary contact within 24 hours. Then we discuss negotiation and pricing, confirm the deal, start the project, share an initial draft, and deliver the final copy. We update you at key stages. You can ask questions anytime.",
      },
      {
        question: "What if my information is incomplete?",
        answer:
          "Send what you have. We help clean and complete it during first contact. Accurate and complete input avoids errors and delays. If details are missing, we pause the clock until we have what we need.",
      },
      {
        question: "How do I track progress?",
        answer:
          "We share updates at key stages, like deal confirmed, project in progress, initial draft sent, and final delivery. For other checks, reply to your order thread or contact us and we respond.",
      },
      {
        question: "Can you help with urgent work?",
        answer:
          "Yes, we take expedited work for urgent needs. Tell us your deadline at order time. We confirm if we can meet it and what it costs before we start. Review quality stays.",
      },
      {
        question: "How do I contact you for help?",
        answer:
          "Email info@docufybd.com or use the contact form. Include full name, subject, email, phone number, company name if you have one, and message. For legal topics, keep the first message brief. Do not send sensitive files until we confirm a safe channel.",
      },
    ],
  },
  {
    category: "Delivery timelines and revisions",
    questionnaire: [
      {
        question: "How long does delivery take?",
        answer:
          "Scope decides. NDA takes 1 to 3 working days. Income Tax Filing takes 3 to 7 working days. Company Formation takes 10 to 15 working days. Trademark takes 15 to 30 working days. Financial Audit takes 15 to 30 working days. Custom Web takes 10 to 30 working days. We count working days only. The clock starts after complete info plus payment.",
      },
      {
        question: "Do government delays affect my timeline?",
        answer:
          "Yes for RJSC, tax, and similar filings. Authority processing sits outside our control. We handle preparation, submission, and follow up, and we share proof of effort. Client delay and authority delay stretch the timeline, with no extra penalty beyond the wait itself.",
      },
      {
        question: "What if I need changes to the draft?",
        answer:
          "Tell us promptly during review. We handle small fixes within agreed scope in review. Larger changes or new requirements may add fees based on scope. If you stay silent past the agreed review window, we may treat the draft as final.",
      },
      {
        question: "What are my duties as a client during the project?",
        answer:
          "Give us accurate, complete, and timely information. Review drafts and approve or request changes quickly. We are not responsible for errors or delays caused by wrong or late input from your side.",
      },
      {
        question: "What do I receive at the end?",
        answer:
          "The final copy in the agreed format after full payment. Filing services also include submission proof or certificates where they apply. Source files and extra aftercare depend on what we agreed in scope.",
      },
    ],
  },
  {
    category: "Privacy confidentiality and data",
    questionnaire: [
      {
        question: "What information do you collect?",
        answer:
          "What you share. Name, email, and contact details. Company name and address needed for the work. Document content and metadata you upload or process. Basic usage data like browser type. We use payment details like card info and phone numbers only to process payments.",
      },
      {
        question: "How do you use my information?",
        answer:
          "We use it to deliver services, process payments, and talk to you. To improve services. We send marketing only with your consent, and you can opt out anytime. To meet legal duties like responding to court orders. We may use feedback as testimonials with your name and designation only. Other details stay confidential.",
      },
      {
        question: "Do you share my data with third parties?",
        answer:
          "We do not sell or share your personal info for third party marketing without your consent. We share limited data with trusted providers who help run the service, like payment processing, under confidentiality. We never share payment info for marketing.",
      },
      {
        question: "How do you protect my documents?",
        answer:
          "We keep strict confidentiality and take reasonable security steps against unauthorized access or disclosure. No online system is fully secure, so we cannot promise absolute security. Ask for an NDA if you want extra assurance.",
      },
      {
        question: "Can I access, edit, or delete my data?",
        answer:
          "Yes. You can request access to your personal info and opt out of marketing anytime. You can edit company info, and new orders use the current details. You can delete your account, but we keep backup copies for a period and re registering with the same info may bring back prior data. We keep some records where the law requires it.",
      },
      {
        question:
          "Do you store personal details of people named in my business documents?",
        answer:
          "No. We do not collect or store personal info about individuals listed inside your business documents as separate profiles. We handle company and document data needed to complete the work with the same confidentiality as your personal info.",
      },
    ],
  },
  {
    category: "Legal ownership and terms",
    questionnaire: [
      {
        question: "Who owns the final documents?",
        answer:
          "You own the final documents we create for you after full payment. Docufy keeps its own templates, methods, and know how used to create them. Our Terms spell out this split.",
      },
      {
        question: "Do you promise government or bank acceptance?",
        answer:
          "No. We prepare papers professionally based on your info and current rules, but the authority, bank, court, or embassy decides approval. We provide services as is with no warranty on acceptance. Our liability stays limited to what you paid for that specific service.",
      },
      {
        question: "Can I cancel my order?",
        answer:
          "Yes, send written notice anytime. We bill work completed up to that date. If we end the work because you broke terms or the activity was unlawful, we do not refund paid fees.",
      },
      {
        question: "Which law applies to disputes?",
        answer:
          "The laws of the Peoples Republic of Bangladesh apply. Courts in Bangladesh resolve disputes. If you keep using the service after we notify changes, you accept the revised Terms.",
      },
      {
        question: "Where can I read the full policies?",
        answer:
          "See the Privacy Policy and Terms and Conditions pages on this site. Email info@docufybd.com with questions. We post policy updates on the website with notice for major changes.",
      },
    ],
  },
];
