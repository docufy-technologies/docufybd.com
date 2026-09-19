import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/terms-and-conditions")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div class="w-full p-0 m-0">
      <section class="max-w-3xl p-6 my-30 mx-auto *:leading-relaxed [&>h1,h2,h3,h4,h5,h6]:mb-2 [&>h1,h2,h3,h4,h5,h6]:mt-8 [&>p,ul,li]:text-lg [&>ul,li]:list-disc [&>ul]:mt-0 [&>p]:my-4">
        <h1>Terms and Conditions</h1>
        <p>
          These Terms and Conditions ("Terms") constitute a legally binding
          agreement between the Client and Docufy ("the Company"). By accessing
          and using the services provided by Docufy, you agree to comply with
          and be bound by the following terms and conditions.
        </p>
        <p>
          You should not use our services if you disagree with these terms. It
          is imperative that you read and understand these Terms before engaging
          our services. If you do not agree to these Terms, you are advised to
          refrain from using our services.
        </p>

        <h2>Services</h2>
        <p>
          Docufy offers professional documentation services, including but not
          limited to:
        </p>
        <ul>
          <li>
            <strong>Employee Management Documents:</strong> Create and manage
            documents related to employee onboarding and management, which
            include contracts, agreements, performance evaluations, and HR
            policies.
          </li>
          <li>
            <strong>Company and Business Profiles:</strong> Development of
            comprehensive business profiles, company overviews, and other
            related documents for corporate presentation.
          </li>
          <li>
            <strong>Proposals and Sales Documents:</strong> Preparation of
            business proposals, sales pitches, and other related documents to
            support business development activities.
          </li>
          <li>
            <strong>Communication Letters:</strong> Drafting of formal and
            informal communication letters, including business correspondences,
            memos, and notices.
          </li>
          <li>
            <strong>Requirement Specifications and Presentations:</strong>{" "}
            Creation of detailed requirement specifications and professional
            presentations for business or project needs.
          </li>
        </ul>

        <h2>Client Duties</h2>
        <ul>
          <li>
            <strong>Accuracy of Information:</strong> Clients must provide
            accurate, complete, and timely information necessary to complete the
            requested services. Docufy is not responsible for errors or delays
            caused by inaccurate or incomplete information provided by the
            client.
          </li>
          <li>
            <strong>Approval of Drafts:</strong> Clients are responsible for
            reviewing and approving drafts provided by Docufy. Any revisions
            must be communicated promptly. Failure to respond within the
            specified time may result in delays or acceptance of the draft as
            final.
          </li>
        </ul>

        <h2>Payments</h2>
        <ul>
          <li>
            <strong>Pricing:</strong> Services are billed according to the rates
            finalized at the time of the specific order. Docufy reserves the
            right to modify pricing at any time but will honour the agreed-upon
            rate for ongoing projects.
          </li>
          <li>
            <strong>Payment Schedule:</strong> Payments may be required upfront
            or in instalments, depending on the project scope. Final
            deliverables will only be provided upon full payment.
          </li>
          <li>
            <strong>Late Payments:</strong> Any payment not received within the
            agreed terms will incur a late fee. Continued non-payment may result
            in the suspension or termination of services.
          </li>
        </ul>

        <h2>Privacy</h2>
        <p>
          Docufy maintains strict confidentiality regarding all client
          information and documents. We will not disclose any information to
          third parties without explicit consent unless required by law. Both
          parties agree to take reasonable precautions to protect confidential
          information.
        </p>

        <h2>Intellectual Property</h2>
        <ul>
          <li>
            <strong>Client Ownership:</strong> All documents created by Docufy
            on behalf of the client become the property of the client upon full
            payment. Clients retain all rights to their content.
          </li>
          <li>
            <strong>Docufy Ownership:</strong> Docufy retains the right to any
            templates, methodologies, or intellectual property developed
            independently of client content and used in the creation of
            documents.
          </li>
        </ul>

        <h2>Termination</h2>
        <ul>
          <li>
            <strong>By Client:</strong> Clients may terminate services at any
            time by providing written notice. However, any work completed up to
            the date of termination will be billed accordingly.
          </li>
          <li>
            <strong>By Docufy:</strong> Docufy reserves the right to terminate
            services if the client violates any terms or engages in activities
            deemed unlawful or unethical. In such cases, any fees paid will not
            be refunded.
          </li>
        </ul>

        <h2>Liability</h2>
        <ul>
          <li>
            <strong>No Warranty:</strong> Docufy makes no warranties regarding
            the accuracy or completeness of documents created based on client
            information. All services are provided "as is."
          </li>
          <li>
            <strong>Limitation of Liability:</strong> Docufy's liability is
            limited to the amount paid by the client for the specific service in
            question. Docufy is not liable for any indirect, consequential, or
            incidental damages arising from the use of its services.
          </li>
        </ul>

        <h2>Governing Law</h2>
        <p>
          These terms and conditions are governed by the laws of the People's
          Republic of Bangladesh. Any disputes arising from these terms shall be
          resolved in the courts of Bangladesh.
        </p>

        <h2>Amendments</h2>
        <p>
          Docufy reserves the right to amend these terms and conditions at any
          time. Clients will be notified of any significant changes, and
          continued use of services constitutes acceptance of the revised terms.
        </p>
        <p>
          For any inquiries or further clarification regarding these terms and
          conditions, please contact us at{" "}
          <a href="mailto:info@docufybd.com">info@docufybd.com</a>.
        </p>
      </section>
    </div>
  );
}
