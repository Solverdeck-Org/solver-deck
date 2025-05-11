import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/motion-primitives/accordion";
import { ChevronUp } from "lucide-react";
import { faqData } from "@/data/faqs";

const FAQSection = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10 md:py-24 bg-white">
      <h2 className="text-6xl mb-4 text-[#193cb8]">FAQs</h2>

      <Accordion
        className="flex w-full flex-col divide-y divide-[#193cb8]/20 px-5 md:px-20"
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {faqData.map((item) => (
          <AccordionItem
            key={item.id}
            className="py-2"
            value={item.id}
          >
            <AccordionTrigger className="w-full py-2 md:py-10 text-left text-[12px] md:text-xl text-black">
              <div className="flex items-center justify-between">
                <div>{item.question}</div>
                <ChevronUp className="h-4 w-4 text-[#193cb8] transition-transform duration-200 group-data-expanded:-rotate-180" />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[#193cb8] text-[12px] md:text-xl font-normal pt-5">{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;
