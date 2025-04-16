import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question:
      "What can I use Grimo for?",
    answer: "You can use Grimo for literally any writing task - blogs, tweets, DMs, comments, professional documents, your creativity is the limit. After all, Grimo is for expression.",
    value: "item-5",
  },
  {
    question: "How is Grimo different?",
    answer: "Unlike other AI writing tools that 'generate' content for you, Grimo collaborates with you in the writing process. It enhances your writing abilities rather than replacing them, allowing you to express your ideas freely without limitations.",
    value: "item-1",
  },
  {
    question: "Which AI models can I use in Grimo?",
    answer:
      "Grimo utilizes all latest AI models including GPT 4.1, DeepSeek R1, Gemini 2.5 Pro, Claude 3.7 Sonnet, and many others to provide powerful editing capabilities. Trust me, the Model Listing will be updated hours within any top-tier model launch.",
    value: "item-2",
  },
  {
    question:
      "Are the results reliable?",
    answer:
      "Grimo integrates web search, knowledge base, and even real-time Reddit information directly into the editor. These allow you to access credible sources and write with confidence.",
    value: "item-3",
  },
  {
    question: "Prompting is hard, what can I do?",
    answer: "Don't worry, Grimo can generate and improve prompts for you. It also provides access to production-level templates from the community, making it easier to cater to different use cases.",
    value: "item-4",
  },

];

export const FAQSection = () => {
  return (
    <section id="faq" className="container scroll-mt-20 mt-16 md:mt-32">
      {/* <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div> */}

      <div className = "flex gap-3 flex-col items-start">
        {/* <Badge variant="brand" className="">Features</Badge> */}

        <h2 className="text-2xl md:text-3xl font-semibold">
          Common Questions
        </h2>

        {/* <h3 className="md:w-1/2 text-base text-muted-foreground mb-8">
          GrimoAI does not write for you. It writes with you.
        </h3> */}
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value} className=" p-0 border-none">
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
