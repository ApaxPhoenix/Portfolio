import {useState} from "react";
import {object, string, TypeOf} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import Balancer from "react-wrap-balancer";
import {Section, Container} from "@/components/craft";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {useToast} from "@/components/ui/use-toast";

const contactFormSchema = object({
    name: string().min(1, {message: "Name is required"}),
    email: string().email({message: "Please enter a valid email address."}),
    message: string().min(1, {message: "Message is required"}),
});

const Contact = () => {
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<string | null>(null);

    const form = useForm<TypeOf<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    async function onSubmit(data: TypeOf<typeof contactFormSchema>) {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: data.name,
                    subject: `New message from ${data.name}`,
                    text: `From: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
                }),
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Success:", result.message);
                toast({
                    title: "Message sent successfully!",
                    description: "Thank you for contacting me.",
                });
                form.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            toast({
                title: "Uh oh! Something went wrong.",
                description: "Failed to send message. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Section className="border-b">
            <Container className="not-prose">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-4xl mb-2">Contact Me</h1>
                    <h3 className="sm:text-lg lg:text-2xl text-muted-foreground mb-5">
                        <Balancer className="font-light">
                            Please fill out the form below to get in touch. If I have time, which mostly I do, I will
                            respond as swiftly as possible.
                        </Balancer>
                    </h3>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-4 text-left w-full max-w-md"
                        >
                            <FormField
                                control={form.control}
                                name="name"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="w-full"
                                                placeholder="Enter your name"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="w-full"
                                                placeholder="Enter your email address"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                className="w-full"
                                                placeholder="Enter your message"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <Button className="w-full" type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </Button>
                        </form>
                    </Form>
                </div>
            </Container>
        </Section>
    );
};

export default Contact;