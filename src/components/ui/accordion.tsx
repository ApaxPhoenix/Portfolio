import {forwardRef, ElementRef, ComponentPropsWithoutRef} from "react";
import {Root, Item, Trigger, Header, Content} from "@radix-ui/react-accordion"
import {ChevronDown} from "lucide-react"
import {cn} from "@/lib/utils"

const AccordionItem = forwardRef<
    ElementRef<typeof Item>,
    ComponentPropsWithoutRef<typeof Item>
>(({className, ...props}, ref) => (
    <Item
        ref={ref}
        className={cn("border-b", className)}
        {...props}
    />
))

const AccordionTrigger = forwardRef<
    ElementRef<typeof Trigger>,
    ComponentPropsWithoutRef<typeof Trigger>
>(({className, children, ...props}, ref) => (
    <Header className="flex">
        <Trigger
            ref={ref}
            className={cn(
                "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                className
            )}
            {...props}
        >
            {children}
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200"/>
        </Trigger>
    </Header>
))

const AccordionContent = forwardRef<
    ElementRef<typeof Content>,
    ComponentPropsWithoutRef<typeof Content>
>(({className, children, ...props}, ref) => (
    <Content
        ref={ref}
        className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        {...props}
    >
        <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </Content>
))

const Accordion = Root
AccordionItem.displayName = "AccordionItem"
AccordionTrigger.displayName = Trigger.displayName
AccordionContent.displayName = Content.displayName
export {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
}
