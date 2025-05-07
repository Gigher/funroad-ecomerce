import * as React from "react";

import { tv } from "tailwind-variants";

import { cn } from "@/lib/utils";

const card = tv({
  slots: {
    card: "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
    cardHeader:
      "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
    cardTitle: "leading-none font-semibold",
    cardDescription: "text-muted-foreground text-sm",
    cardAction:
      "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
    cardContent: "px-6",
    cardFooter: "flex items-center px-6 [.border-t]:pt-6",
  },
});

const {
  card: cardClassname,
  cardAction,
  cardContent,
  cardDescription,
  cardFooter,
  cardHeader,
  cardTitle,
} = card();

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(cardClassname(), className)}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(cardHeader(), className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(cardTitle(), className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn(cardDescription(), className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(cardAction(), className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn(cardContent(), className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(cardFooter(), className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
