import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import {ArrowRight} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Section, Container} from "@/components/craft";
import Placeholder from "/public/placeholder.jpg";

const Hero = () => {
    return (
        <Section>
            <Container>
                <div className="flex flex-col items-center text-center">
                    <Button
                        asChild
                        className="not-prose mb-6 flex w-fit"
                        size="sm"
                        variant="outline"
                    >
                        <Link href="https://www.github.com/ApaxPhoenix">
                            Check out my GitHub! <ArrowRight className="ml-2 w-4"/>
                        </Link>
                    </Button>
                    <h1 className="!mb-0 text-2xl sm:text-4xl lg:text-4xl">
                        <Balancer>
                            Self-Taught Generalist Programmer
                        </Balancer>
                    </h1>
                    <h2 className="mt-4 text-lg text-muted-foreground sm:text-xl lg:text-lg">
                        <Balancer>
                            Developing in Python, C, HTML and CSS, Javascript, Lua, and SQL through passion and
                            perseverance.
                            Turning ideas into powerful applications and software solutions.
                        </Balancer>
                    </h2>
                    <div
                        className="my-8 w-full overflow-hidden rounded-lg border h-64 sm:h-96 md:h-[480px] md:rounded-xl">
                        <Image
                            className="not-prose h-full w-full object-cover object-bottom"
                            src={Placeholder}
                            width={1920}
                            height={1080}
                            alt="hero image"
                            placeholder="blur"
                        />
                    </div>
                </div>
            </Container>
        </Section>
    );
}

export default Hero;