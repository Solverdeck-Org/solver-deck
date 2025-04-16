import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/motion-primitives/accordion";
import { ChevronUp } from "lucide-react";

const FAQSection = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 md:py-24">
      <h2 className="text-6xl mb-4 heading-gradient">FAQs</h2>

      <Accordion
        className="flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700 px-20"
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <AccordionItem value="getting-started" className="py-2">
          <AccordionTrigger className="w-full text-left text-zinc-950 dark:text-zinc-50">
            <div className="flex items-center justify-between">
              <div>What is SolverDeck?</div>
              <ChevronUp className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-zinc-500 dark:text-zinc-400">
              SolverDeck is a technology consulting firm specializing in AI
              integration, business automation, data analysis, and custom
              software development to help small businesses grow efficiently.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="animation-properties" className="py-2">
          <AccordionTrigger className="w-full text-left text-zinc-950 dark:text-zinc-50">
            <div className="flex items-center justify-between">
              <div>Who can benefit from SolverDeck's services?</div>
              <ChevronUp className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-zinc-500 dark:text-zinc-400">
              Our solutions are tailored for small to medium-sized businesses
              seeking to streamline operations, leverage data insights, and
              implement scalable technology solutions.​
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="advanced-usage" className="py-2">
          <AccordionTrigger className="w-full text-left text-zinc-950 dark:text-zinc-50">
            <div className="flex items-center justify-between">
              <div>What services does SolverDeck offer?</div>
              <ChevronUp className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-zinc-500 dark:text-zinc-400">
              We provide AI integration, business automation, data analysis, and
              custom software development services.​
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="community-and-support" className="py-2">
          <AccordionTrigger className="w-full text-left text-zinc-950 dark:text-zinc-50">
            <div className="flex items-center justify-between">
              <div>How does SolverDeck approach AI integration?</div>
              <ChevronUp className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-zinc-500 dark:text-zinc-400">
              We implement AI solutions tailored to your business needs, from
              chatbots to predictive analytics.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="community-and-support" className="py-2">
          <AccordionTrigger className="w-full text-left text-zinc-950 dark:text-zinc-50">
            <div className="flex items-center justify-between">
              <div>Can SolverDeck help automate my business processes?</div>
              <ChevronUp className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-zinc-500 dark:text-zinc-400">
              Yes, we streamline operations and reduce manual tasks with custom
              automation workflows.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="community-and-support" className="py-2">
          <AccordionTrigger className="w-full text-left text-zinc-950 dark:text-zinc-50">
            <div className="flex items-center justify-between">
              <div>
                What kind of software development services do you provide?
              </div>
              <ChevronUp className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-zinc-500 dark:text-zinc-400">
              We build tailored software solutions designed specifically for
              your business requirements.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="community-and-support" className="py-2">
          <AccordionTrigger className="w-full text-left text-zinc-950 dark:text-zinc-50">
            <div className="flex items-center justify-between">
              <div>How do I get started with SolverDeck?</div>
              <ChevronUp className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-zinc-500 dark:text-zinc-400">
              You can book a consultation through our website to discuss your
              business needs and how we can assist.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="community-and-support" className="py-2">
          <AccordionTrigger className="w-full text-left text-zinc-950 dark:text-zinc-50">
            <div className="flex items-center justify-between">
              <div>What is the typical project timeline?</div>
              <ChevronUp className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-zinc-500 dark:text-zinc-400">
              Project timelines vary based on complexity, but we strive to
              deliver efficient solutions promptly.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="community-and-support" className="py-2">
          <AccordionTrigger className="w-full text-left text-zinc-950 dark:text-zinc-50">
            <div className="flex items-center justify-between">
              <div>Do you offer ongoing support after project completion?</div>
              <ChevronUp className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-zinc-500 dark:text-zinc-400">
              Yes, we provide continuous support and maintenance to ensure
              long-term success.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="community-and-support" className="py-2">
          <AccordionTrigger className="w-full text-left text-zinc-950 dark:text-zinc-50">
            <div className="flex items-center justify-between">
              <div>What technologies does SolverDeck specialize in?</div>
              <ChevronUp className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-zinc-500 dark:text-zinc-400">
              We specialize in AI technologies, automation tools, data analytics
              platforms, and custom software development frameworks.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="community-and-support" className="py-2">
          <AccordionTrigger className="w-full text-left text-zinc-950 dark:text-zinc-50">
            <div className="flex items-center justify-between">
              <div>Can SolverDeck integrate with my existing systems?</div>
              <ChevronUp className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-zinc-500 dark:text-zinc-400">
              Yes, we design solutions that seamlessly integrate with your
              current infrastructure.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="community-and-support" className="py-2">
          <AccordionTrigger className="w-full text-left text-zinc-950 dark:text-zinc-50">
            <div className="flex items-center justify-between">
              <div>How is pricing determined?</div>
              <ChevronUp className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-zinc-500 dark:text-zinc-400">
              Pricing is based on project scope and complexity. We offer
              competitive rates tailored to your specific needs.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="community-and-support" className="py-2">
          <AccordionTrigger className="w-full text-left text-zinc-950 dark:text-zinc-50">
            <div className="flex items-center justify-between">
              <div>Do you offer packages or custom pricing?</div>
              <ChevronUp className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-zinc-500 dark:text-zinc-400">
              We provide both standard packages and customized pricing to fit
              various business requirements.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQSection;
