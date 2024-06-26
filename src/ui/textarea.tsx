import { clsx } from "clsx"
import type { JSX } from "solid-js"

export const Textarea = ({
	resizable = true,
	...props
}: { resizable?: boolean } & JSX.HTMLAttributes<HTMLTextAreaElement>) => {
	return (
		<span
			data-slot="control"
			class={clsx([
				props.class,
				// Basic layout
				"relative block w-full",
				// Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
				"before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow",
				// Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
				"dark:before:hidden",
				// Focus ring
				"after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-transparent sm:after:focus-within:ring-2 sm:after:focus-within:ring-blue-500 after:ring-inset",
				// Disabled state
				"before:has-[[disabled]]:bg-default-950/5 has-[[disabled]]:opacity-50 before:has-[[disabled]]:shadow-none",
			])}
		>
			<textarea
				{...props}
				class={clsx([
					// Basic layout
					"relative block h-full w-full appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]",
					// Typography
					"text-base/6 text-default-950 dark:text-white placeholder:text-default-500 sm:text-sm/6",
					// Border
					"border border-default-950/10 dark:border-white/10 dark:hover:border-white/20hover:border-default-950/20",
					// Background color
					"bg-transparent dark:bg-white/5",
					// Hide default focus styles
					"focus:outline-none",
					// Invalid state
					"data-[invalid]:border-red-500 data-[invalid]:dark:border-red-600 data-[invalid]:hover:border-red-500 data-[invalid]:hover:dark:border-red-600",
					// Disabled state
					"dark:hover:disabled:border-white/15 disabled:border-default-950/20 disabled:dark:border-white/15 disabled:dark:bg-white/[2.5%]",
					// Resizable
					resizable ? "resize-y" : "resize-none",
				])}
			/>
		</span>
	)
}
