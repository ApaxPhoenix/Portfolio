import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import {Section, Container} from "@/components/craft";
import Logo from "/public/logo.svg";

const Footer = () => {
    return (
        <footer className="not-prose border-t">
            <Section>
                <Container className="grid gap-6">
                    <div className="grid gap-6">
                        <Link href="https://github.com">
                            <h3 className="sr-only">Hosted on Github Pages</h3>
                            <Image
                                src={Logo}
                                alt="Logo"
                                width={120}
                                height={27.27}
                                className="transition-all hover:opacity-75 dark:invert"
                            />
                        </Link>
                        <p>
                            <Balancer>
                                A simple portfolio, fast, and slick, designed to highlight my life aswell.
                            </Balancer>
                        </p>
                        <p className="text-muted-foreground">
                            ©{" "}
                            <a href="https://github.com/ApaxPhoenix">Andrew Hernandez</a>. All rights reserved.
                            2024-present.
                        </p>
                    </div>
                </Container>
            </Section>
        </footer>
    );
}

export default Footer;
