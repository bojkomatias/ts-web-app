import { clsx } from "clsx"
import type { JSX } from "solid-js"

const dateTypes = ["date", "datetime-local", "month", "time", "week"]
type DateType = (typeof dateTypes)[number]

// type InputProps = {
//   type?:
//   | "email"
//   | "number"
//   | "password"
//   | "search"
//   | "tel"
//   | "text"
//   | "url"
//   | DateType
// } & { invalid?: boolean } &

export const Input = ({
	invalid,
	...props
}: JSX.InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean }) => {
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
				// Invalid state
				"before:has-[[data-invalid]]:shadow-red-500/10",
			])}
		>
			<input
				{...(invalid ? { "data-invalid": "data-invalid" } : {})}
				{...props}
				class={clsx([
					// Date classes
					props.type &&
						dateTypes.includes(props.type) && [
							"[&::-webkit-datetime-edit-fields-wrapper]:p-0",
							"[&::-webkit-date-and-time-value]:min-h-[1.5em]",
							"[&::-webkit-datetime-edit]:inline-flex",
							"[&::-webkit-datetime-edit]:p-0",
							"[&::-webkit-datetime-edit-year-field]:p-0",
							"[&::-webkit-datetime-edit-month-field]:p-0",
							"[&::-webkit-datetime-edit-day-field]:p-0",
							"[&::-webkit-datetime-edit-hour-field]:p-0",
							"[&::-webkit-datetime-edit-minute-field]:p-0",
							"[&::-webkit-datetime-edit-second-field]:p-0",
							"[&::-webkit-datetime-edit-millisecond-field]:p-0",
							"[&::-webkit-datetime-edit-meridiem-field]:p-0",
						],
					// Basic layout
					"relative block w-full appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]",
					// Typography
					"text-base/6 text-default-950 dark:text-white placeholder:text-default-500 sm:text-sm/6",
					// Border
					"border border-default-950/10 dark:border-white/10 dark:hover:border-white/20hover:border-default-950/20",
					// Background color
					"bg-transparent dark:bg-white/5",
					// Hide default focus styles
					"focus:outline-none",
					// Invalid state
					"data-[invalid]:border-red-500 data-[invalid]:dark:border-red-500 data-[invalid]:hover:border-red-500 data-[invalid]:hover:dark:border-red-500",
					// Disabled state
					"dark:hover:data-[disabled]:border-white/15 data-[disabled]:border-default-950/20 data-[disabled]:dark:border-white/15 data-[disabled]:dark:bg-white/[2.5%]",
				])}
			/>
		</span>
	)
}

export function InputGroup({ children }: JSX.HTMLAttributes<HTMLSpanElement>) {
	return (
		<span
			data-slot="control"
			class={clsx(
				"relative isolate block",
				"[&_input]:has-[[data-slot=icon]:last-child]:pr-10 sm:[&_input]:has-[[data-slot=icon]:last-child]:pr-8 [&_input]:has-[[data-slot=icon]:first-child]:pl-10 sm:[&_input]:has-[[data-slot=icon]:first-child]:pl-8",
				"[&>[data-slot=icon]]:pointer-events-none [&>[data-slot=icon]]:absolute [&>[data-slot=icon]]:top-3 sm:[&>[data-slot=icon]]:top-2.5 [&>[data-slot=icon]]:z-10 [&>[data-slot=icon]]:size-5 sm:[&>[data-slot=icon]]:size-4",
				"[&>[data-slot=icon]:last-child]:right-3 sm:[&>[data-slot=icon]:last-child]:right-2.5 [&>[data-slot=icon]:first-child]:left-3 sm:[&>[data-slot=icon]:first-child]:left-2.5",
				"[&>[data-slot=icon]]:text-default-500 dark:[&>[data-slot=icon]]:text-default-400",
			)}
		>
			{children}
		</span>
	)
}
