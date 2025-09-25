import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-primary-indigo focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "gradient-primary text-white shadow-medium hover:shadow-bold hover:scale-105",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 shadow-medium hover:shadow-bold",
        outline:
          "border-2 border-neutral-black/20 bg-white text-neutral-black hover:border-primary-indigo hover:text-primary-indigo hover:bg-primary-indigo/5",
        secondary:
          "bg-neutral-gray text-neutral-black hover:bg-neutral-gray/80 shadow-soft",
        ghost:
          "text-neutral-black hover:bg-neutral-gray/50 hover:text-primary-indigo",
        link: "text-primary-indigo underline-offset-4 hover:underline hover:text-primary-blue",
        gradient: "gradient-primary text-white shadow-bold hover:shadow-xl hover:scale-105",
      },
      size: {
        default: "h-11 px-6 py-2 rounded-xl text-sm has-[>svg]:px-4",
        sm: "h-9 rounded-lg gap-1.5 px-4 text-sm has-[>svg]:px-3",
        lg: "h-12 rounded-2xl px-8 text-base has-[>svg]:px-6",
        xl: "h-14 rounded-2xl px-10 text-lg has-[>svg]:px-8",
        icon: "size-11 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
