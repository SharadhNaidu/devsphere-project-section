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
    question: "What types of events and activities does DevSphere organize?",
    answer: "DevSphere hosts a variety of events, including hands-on workshops, hackathons, speaker sessions, and project collaborations. We focus on practical learning experiences that allow members to build real-world skills in Web 3.0 and open-source development.",
    value: "item-1",
  },
  {
    question: "How can I join DevSphere?",
    answer:
      "You can join the club by filling the form link provided in the website. We regularly open recruitment for new members, so keep an eye out for announcements, or connect with us on social media for updates.",
    value: "item-2",
  },
  {
    question:
      "I have already filled the form but haven't recvied any response. What should I do?",
    answer:
      "Once you’ve submitted the form, there’s nothing more required from your side. We recruit members on a rolling basis, so we kindly ask for your patience as we work to onboard new members. Our focus is on providing a quality experience, and we want to ensure that each member gets the attention they deserve. Rest assured, we’ll reach out as soon as a spot opens up for you!",
    value: "item-3",
  },
  {
    question: "How can I join the DevSphere core team?",
    answer:" Currently, we don’t have any open positions on the core team. However, if you believe you can bring unique value to DevSphere, feel free to share your portfolio and proof of work with one of our existing core members.",
    value: "item-4",
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
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
