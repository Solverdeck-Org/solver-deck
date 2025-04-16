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
    <section className="flex flex-col items-center justify-center py-16 md:py-24">
      <h2 className="text-6xl mb-4 heading-gradient">FAQs</h2>

      <Accordion
        className="flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700 px-20"
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {faqData.map((item) => (
          <AccordionItem
            key={item.id}
            className="py-2"
            value={item.id}
          >
            <AccordionTrigger className="w-full text-left text-zinc-950 dark:text-zinc-50">
              <div className="flex items-center justify-between">
                <div>{item.question}</div>
                <ChevronUp className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50" />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-zinc-500 dark:text-zinc-400">{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;
