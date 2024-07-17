import {ReactNode} from "react";
import {Section, Container} from "@/components/craft";
import Balancer from "react-wrap-balancer";
import {Code, Box, Braces} from "lucide-react";

type FeatureItem = {
    icon: ReactNode;
    title: string;
    description: string;
};

const content: FeatureItem[] = [
    {
        icon: <Code className="h-6 w-6"/>,
        title: "Front-End Developer",
        description:
            "I'm a front-end developer with creative and visually appealing and user-friendly websites. I have experience using JavaScript, TypeScript, HTML, CSS, WebAssembly, and PHP.",
    },
    {
        icon: <Box className="h-6 w-6"/>,
        title: "Versatile Language Skills",
        description:
            "I have extensive experience with languages such as Python, Lua, BASIC, and Perl, who are mostly unheard of these days, which allows me to tackle a wide range of projects.",
    },
    {
        icon: <Braces className="h-6 w-6"/>,
        title: "Low-Level Programming",
        description:
            "I have worked with C/C++ and a bit of assembly, enabling me to optimize performance-critical parts of applications and develop low-level systems.",
    },
];

const Feature = () => {
    return (
        <Section>
            <Container>
                <div className="flex flex-col gap-6">
                    <h3 className="text-4xl">
                        <Balancer>
                            Highlighting My Diverse Technical Expertise
                        </Balancer>
                    </h3>
                    <h4 className="text-2xl font-light opacity-70">
                        <Balancer>
                            From front-end development to low-level programming, just enough to know a little bit of
                            everything.
                        </Balancer>
                    </h4>

                    <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3">
                        {content.map(({icon, title, description}, index) => (
                            <div className="flex flex-col gap-4" key={index}>
                                {icon}
                                <h4 className="text-xl text-primary">{title}</h4>
                                <p className="text-base opacity-75">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Feature;
