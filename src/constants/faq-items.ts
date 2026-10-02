export const faqItems = [
  {
    category: "About Docufy",
    questionnaire: [
      {
        question: "What is Docufy?",
        answer:
          "Docufy is a B2B service provider. Our work is split across three subsidiaries. Docufy Tech handles technical needs, Docufy Fiscal handles tax and audit work, and Docufy Corevo writes business, HR, legal and event documents.",
      },
      {
        question: "Is Docufy one company or several?",
        answer:
          "Docufy is the parent brand. Docufy Tech, Docufy Fiscal and Docufy Corevo are its three subsidiaries, and each one focuses on a single kind of work.",
      },
      {
        question: "Why does one company cover documents, tax and tech?",
        answer:
          "Because most business problems cross those lines. Someone starting a company needs formation paperwork from Corevo, tax registration and returns from Fiscal, and often a website, or maybe AI based agent or automation configured from Tech. Having all three under one name means you do not have to explain your business to three different vendors.",
      },
      {
        question: "Does Docufy use AI in its work?",
        answer:
          "Yes, Docufy leverages AI internally as a supporting tool to enhance efficiency and productivity, without compromising the quality or integrity of its work.",
      },
    ],
  },
  {
    category: "Our subsidiaries",
    questionnaire: [
      {
        question: "What does Docufy Tech do?",
        answer:
          "Docufy Tech offers technical solutions. You can learn more at https://tech.docufybd.com.",
      },
      {
        question: "What does Docufy Fiscal do?",
        answer:
          "Docufy Fiscal offers solutions for tax and audit. Learn more at https://fiscal.docufybd.com.",
      },
      {
        question: "What does Docufy Corevo do?",
        answer:
          "Docufy Corevo writes documents. It has 29 services covering business and corporate documents, HR documents, business setup and registration, legal agreements and IP, and brand and event material such as pitch decks.",
      },
    ],
  },
  {
    category: "Pricing and timelines",
    questionnaire: [
      {
        question: "Are the listed prices final?",
        answer:
          "No. Every mentioned price is a starting price. The final price depends on your specific needs and requirements.",
      },
      {
        question: "What makes a price go up?",
        answer:
          "Complexity, how much customization you need, and how much research the work takes. The specifics vary by service. For example, a Sales Proposal grows with the number of products and the pricing structure, a Trademark Registration grows with the number of classes, a Financial Audit grows with transaction volume and audit scope.",
      },
      {
        question: "Do you sell fixed packages?",
        answer:
          "Mostly no. Prices are determined dynamically based on project requirements and work complexity.",
      },
      {
        question: "How are timelines counted?",
        answer:
          "In working days, which excludes any kind of weekends or government holidays.",
      },
      {
        question: "Do timelines include government processing?",
        answer:
          "Yes, only for the services that depend on a government office.",
      },
      {
        question: "Do government fees affect the price?",
        answer:
          "All charges mentioned represent professional fees only. Any applicable government fees, taxes, or statutory charges will be billed separately in addition to the professional fees.",
      },
      {
        question: "How do I get a final quote?",
        answer: "Contact us with subsequent details.",
      },
    ],
  },
] satisfies readonly {
  category: string;
  questionnaire: { question: string; answer: string }[];
}[];
