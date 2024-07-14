import Link from "next/link";
import Balancer from "react-wrap-balancer";
import {ArrowRight} from "lucide-react";
import {Section, Container} from "@/components/craft";
import {Button} from "@/components/ui/button";

const Hero = () => {
    return (
        <Section>
            <Container>
                <div>
                    <Button asChild className="mb-6 w-fit" size="sm" variant="outline">
                        <Link className="not-prose" href="https://www.youtube.com/channel/YOUR_CHANNEL_ID">
                            Explore my YouTube channel<ArrowRight className="w-4"/>
                        </Link>
                    </Button>
                    <h1>
                        <Balancer>Welcome to my Portfolio!</Balancer>
                    </h1>
                    <h3 className="text-muted-foreground">
                        <Balancer>
                            Originally, this was supposed to be a picture placeholder, but for some design efforts, I didn&apos;t happen. 
                            I lost track, became enraged, and now it&apos;s all messed up, and I&apos;m being very specific so I could use text space, 
                            and not make it look weird. Also, watch this video down below, it&apos;s very cool.
                        </Balancer>
                    </h3>
                    <div className="not-prose my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
                        <iframe
                            className="w-full h-full border-none"
                            src="https://www.youtube.com/embed/UjEngEpiJKo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="The Limits of Human Knowledge"
                        ></iframe>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Hero;