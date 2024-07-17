import {Main, Section, Container} from "@/components/craft";
import Hero from "@/components/hero";
import Faq from "@/components/faq";
import Header from "@/components/header";
import Contact from "@/components/contact";
import Feature from "@/components/feature";
import Footer from "@/components/footer";
import {Toaster} from "@/components/ui/toaster";

export default function Home() {
    return (
        <Main>
            <Section>
                <Container>
                    <Hero/>
                    <Faq/>
                    <Feature/>
                    <Contact />
                    <Header/>
                    <Footer/>
                    <Toaster/>
                </Container>
            </Section>
        </Main>
    );
}