import { Checkbox as KobalteCheckbox } from "@kobalte/core/checkbox"
import type { CheckboxRootProps } from "@kobalte/core/checkbox"
import { clsx } from "clsx"
import { CheckIcon } from "lucide-solid"
import type { JSX } from "solid-js"

const base = [
	// Basic layout
	"relative isolate flex size-[1.125rem] items-center justify-center rounded-[0.3125rem] sm:size-4",
	// Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
	"before:absolute before:inset-0 before:-z-10 before:rounded-[calc(0.3125rem-1px)] before:bg-white before:shadow",
	// Background color when checked
	"before:group-data-[state='checked']:bg-[--checkbox-checked-bg]",
	// Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
	"dark:before:hidden",
	// Background color applied to control in dark mode
	"dark:bg-white/5 dark:group-data-[state='checked']:bg-[--checkbox-checked-bg]",
	// Border
	"border border-default-950/15 group-data-[state='checked']:border-transparent group-data-[state='checked']:group-hover:border-transparent group-hover:border-default-950/30 group-data-[state='checked']:bg-[--checkbox-checked-border]",
	"dark:border-white/15 dark:group-data-[state='checked']:border-white/5 dark:group-data-[state='checked']:group-hover:border-white/5 dark:group-hover:border-white/30",
	// Inner highlight shadow
	"after:absolute after:inset-0 after:rounded-[calc(0.3125rem-1px)] after:shadow-[inset_0_1px_theme(colors.white/15%)]",
	"dark:after:-inset-px dark:after:hidden dark:after:rounded-[0.3125rem] dark:group-data-[state='checked']:after:block",
	// Focus ring
	"group-data-[focus]:outline group-data-[focus]:outline-2 group-data-[focus]:outline-offset-2 group-data-[focus]:outline-blue-500",
	// Disabled state
	"group-data-[disabled]:opacity-50",
	"group-data-[disabled]:border-default-950/25 group-data-[disabled]:bg-default-950/5 group-data-[disabled]:[--checkbox-check:theme(colors.zinc.950/50%)] group-data-[disabled]:before:bg-transparent",
	"dark:group-data-[disabled]:border-white/20 dark:group-data-[disabled]:bg-white/[2.5%] dark:group-data-[disabled]:[--checkbox-check:theme(colors.white/50%)] dark:group-data-[disabled]:group-data-[state='checked']:after:hidden",
	// Forced colors mode
	"forced-colors:[--checkbox-check:HighlightText] forced-colors:[--checkbox-checked-bg:Highlight] forced-colors:group-data-[disabled]:[--checkbox-check:Highlight]",
	"dark:forced-colors:[--checkbox-check:HighlightText] dark:forced-colors:[--checkbox-checked-bg:Highlight] dark:forced-colors:group-data-[disabled]:[--checkbox-check:Highlight]",
]

