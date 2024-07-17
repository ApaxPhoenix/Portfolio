import Link from "next/link";
import Balancer from "react-wrap-balancer";
import {Container, Section} from "@/components/craft";
import {Button} from "@/components/ui/button";

const Header = () => {
    return (
        <Section>
            <Container className="flex flex-col text-center">
                <h1 className="!mb-0">Accepting all donations!</h1>
                <h3 className="text-muted-foreground">
                    <Balancer>
                        If you enjoy my work and want to support my projects,
                        consider buying me a coffee. Every cup helps!
                    </Balancer>
                </h3>
                <div className="mx-auto !mt-8 flex items-center gap-2">
                    <Link href="https://www.buymeacoffee.com/ApaxPhoenix">
                        <Button>Buy Me a Coffee</Button>
                    </Link>
                </div>
            </Container>
        </Section>
    );
};

export default Header;
