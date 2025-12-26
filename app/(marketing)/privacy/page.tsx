export default function PrivacyPage() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-date">Last updated: December 26, 2024</p>

        <div className="legal-content">
          <section className="legal-section">
            <h2>Overview</h2>
            <p>
              Extracted ("we", "us", or "our") operates this website. This page informs you of our 
              policies regarding the collection, use, and disclosure of personal information we receive 
              from users of the site.
            </p>
          </section>

          <section className="legal-section">
            <h2>Information Collection</h2>
            <p>
              We collect minimal information from visitors:
            </p>
            <ul>
              <li>
                <strong>Email addresses:</strong> If you subscribe to our newsletter or waitlist, we 
                collect your email address.
              </li>
              <li>
                <strong>Usage data:</strong> We may collect information about how you access and use 
                the website, including your IP address, browser type, pages visited, and time spent on pages.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect for the following purposes:
            </p>
            <ul>
              <li>To send you updates about new blog posts (only if you've subscribed)</li>
              <li>To improve our website and user experience</li>
              <li>To respond to your inquiries and support requests</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Email Communications</h2>
            <p>
              If you subscribe to our newsletter:
            </p>
            <ul>
              <li>We will only send you notifications about new blog posts</li>
              <li>You can unsubscribe at any time by clicking the unsubscribe link in any email</li>
              <li>We will never sell or share your email address with third parties</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Cookies and Tracking</h2>
            <p>
              Our website may use cookies to improve user experience. You can choose to disable cookies 
              through your browser settings, though this may affect website functionality.
            </p>
          </section>

          <section className="legal-section">
            <h2>Data Security</h2>
            <p>
              We take reasonable measures to protect your personal information from unauthorized access, 
              alteration, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section className="legal-section">
            <h2>Third-Party Services</h2>
            <p>
              We may use third-party services for email delivery and website analytics. These services 
              have their own privacy policies governing their use of your information.
            </p>
          </section>

          <section className="legal-section">
            <h2>Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction or deletion of your personal data</li>
              <li>Withdraw consent for us to use your personal data at any time</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Children's Privacy</h2>
            <p>
              Our website is not intended for children under 13. We do not knowingly collect personal 
              information from children under 13.
            </p>
          </section>

          <section className="legal-section">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="legal-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:{" "}
              <a href="mailto:hello@extracted.com">hello@extracted.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}