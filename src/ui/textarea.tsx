import type { HTMLArkProps } from "@ark-ui/solid";
import { clsx } from "clsx";

export const Textarea = (props: HTMLArkProps<"textarea">) => {
  return (
    <span
      data-slot="control"
      class={clsx([
        props.class,
        // Basic layout
        "relative block w-full",

        // Focus ring
        "after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-transparent after:ring-inset sm:after:focus-within:ring-2 sm:after:focus-within:ring-blue-500",

        // Disabled state
        "before:has-[[data-disabled]]:bg-muted/20 has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:shadow-none",

        // Invalid state
        "before:has-[[data-invalid]]:shadow-destructive/10",
      ])}
    >
      <textarea
        class={clsx([
          // Basic layout
          "relative block w-full appearance-none rounded py-1 px-2 sm:py-1 sm:px-2",

          // Typography
          "text-foreground placeholder:text-muted-foreground/50 text-base/6 sm:text-sm/6",

          // Border
          "border-line hover:border-muted-foreground/30 border",

          // Background color
          "bg-popover",

          // Hide default focus styles
          "focus:border-muted-foreground/50 focus:outline-none",

          // Invalid state
          "invalid:border-destructive! invalid:bg-destructive/10",

          // Disabled state
          "disabled:border-muted disabled:opacity-50",

          // Resizable
          "resize-y",
        ])}
        {...props}
      />
    </span>
  );
};
