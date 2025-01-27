import { GetInTouchSection } from "./contact/GetInTouchSection";
import { ContactFormSection } from "./contact/ContactFormSection";
import { StayUpdatedSection } from "./contact/StayUpdatedSection";

export const ContactSection = () => {
  return (
    <div className="min-h-screen">
      <GetInTouchSection />
      <ContactFormSection />
      <StayUpdatedSection />
    </div>
  );
};