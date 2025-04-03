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
      "How is Grimo different from other AI writing tools?",
    answer: "Unlike other AI writing tools that generate content for you, Grimo collaborates with you in the writing process. It enhances your writing abilities rather than replacing them, allowing you to express your ideas freely without limitations.",
    value: "item-5",
  },
  {
    question: "What can I use Grimo for?",
    answer: "You can use Grimo for any writing task - articles, essays, creative writing, professional documents, and more. The platform is designed to accommodate various writing needs while providing AI assistance.",
    value: "item-1",
  },
  {
    question: "Which AI models does Grimo use?",
    answer:
      "Grimo utilizes several advanced AI models including DeepSeek R1, Claude 3.7 Sonnet, OpenAI GPT4, o3-mini, and others to provide powerful editing capabilities.",
    value: "item-2",
  },
  {
    question:
      "What research capabilities does Grimo offer?",
    answer:
      "Grimo integrates web search, file access, and Reddit information directly into the editor. This feature, called MCP (Multi-Context Processing), allows you to access credible sources and write with confidence.",
    value: "item-3",
  },
  {
    question: "How does Grimo handle prompts?",
    answer: "Grimo can generate and improve prompts for you. It also provides access to production-level templates from the community, making it easier to get started with effective prompts.",
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
