import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Balancer from "react-wrap-balancer";
import { Section, Container } from "craft";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

const formSchema = zod.object({
  email: zod.string().email({
    message: "Please enter a valid email address.",
  }),
});

const Cta = () => {
  const form = useForm<zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  function onSubmit(values: zod.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Section>
      <Container className="flex flex-col items-center gap-4 text-center">
        <h2 className="!my-0">Let's Connect!</h2>
        <p className="text-lg opacity-70 md:text-2xl">
          <Balancer>
            Interested in my work? Have a project in mind? Drop your email below,
            and I'll get back to you as soon as possible.
          </Balancer>
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 flex h-fit items-center justify-center gap-2">
            <FormField control={form.control} name="email" render={({ field }) => (
              <FormControl>
                <Input className="md:w-64" placeholder="Your email address" {...field} />
              </FormControl>
            )} />
            <Button type="submit">Get in Touch</Button>
          </form>
        </Form>
      </Container>
    </Section>
  );
}

export default Cta;
