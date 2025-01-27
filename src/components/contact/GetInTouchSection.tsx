interface GetInTouchSectionProps {
  className?: string;
}

export const GetInTouchSection = ({ className = "" }: GetInTouchSectionProps) => {
  return (
    <section className={`py-8 md:py-16 lg:py-24 bg-marley-light ${className}`}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-16 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans text-marley-primary mb-4 md:mb-6 leading-[0.95]">
            GET IN TOUCH
          </h2>
          <p className="text-base md:text-lg font-sans text-marley-primary/80 mb-6 md:mb-8 max-w-2xl mx-auto">
            Thank you for visiting Marley Co.! We're so excited to have you here as we prepare to launch our premium diaper bag collection. The overwhelming support and enthusiasm from our fans have been truly incredible—your excitement fuels our passion to deliver the very best for modern parents.
          </p>
        </div>
      </div>
    </section>
  );
};