const colors = {
	"dark/zinc": [
		"[--checkbox-check:theme(colors.white)] [--checkbox-checked-bg:theme(colors.zinc.900)] [--checkbox-checked-border:theme(colors.zinc.950/90%)]",
		"dark:[--checkbox-checked-bg:theme(colors.zinc.600)]",
	],
	"dark/white": [
		"[--checkbox-check:theme(colors.white)] [--checkbox-checked-bg:theme(colors.zinc.900)] [--checkbox-checked-border:theme(colors.zinc.950/90%)]",
		"dark:[--checkbox-check:theme(colors.zinc.900)] dark:[--checkbox-checked-bg:theme(colors.white)] dark:[--checkbox-checked-border:theme(colors.zinc.950/15%)]",
	],
	white:
		"[--checkbox-check:theme(colors.zinc.900)] [--checkbox-checked-bg:theme(colors.white)] [--checkbox-checked-border:theme(colors.zinc.950/15%)]",
	dark: "[--checkbox-check:theme(colors.white)] [--checkbox-checked-bg:theme(colors.zinc.900)] [--checkbox-checked-border:theme(colors.zinc.950/90%)]",
	zinc: "[--checkbox-check:theme(colors.white)] [--checkbox-checked-bg:theme(colors.zinc.600)] [--checkbox-checked-border:theme(colors.zinc.700/90%)]",
	red: "[--checkbox-check:theme(colors.white)] [--checkbox-checked-bg:theme(colors.red.600)] [--checkbox-checked-border:theme(colors.red.700/90%)]",
	orange:
		"[--checkbox-check:theme(colors.white)] [--checkbox-checked-bg:theme(colors.orange.500)] [--checkbox-checked-border:theme(colors.orange.600/90%)]",
	amber:
		"[--checkbox-check:theme(colors.amber.950)] [--checkbox-checked-bg:theme(colors.amber.400)] [--checkbox-checked-border:theme(colors.amber.500/80%)]",
	yellow:
		"[--checkbox-check:theme(colors.yellow.950)] [--checkbox-checked-bg:theme(colors.yellow.300)] [--checkbox-checked-border:theme(colors.yellow.400/80%)]",
	lime: "[--checkbox-check:theme(colors.lime.950)] [--checkbox-checked-bg:theme(colors.lime.300)] [--checkbox-checked-border:theme(colors.lime.400/80%)]",
	green:
		"[--checkbox-check:theme(colors.white)] [--checkbox-checked-bg:theme(colors.green.600)] [--checkbox-checked-border:theme(colors.green.700/90%)]",
	emerald:
		"[--checkbox-check:theme(colors.white)] [--checkbox-checked-bg:theme(colors.emerald.600)] [--checkbox-checked-border:theme(colors.emerald.700/90%)]",
	teal: "[--checkbox-check:theme(colors.white)] [--checkbox-checked-bg:theme(colors.teal.600)] [--checkbox-checked-border:theme(colors.teal.700/90%)]",
	cyan: "[--checkbox-check:theme(colors.cyan.950)] [--checkbox-checked-bg:theme(colors.cyan.300)] [--checkbox-checked-border:theme(colors.cyan.400/80%)]",
	sky: "[--checkbox-check:theme(colors.white)] [--checkbox-checked-bg:theme(colors.sky.500)] [--checkbox-checked-border:theme(colors.sky.600/80%)]",
	blue: "[--checkbox-check:theme(colors.white)] [--checkbox-checked-bg:theme(colors.blue.600)] [--checkbox-checked-border:theme(colors.blue.700/90%)]",
	indigo:
		"[--checkbox-check:theme(colors.white)] [--checkbox-checked-bg:theme(colors.indigo.500)] [--checkbox-checked-border:theme(colors.indigo.600/90%)]",
	violet:
		"[--checkbox-check:theme(colors.white)] [--checkbox-checked-bg:theme(colors.violet.500)] [--checkbox-checked-border:theme(colors.violet.600/90%)]",
	purple:
		"[--checkbox-check:theme(colors.white)] [--checkbox-checked-bg:theme(colors.purple.500)] [--checkbox-checked-border:theme(colors.purple.600/90%)]",
	fuchsia:
		"[--checkbox-check:theme(colors.white)] [--checkbox-checked-bg:theme(colors.fuchsia.500)] [--checkbox-checked-border:theme(colors.fuchsia.600/90%)]",
	pink: "[--checkbox-check:theme(colors.white)] [--checkbox-checked-bg:theme(colors.pink.500)] [--checkbox-checked-border:theme(colors.pink.600/90%)]",
	rose: "[--checkbox-check:theme(colors.white)] [--checkbox-checked-bg:theme(colors.rose.500)] [--checkbox-checked-border:theme(colors.rose.600/90%)]",
}

type Color = keyof typeof colors

export function Checkbox({
	color = "dark/zinc",
	labelClass,
	...props
}: CheckboxRootProps & {
	labelClass?: string
	color?: Color
	class?: string
	children?: JSX.Element
}) {
	return (
		<KobalteCheckbox
			{...props}
			class={clsx(props.class, "group inline-flex gap-2.5 focus:outline-none")}
		>
			<KobalteCheckbox.Control class={clsx([base, colors[color]])}>
				<KobalteCheckbox.Indicator class="absolute">
					<CheckIcon class="size-3 stroke-[4px] stroke-card" />
				</KobalteCheckbox.Indicator>
			</KobalteCheckbox.Control>
			<KobalteCheckbox.Label
				id={props.id}
				data-slot="label"
				class={clsx(
					labelClass,
					"-mt-[0.2rem] select-none text-base/6 text-foreground sm:text-sm/6 data-[disabled]:opacity-50",
				)}
			>
				{props.children}
			</KobalteCheckbox.Label>
			<KobalteCheckbox.Input />
		</KobalteCheckbox>
	)
}
