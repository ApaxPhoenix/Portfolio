import {cn} from "@/lib/utils";
import {ReactNode} from "react";

type LayoutProps = {
    children: ReactNode;
    className?: string;
};

type MainProps = {
    children: ReactNode;
    className?: string;
    id?: string;
};

type SectionProps = {
    children: ReactNode;
    className?: string;
    id?: string;
};

type ContainerProps = {
    children: ReactNode;
    className?: string;
    id?: string;
};

type ArticleProps = {
    children: ReactNode;
    className?: string;
    id?: string;
};

const Layout = ({children, className}: LayoutProps) => {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={cn("scroll-smooth antialiased focus:scroll-auto", className)}
        >
        {children}
        </html>
    );
};

const Main = ({children, className, id}: MainProps) => {
    return (
        <main
            className={cn(
                // `Main` Specific Styles
                "max-w-none prose-p:m-0",
                // General Prose
                "prose prose-neutral prose:font-sans dark:prose-invert xl:prose-lg",
                // Prose Headings
                "prose-headings:font-normal",
                // Prose Strong
                "prose-strong:font-semibold",
                // Inline Links
                "prose-a:underline prose-a:decoration-primary/50 prose-a:underline-offset-2 prose-a:text-foreground/75 prose-a:transition-all",
                // Inline Link Hover
                "hover:prose-a:decoration-primary hover:prose-a:text-foreground",
                // Blockquotes
                "prose-blockquote:not-italic",
                // Pre and Code Blocks
                "prose-pre:border prose-pre:bg-muted/25 prose-pre:text-foreground",
                className
            )}
            id={id}
        >
            {children}
        </main>
    );
};

const Section = ({children, className, id}: SectionProps) => {
    return (
        <section className={cn("py-8 md:py-12", className)} id={id}>
            {children}
        </section>
    );
};

const Container = ({children, className, id}: ContainerProps) => {
    return (
        <div className={cn("mx-auto max-w-5xl", "p-6 sm:p-8", className)} id={id}>
            {children}
        </div>
    );
};

const Article = ({children, className, id}: ArticleProps) => {
    return (
        <article
            className={cn(
                // General Prose
                "prose prose-neutral prose:font-sans dark:prose-invert xl:prose-lg max-w-none",
                // Prose Headings
                "prose-headings:font-normal",
                // Prose Paragraphs
                "prose-p:mb-0",
                // Prose Strong
                "prose-strong:font-semibold",
                // Inline Links
                "prose-a:underline prose-a:decoration-primary/50 prose-a:underline-offset-2 prose-a:text-foreground/75 prose-a:transition-all",
                // Inline Link Hover
                "hover:prose-a:decoration-primary hover:prose-a:text-foreground",
                // Blockquotes
                "prose-blockquote:not-italic",
                // Pre and Code Blocks
                "prose-pre:border prose-pre:bg-muted/25",
                className
            )}
            id={id}
        >
            {children}
        </article>
    );
};

export {Layout, Main, Section, Container, Article};