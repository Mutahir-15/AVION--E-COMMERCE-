import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function FAQ() {
    return (
        <main className="max-w-[1440px] mx-auto">
             <h1 className='text-3xl font-extrabold mb-5 lg:mb-5 mt-5 lg:mt-10 text-customColors-dark-primary'>FAQ&apos;s:</h1>
      <Accordion type="single" collapsible className="w-[700px]">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl font-semibold">What materials do you use for your furniture?</AccordionTrigger>
          <AccordionContent className="text-lg">
          We use high-quality materials such as solid wood, engineered wood, metal,<br/> and premium upholstery fabrics to ensure durability and style.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl font-semibold">Do you offer a warranty on your products?</AccordionTrigger>
          <AccordionContent className="text-lg">
          Yes, our furniture comes with a standard warranty. Warranty details vary<br/> by product and can be found in the product description.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl font-semibold">How do I maintain my wooden furniture?</AccordionTrigger>
          <AccordionContent className="text-lg">
          Use a soft, dry cloth to clean the surface regularly. Avoid direct sunlight<br/> and moisture to maintain its shine and durability.
          </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl font-semibold">Can I visit your showroom to see the furniture in person?</AccordionTrigger>
          <AccordionContent className="text-lg">
          Yes, our showroom is located at [address]. You’re welcome to visit during our business hours.
          </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
          <AccordionTrigger className="text-xl font-semibold">Is cash-on-delivery available?</AccordionTrigger>
          <AccordionContent className="text-lg">
          Yes, we offer cash-on-delivery for selected regions.
          </AccordionContent>
          </AccordionItem>
      </Accordion>
    </main>
    )
  }
