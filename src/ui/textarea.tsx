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
				"after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-transparent sm:after:focus-within:ring-2 sm:after:focus-within:ring-blue-500 after:ring-inset",

				// Disabled state
				"before:has-[[data-disabled]]:bg-muted/20 has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:shadow-none",

				// Invalid state
				"before:has-[[data-invalid]]:shadow-destructive/10",
			])}
		>
			<textarea
				class={clsx([
					"relative block w-full appearance-none rounded px-2 py-1 sm:px-2 sm:py-1",

					// Typography
					"text-base/6 text-foreground placeholder:text-muted-foreground/50 sm:text-sm/6",

					// Border
					"border border-border hover:border-foreground/20",

					// Background color
					"bg-hover-card",

					// Hide default focus styles
					"focus:border-foreground/20 focus:outline-none",

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
