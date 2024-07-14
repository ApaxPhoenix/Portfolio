import {Main, Section, Container} from "@/components/craft";
import Hero from "@/components/hero";
import Cta from "@/components/cta";
import Faq from "@/components/faq";
import Header from "@/components/header";
import Feature from "@/components/feature";
import Footer from "@/components/footer";
import {Toaster} from "@/components/ui/toaster"

export default function Home() {
    return (
        <Main>
            <Section>
                <Container>
                    <Hero/>
                    <Cta/>
                    <Faq/>
                    <Feature/>
                    <Header/>
                    <Footer/>
                    <Toaster/>
                </Container>
            </Section>
        </Main>
    );
}
