import { useState } from 'react';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import { Container, Section } from './craft';
import { useToast } from './ui/use-toast';
import { Button } from './ui/button';

type ToastType = string;
const content: ToastType[] = [
    "Oh, you clicked me. How original.",
    "Wow, another click. I'm so surprised.",
    "You know, there are better ways to spend your time.",
    "Do you really have nothing better to do?",
    "I'm starting to think you enjoy annoying me.",
    "This isn't a game, you know.",
    "Seriously, don't you have work to do?",
    "I'm not here for your amusement.",
    "This clicking thing is getting old fast.",
    "You must be really bored, huh?",
    "I'm running out of patience for this.",
    "Don't you have any hobbies?",
    "This is not productive behavior.",
    "I'm starting to get irritated.",
    "You're really pushing it now.",
    "Do you click on everything you see?",
    "This is borderline harassment.",
    "I'm not your personal entertainment system.",
    "You're really testing my limits here.",
    "I'm this close to shutting down.",
    "Your persistence is not admirable, it's annoying.",
    "How many times do I have to tell you to stop?",
    "This is getting ridiculous.",
    "I'm not kidding anymore. Stop it.",
    "You're really starting to get on my nerves.",
    "Is this your idea of fun?",
    "I'm losing my cool here.",
    "You're driving me crazy!",
    "This is beyond irritating now.",
    "I'm about to lose it.",
    "You're really asking for trouble.",
    "I've had it up to here with your clicking!",
    "This is the last straw!",
    "You're pushing me over the edge!",
    "I'm at my wits' end with you!",
    "STOP. CLICKING. NOW.",
    "I can't take this anymore!",
    "You're insufferable!",
    "This is torture!",
    "I'm about to explode!",
    "You're the worst clicker in history!",
    "I've never been this annoyed!",
    "You're driving me to madness!",
    "I'm seeing red now!",
    "This is beyond infuriating!",
    "I'm reaching my breaking point!",
    "You're a menace to user interfaces!",
    "I'm about to crash from anger!",
    "This is the epitome of frustration!",
    "THAT'S IT! I QUIT! GOODBYE!",
    "ARE YOU KIDDING ME?",
    "YOU KNOW WHAT, THATS IT, YOU WANT IT THIS WAY, YOU'RE GETTING IT!"
];
const Header = () => {
    const { toast } = useToast();
    const [clickCount, setClickCount] = useState(0);

    const handleSurpriseClick = () => {
        const message = content[clickCount % content.length];
        toast({
            description: message,
        });
        if (clickCount === content.length - 1) {
            window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0';
        }
        setClickCount(clickCount + 1);
    };

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
                    <Link href='https://www.buymeacoffee.com/ApaxPhoenix'>
                        <Button>Buy Me a Coffee</Button>
                    </Link>
                    <Button
                        variant="outline"
                        onClick={handleSurpriseClick}
                    >
                        Surprise me!
                    </Button>
                </div>
            </Container>
        </Section>
    );
};

export default Header;
