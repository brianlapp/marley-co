import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { GiveawayHero } from "@/components/giveaway/GiveawayHero";
import { WhyParentsLove } from "@/components/giveaway/WhyParentsLove";
import { GiveawayDetails } from "@/components/giveaway/GiveawayDetails";
import { HowToEnter } from "@/components/giveaway/HowToEnter";
import { WhoShouldEnter } from "@/components/giveaway/WhoShouldEnter";
import { ParentPeaceOfMind } from "@/components/giveaway/ParentPeaceOfMind";
import { GiveawayFAQ } from "@/components/giveaway/GiveawayFAQ";
import { LegalFooter } from "@/components/giveaway/LegalFooter";
import { useEffect } from "react";

const DipaerBagGiveaway = () => {
  useEffect(() => {
    // Update meta tags for this page
    document.title = "Marley Co Diaper Bag Giveaway Canada - Enter To Win our Premium Diaper Bag";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Enter the Marley Co diaper bag giveaway for your chance to win a premium, stylish diaper bag with insulated pockets and wipe-clean design. Free entry. Canada only.');
    }

    // Add FAQ schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is the giveaway free to enter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. There is no purchase necessary."
          }
        },
        {
          "@type": "Question", 
          "name": "How will I know if I won?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We will email the selected entrant at the address used to sign up. You must respond within 3 business days to claim your prize."
          }
        },
        {
          "@type": "Question",
          "name": "Is this available in Canada?", 
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Open to legal residents of Canada who are age of majority in their province or territory. Québec excluded if required by your legal team."
          }
        },
        {
          "@type": "Question",
          "name": "How often do you run giveaways?",
          "acceptedAnswer": {
            "@type": "Answer", 
            "text": "We run special giveaways throughout the year and share early access with our email subscribers."
          }
        },
        {
          "@type": "Question",
          "name": "Will you spam me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. We send helpful updates, occasional promos, and new product news. You can unsubscribe anytime with one click."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      // Cleanup schema on unmount
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-marley-light">
      <Navigation />
      <GiveawayHero />
      <WhyParentsLove />
      <GiveawayDetails />
      <HowToEnter />
      <WhoShouldEnter />
      <ParentPeaceOfMind />
      <GiveawayFAQ />
      <LegalFooter />
      <Footer />
      <BackToTop />
    </main>
  );
};

export default DipaerBagGiveaway;