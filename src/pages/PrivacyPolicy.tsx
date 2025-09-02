import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const PrivacyPolicy = () => {
  useEffect(() => {
    // Set page title and meta description
    document.title = "Privacy Policy - Marley Co";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Marley Co Privacy Policy for Canadian residents. Learn how we collect, use, and protect your personal information in compliance with PIPEDA and CASL.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <h1 className="font-headline text-marley-dark mb-4">Marley Co Privacy Policy (Canada)</h1>
            <p className="text-muted-foreground mb-8">Effective date: Aug 26, 2025</p>
            
            <div className="space-y-8 text-marley-primary">
              <p>
                Marley Co respects your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information in Canada. It is designed to comply with the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial laws. It also explains our practices for electronic messages under Canada's Anti‑Spam Legislation (CASL) and includes notes for residents of Québec's Law 25.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-headline text-marley-dark mb-4">Plain‑language summary</h3>
                <ul className="space-y-2 text-sm">
                  <li>• We collect the information you provide to enter contests, create an account, make a purchase, or contact us.</li>
                  <li>• We use your information to administer giveaways, fulfill prizes, provide our products and services, improve our site, and send marketing with your consent.</li>
                  <li>• You can withdraw consent, unsubscribe from marketing, or request access or corrections at any time.</li>
                  <li>• We use service providers that may process information outside Canada. We apply contractual and technical safeguards.</li>
                  <li>• If something goes wrong, we assess and, where required, notify you and regulators about privacy incidents.</li>
                </ul>
              </div>

              <hr className="border-border" />

              <section>
                <h2 className="font-headline text-marley-dark mb-4">1) Who we are</h2>
                <p>
                  Controller: Marley Co (the "Company", "we", "us", "our").<br />
                  Mailing address: AREH, 461 Brighton Rd, Windsor, ON, N8N2L7, Canada.<br />
                  Contact: hello@marleyco.ca
                </p>
                <p>
                  If this Policy references "affiliates" or "partners," it refers to entities we control or work with to provide our products, services, or promotions.
                </p>
              </section>

              <section>
                <h2 className="font-headline text-marley-dark mb-4">2) Scope</h2>
                <p>
                  This Policy applies to personal information we collect in Canada through our websites, landing pages, online stores, social media pages, contests, and customer support channels (collectively, the "Services"). It does not apply to information collected by third‑party websites or platforms that we do not control. If a promotion is co‑sponsored with a partner, the Official Rules will identify the parties, and each party's privacy practices may apply.
                </p>
              </section>

              <section>
                <h2 className="font-headline text-marley-dark mb-4">3) What we collect</h2>
                <p>We collect personal information only as reasonable for the purposes identified below. Categories include:</p>
                <ul className="space-y-2">
                  <li>• Identity and contact: name, email, mailing address, phone.</li>
                  <li>• Account and transaction: login credentials, order history, shipping details, warranty requests.</li>
                  <li>• Contest and promotion: eligibility declarations, answers to skill‑testing questions, entry time stamps, referral or bonus‑action details.</li>
                  <li>• Demographic and preferences: interests, preferred products, communication preferences.</li>
                  <li>• Device and usage: IP address, browser type, pages viewed, links clicked, approximate location, cookies and similar technologies.</li>
                  <li>• Communications: messages you send to us, customer support records.</li>
                </ul>
                <p>
                  We do not intentionally collect information directly from children under 13. Our offers are intended for adults and parents or legal guardians. If you believe a child provided personal information, contact us so we can delete it.
                </p>
              </section>

              <section>
                <h2 className="font-headline text-marley-dark mb-4">4) How we collect information</h2>
                <ul className="space-y-2">
                  <li>• Directly from you when you enter a giveaway, make a purchase, create an account, contact support, post a review, or opt in to marketing.</li>
                  <li>• Automatically through cookies, pixels, and similar technologies when you use the Services.</li>
                  <li>• From partners and service providers such as payment processors, analytics, advertising platforms, or fulfillment providers as permitted by law and your settings with those parties.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-headline text-marley-dark mb-4">5) Why we use your information</h2>
                <p>We collect and use personal information for the following purposes:</p>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Operate our Services: provide websites, accounts, features, and customer support.</li>
                  <li>Administer giveaways and promotions: verify eligibility, contact selected entrants, award prizes, and publish winner lists as permitted by the Official Rules.</li>
                  <li>Process orders: take payment, ship products, manage returns and warranties.</li>
                  <li>Communicate with you: service messages, transactional notices, and responses to your inquiries.</li>
                  <li>Marketing with consent: send newsletters, offers, and surveys, including by email or SMS, consistent with CASL requirements. You can unsubscribe at any time.</li>
                  <li>Personalize and improve: analytics, research, A/B testing, and content measurement to make the Services better.</li>
                  <li>Security and fraud prevention: protect accounts, investigate suspicious activity, and enforce terms.</li>
                  <li>Legal compliance: meet tax, accounting, and consumer‑protection obligations and respond to lawful requests.</li>
                </ol>
                <p>We only use personal information for new purposes with your consent or as permitted by law.</p>
              </section>

              <section>
                <h2 className="font-headline text-marley-dark mb-4">6) Consent and your choices (PIPEDA and CASL)</h2>
                <p>
                  We rely on knowledge and consent except where inappropriate or permitted by law. By submitting your information, you consent to the collection, use, and disclosure for the purposes described in this Policy. You can:
                </p>
                <ul className="space-y-2">
                  <li>• Withdraw consent for marketing by using the unsubscribe link in our emails or replying STOP to SMS. Transactional or service messages will continue where allowed by law.</li>
                  <li>• Manage cookies through our cookie banner and your browser settings. Some features may not function without certain cookies.</li>
                  <li>• Update preferences by contacting us or through your account settings where available.</li>
                </ul>
                <p>
                  If we rely on implied consent under CASL for limited periods, we track those periods and seek express consent where required. We maintain records of consent.
                </p>
              </section>

              <section>
                <h2 className="font-headline text-marley-dark mb-4">7) Cookies, analytics, and interest‑based ads</h2>
                <p>
                  We use cookies, web beacons, SDKs, and similar technologies to remember your settings and to understand how visitors use the Services. We may work with analytics and advertising partners (for example, to run interest‑based ads on social media or across the web). You can opt out of certain ads through platform settings and your device's advertising preferences. See our Cookie Notice for details.
                </p>
              </section>

              <section>
                <h2 className="font-headline text-marley-dark mb-4">8) When we share information</h2>
                <p>We do not sell personal information. We disclose personal information to:</p>
                <ul className="space-y-2">
                  <li>• Service providers who assist with web hosting, payment processing, email delivery, SMS, analytics, advertising, prize fulfillment, and customer support. These providers may be located outside Canada.</li>
                  <li>• Affiliates and promotion partners involved in a co‑branded offer, as identified in the Official Rules or sign‑up form.</li>
                  <li>• Law enforcement or regulators when we believe disclosure is required or permitted by law.</li>
                  <li>• Business transfers if we sell or transfer some or all of our business or assets.</li>
                </ul>
                <p>We require service providers to protect personal information and use it only for our instructions.</p>
              </section>

              <section>
                <h2 className="font-headline text-marley-dark mb-4">9) Cross‑border transfers</h2>
                <p>
                  Your information may be stored or processed in the United States or other locations. As a result, it may be subject to the laws of those jurisdictions. We use contractual and other safeguards to protect personal information when it is transferred outside Canada, including assessing privacy risks of transfers and the nature of the services provided.
                </p>
              </section>

              <section>
                <h2 className="font-headline text-marley-dark mb-4">10) Retention</h2>
                <p>
                  We keep personal information only as long as necessary for the purposes described here or as required by law. For example, contest entry records may be retained for audit and regulatory purposes for a reasonable period after a giveaway ends. Marketing contact information is retained until you unsubscribe or we delete it in accordance with our retention schedule. When information is no longer needed, we securely delete or de‑identify it.
                </p>
              </section>

              <section>
                <h2 className="font-headline text-marley-dark mb-4">11) Security and incident response</h2>
                <p>
                  We use administrative, technical, and physical safeguards designed to protect personal information against loss or theft and unauthorized access, disclosure, copying, use, or modification. If we determine that a privacy breach creates a real risk of significant harm, we will notify affected individuals and report to regulators as required by law. We also keep records of all privacy incidents.
                </p>
              </section>

              <section>
                <h2 className="font-headline text-marley-dark mb-4">12) Your rights</h2>
                <p>Subject to limited exceptions, you have the right to:</p>
                <ul className="space-y-2">
                  <li>• Access the personal information we hold about you.</li>
                  <li>• Request corrections if it is inaccurate or incomplete.</li>
                  <li>• Withdraw consent for optional uses such as marketing.</li>
                  <li>• Complain to us and, if unresolved, to the Office of the Privacy Commissioner of Canada or your provincial privacy regulator.</li>
                </ul>
                <p>
                  To exercise your rights, contact our Privacy Officer using the details below. We may need to confirm your identity before responding.
                </p>
              </section>

              <section>
                <h2 className="font-headline text-marley-dark mb-4">13) Québec residents (Law 25)</h2>
                <p>
                  If you reside in Québec, additional rights and obligations apply. We designate a Privacy Officer responsible for compliance. We obtain express consent where required for the collection, use, or disclosure of sensitive personal information, for using your information for profiling, or for any purpose not compatible with the purposes identified at collection. You have the right to be informed of any automated decision‑making that produces legal or similarly significant effects and of the personal information used to make such decisions. You may submit observations to a member of our team who can review the decision. We perform privacy impact assessments for projects that present a high risk to privacy and disclose any use of technology that allows identification, location, or profiling. Contact us to learn more about our practices in Québec.
                </p>
              </section>

              <section>
                <h2 className="font-headline text-marley-dark mb-4">14) Children's privacy</h2>
                <p>
                  Our Services are intended for adults. We do not knowingly collect personal information directly from children under 13. If you believe we collected information from a child, contact us so we can delete it.
                </p>
              </section>

              <section>
                <h2 className="font-headline text-marley-dark mb-4">15) Third‑party links and social media</h2>
                <p>
                  Our Services may include links to third‑party sites or embedded content. Their privacy practices are governed by their own policies. Review those policies, especially before submitting personal information. If you engage with us on social media platforms, your interactions and settings on those platforms determine what we and others may see.
                </p>
              </section>

              <section>
                <h2 className="font-headline text-marley-dark mb-4">16) Changes to this Policy</h2>
                <p>
                  We may update this Policy from time to time. We will post the updated version with a new effective date. Material changes will be highlighted on our website or communicated to you where appropriate.
                </p>
              </section>

              <section>
                <h2 className="font-headline text-marley-dark mb-4">17) Contact and complaints</h2>
                <p>Questions, requests, or complaints can be sent to our Privacy Officer:</p>
                <ul className="space-y-2">
                  <li>• Email: hello@marleyco.ca</li>
                  <li>• Mail: Privacy Officer, Marley Co, 461 Brighton Rd, Windsor, ON, N8N2L7, Canada</li>
                </ul>
                <p>
                  If we cannot resolve your concern, you may contact the Office of the Privacy Commissioner of Canada or, where applicable, your provincial privacy regulator. Contact information is available at priv.gc.ca.
                </p>
              </section>

              <hr className="border-border" />

              <div className="bg-muted/30 p-6 rounded-lg space-y-6">
                <section>
                  <h3 className="font-headline text-marley-dark mb-3">CASL Notice</h3>
                  <p>
                    We send commercial electronic messages only with consent or as otherwise permitted by CASL. Each message identifies us and includes a functioning unsubscribe method. You can withdraw consent at any time. Unsubscribing from marketing will not affect service or transactional communications.
                  </p>
                </section>

                <section>
                  <h3 className="font-headline text-marley-dark mb-3">Official Rules for Promotions</h3>
                  <p>
                    Each giveaway or promotion is governed by its Official Rules. In the event of any conflict between this Policy and the Official Rules for a specific promotion, the Official Rules will govern with respect to that promotion's administration. Personal information collected in connection with a promotion will be used and disclosed as set out in both this Policy and the applicable Official Rules.
                  </p>
                </section>

                <p className="text-sm text-muted-foreground">
                  Last reviewed: Aug 26, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default PrivacyPolicy;