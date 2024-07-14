import React from "react";
import {ArrowUpRight} from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {Section, Container} from "@/components/craft";

type FaqItem = {
    question: string;
    answer: string;
    link?: string;
};

const content: FaqItem[] = [
    {
        question: "Who are you?",
        answer:
            "I am a high school student who started programming at the early age of 9. Over the years, I have improved and discovered the world of computers. My specialty is full stack and server-side development.",
    },
    {
        question: "What do you like to do in your free time?",
        answer:
            "In my free time, I would prefer to do absolutely nothing. But jokes aside, I know that if I do that, I won't progress in anything. So, I engage in various activities like playing instruments, practicing a new language, reading, or playing sports, just like a normal teenager.",
    },
    {
        question: "What projects have you worked on?",
        answer:
            "I have worked on so many projects, most of which are disclosed because the code is so awfully bad that I really want to destroy my computer and feel so embarrased. And don't get me started with C++, I despise that language.",
        link: "https://www.github.com/ApaxPhoenix",
    },
    {
        question: "What are your future goals?",
        answer:
           " My ultimate goal is to earn a degree from MIT. This ambition drives every project I undertake and every skill I develop. I'm dedicated to turning this dream into reality.",
    },
    {
        question: "What challenges have you faced in programming?",
        answer:
            "Eh, everything is a challenge for me because I don't have formal education and I'm self-taught. Really complex subjects like neural networks and low-level hardware control are areas I'm very interested in, but without any guidance, I take my time because it's really hard but still complete it.",
    },
    {
        question: "How do you stay updated with the latest technology trends?",
        answer:
            "Honestly, I don't! I rarely use social media, and it's hard to keep up because there are so many updates, like new JavaScript frameworks popping up out of nowhere. But I do my best to stay in touch with the latest updates.",
    },
];

const Faq = () => {
    return (
        <Section>
            <Container>
                <h3 className="!mt-0">Frequently Asked Questions</h3>
                <h4 className="text-muted-foreground">
                    Can&apos;t find the answer you&apos;re looking for? Reach out to our
                    customer support team.
                </h4>
                <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
                    {content.map((item, index) => (
                        <Accordion key={index} type="single" collapsible>
                            <AccordionItem
                                value={item.question}
                                className="rounded-md border bg-muted/20 px-4 transition-all hover:bg-muted/50"
                            >
                                <AccordionTrigger className="text-left hover:no-underline">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-base md:w-3/4">
                                    {item.answer}
                                    {item.link && (
                                        <a
                                            href={item.link}
                                            className="mt-2 flex w-full items-center opacity-60 transition-all hover:opacity-100"
                                        >
                                            Learn more <ArrowUpRight className="ml-1" size="16"/>
                                        </a>
                                    )}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Faq;
