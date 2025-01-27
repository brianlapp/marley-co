import { GetInTouchSection } from "./contact/GetInTouchSection";
import { ContactFormSection } from "./contact/ContactFormSection";
import { StayUpdatedSection } from "./contact/StayUpdatedSection";
import { AdvertSection } from "./contact/AdvertSection";

export const ContactSection = () => {
  return (
    <div className="min-h-screen">
      <GetInTouchSection />
      <ContactFormSection />
      <AdvertSection />
      <StayUpdatedSection />
    </div>
  );
};