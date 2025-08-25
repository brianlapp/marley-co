import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const GiveawayFAQ = () => {
  return (
    <section className="py-16 bg-marley-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-marley-dark mb-8 text-center">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="bg-white rounded-lg">
          <AccordionItem value="item-1">
            <AccordionTrigger className="px-6 text-marley-dark text-left">
              Is the giveaway free to enter?
            </AccordionTrigger>
            <AccordionContent className="px-6 text-marley-primary">
              Yes. There is no purchase necessary.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="px-6 text-marley-dark text-left">
              How will I know if I won?
            </AccordionTrigger>
            <AccordionContent className="px-6 text-marley-primary">
              We will email the selected entrant at the address used to sign up. You must respond within 3 business days to claim your prize.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="px-6 text-marley-dark text-left">
              Is this available in Canada?
            </AccordionTrigger>
            <AccordionContent className="px-6 text-marley-primary">
              Yes. Open to legal residents of Canada who are age of majority in their province or territory. Québec excluded if required by your legal team.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="px-6 text-marley-dark text-left">
              How often do you run giveaways?
            </AccordionTrigger>
            <AccordionContent className="px-6 text-marley-primary">
              We run special giveaways throughout the year and share early access with our email subscribers.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger className="px-6 text-marley-dark text-left">
              Will you spam me?
            </AccordionTrigger>
            <AccordionContent className="px-6 text-marley-primary">
              No. We send helpful updates, occasional promos, and new product news. You can unsubscribe anytime with one click.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="text-center mt-12">
          <p className="text-lg text-marley-primary leading-relaxed">
            Enter our Marley Co diaper bag giveaway for a chance to win a premium, stylish diaper bag designed for Canadian parents. 
            With insulated bottle pockets, a padded laptop sleeve, and wipe-clean materials, this modern diaper backpack keeps you 
            organized on the go. Sign up in seconds for your chance to win and discover why Marley Co diaper bags are a favourite 
            among new and expecting parents in Canada.
          </p>
        </div>
      </div>
    </section>
  );
};