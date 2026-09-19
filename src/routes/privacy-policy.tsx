import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/privacy-policy")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div class="w-full p-0 m-0">
      <section class="max-w-3xl p-6 my-30 mx-auto *:leading-relaxed [&>h1,h2,h3,h4,h5,h6]:mb-2 [&>h1,h2,h3,h4,h5,h6]:mt-8 [&>p,ul,li]:text-lg [&>ul,li]:list-disc [&>ul]:mt-0 [&>p]:my-4">
        <h1>Privacy Policy</h1>
        <p>
          Docufy respects your privacy and is committed to protecting your
          personal information. This Privacy Policy outlines how we collect,
          use, disclose, and protect your information when you use our website
          and services. By using our website and services, you consent to our
          collection and use of your information as described in this Privacy
          Policy.
        </p>

        <h2>Information we collect</h2>
        <ul>
          <li>
            <strong>Personal Information:</strong> We may collect personal
            information such as your name, email address, and contact details
            when you contact us or use our services. However, we do not collect
            or store personal information about individuals included in your
            business documents.
          </li>
          <li>
            <strong>Company Information:</strong> We may collect and process
            company information, such as company name, address, and contact
            details, as necessary to fulfil our document services for your
            business or event. This information is handled with the same level
            of confidentiality as your personal information.
          </li>
          <li>
            <strong>Document Information:</strong> We may collect information
            related to the documents you upload, store, or process through our
            services. This information may include document content, metadata,
            and usage data.
          </li>
          <li>
            <strong>Usage Data:</strong> We may collect information about how
            you use our website and services, such as your browser type.
          </li>
        </ul>

        <h2>How we use your information</h2>
        <ul>
          <li>
            <strong>Providing Services:</strong> We use your information to
            provide our document services, process payments, and communicate
            with you.
          </li>
          <li>
            <strong>Improving Services:</strong> We may use your information to
            improve our services and user experience.
          </li>
          <li>
            <strong>Marketing and Communication:</strong> We may use your email
            address to send you marketing and promotional materials about our
            services, with your consent. You can opt out of these communications
            at any time.
          </li>
          <li>
            <strong>Legal Compliance:</strong> We may use your information to
            comply with legal obligations, such as responding to subpoenas or
            court orders.
          </li>
          <li>
            <strong>Client Testimonials:</strong> We may use your feedback as
            testimonials to improve our services and for marketing purposes. In
            this case, your name and designation in the company might be used,
            otherwise all other information will remain confidential.
          </li>
          <li>
            <strong>Payment Information:</strong> Your payment information, such
            as card details and phone numbers, is used exclusively for
            processing payments and is not shared with third parties.
          </li>
          <li>
            <strong>Data Retention:</strong> We retain your personal information
            for as long as necessary to fulfil the purposes outlined in this
            Privacy Policy. You may request access to your personal information
            at any time. You can also delete your account but your data will be
            stored in the backup. If you re-register with the same information,
            data from your previous account will be restored. You can edit your
            information of the company and the new orders will be placed based
            on your current workplace.
          </li>
        </ul>

        <h2>Information sharing</h2>
        <p>
          Without your consent, we do not share your personal information with
          third parties for marketing purposes. We may share your information
          with trusted third-party service providers who help us operate our
          business and provide our services.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement reasonable security measures to protect your personal
          information from unauthorized access, disclosure, or alteration.
          However, no method of transmission or storage is completely secure,
          and we cannot guarantee absolute security.
        </p>

        <h2>Your rights</h2>
        <p>
          You have the right to access your personal information. You can also
          opt out of receiving marketing communications from us.
        </p>

        <h2>Changes to this Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any significant changes by posting the new policy on our
          website.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or our privacy
          practices, please contact us at{" "}
          <a href="mailto:info@docufybd.com">info@docufybd.com</a>.
        </p>
      </section>
    </div>
  );
}
