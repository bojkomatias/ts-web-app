import clsx from "clsx"

import type { JSX } from "solid-js"
import { type AnchorOrButton, type ButtonProps, styles } from "./button"

import type {
	DropdownMenuContentProps,
	DropdownMenuGroupLabelProps,
	DropdownMenuGroupProps,
	DropdownMenuItemDescriptionProps,
	DropdownMenuItemLabelProps,
	DropdownMenuRootProps,
	DropdownMenuSeparatorProps,
	DropdownMenuTriggerProps,
} from "@kobalte/core/dropdown-menu"
import { DropdownMenu as KobalteMenu } from "@kobalte/core/dropdown-menu"

export function Dropdown(props: DropdownMenuRootProps) {
	return (
		<KobalteMenu {...props}>
			<div class="relative">{props.children}</div>
		</KobalteMenu>
	)
}

/* Trigger is plain primitive for custom elements */
export function DropdownTrigger(
	props: { children?: JSX.Element } & DropdownMenuTriggerProps,
) {
	return <KobalteMenu.Trigger {...props} />
}
/* Button is styled button for better theme compat */
export function DropdownButton(props: ButtonProps) {
	const classes = clsx(
		props.class,
		styles.base,
		styles.sizes[props.size ?? "base"],
		props.outline
			? styles.outline
			: props.plain
				? styles.plain
				: clsx(styles.solid, styles.colors[props.color ?? "light"]),
	)
	return <KobalteMenu.Trigger {...props} class={clsx(props.class, classes)} />
}

export function DropdownMenu(
	props: { class?: string; children: JSX.Element } & DropdownMenuContentProps,
) {
	return (
		<KobalteMenu.Portal>
			<KobalteMenu.Content
				{...props}
				class={clsx(
					props.class,
					// Anchor positioning
					"-mx-px origin-[var(--kb-menu-content-transform-origin)] data-[orientation='horizontal']:my-1.5",
					// Base styles
					"isolate z-10 w-max min-w-52 rounded-xl p-1",
					// Invisible border that is only visible in `forced-colors` mode for accessibility purposes
					"outline outline-1 outline-transparent focus:outline-none",
					// Handle scrolling when menu won't fit in viewport
					"overflow-y-auto",
					// Popover background
					"bg-white/75 backdrop-blur-xl dark:bg-default-800/75",
					// Shadows
					"shadow-lg ring-1 ring-default-950/10 dark:ring-white/10 dark:ring-inset",
					// Animation
					"opacity-0 transition duration-300 data-[expanded]:opacity-100",
				)}
			/>
		</KobalteMenu.Portal>
	)
}

export function DropdownItem(props: AnchorOrButton) {
	const classes = clsx(
		props.class,
		// Base styles
		"group w-full cursor-default rounded-lg px-3.5 py-2.5 focus:outline-none sm:px-3 sm:py-1.5",
		// Text styles
		"text-left text-base/6 text-default-950 sm:text-sm/6 dark:text-white forced-colors:text-[CanvasText]",
		// Focus
		"hover:bg-blue-500 hover:text-white",
		// Disabled state
		"data-[disabled]:opacity-50",
		// Forced colors mode
		"forced-color-adjust-none forced-colors:hover:bg-[Highlight] forced-colors:hover:text-[HighlightText] forced-colors:[&>[data-slot=icon]]:hover:text-[HighlightText]",
		// Grid layout
		"grid grid-cols-[auto_1fr_1.5rem_0.5rem_auto] items-center",
		// Icons
		"[&>[data-slot=icon]]:col-start-1 [&>[data-slot=icon]]:row-start-1 [&>[data-slot=icon]]:-ml-0.5 [&>[data-slot=icon]]:mr-2.5 [&>[data-slot=icon]]:size-5 sm:[&>[data-slot=icon]]:mr-2 [&>[data-slot=icon]]:sm:size-4",
		"[&>[data-slot=icon]]:text-default-500 [&>[data-slot=icon]]:hover:text-white [&>[data-slot=icon]]:dark:text-default-400 [&>[data-slot=icon]]:hover:dark:text-white",
		// Avatar
		"[&>[data-slot=avatar]]:-ml-1 [&>[data-slot=avatar]]:mr-2.5 [&>[data-slot=avatar]]:size-6 sm:[&>[data-slot=avatar]]:mr-2 sm:[&>[data-slot=avatar]]:size-5",
	)

	return (
		<KobalteMenu.Item>
			{"href" in props ? (
				props.href && <a {...props} class={classes} />
			) : (
				<button type="button" {...props} class={classes} />
			)}
		</KobalteMenu.Item>
	)
}

export function DropdownHeader(props: JSX.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			class={clsx(props.class, "col-span-5 px-3.5 pt-2.5 pb-1 sm:px-3")}
		/>
	)
}

export function DropdownSection(
	props: { class?: string } & DropdownMenuGroupProps,
) {
	return <KobalteMenu.Group {...props} class={clsx(props.class)} />
}

export function DropdownHeading(
	props: { class?: string } & DropdownMenuGroupLabelProps,
) {
	return (
		<KobalteMenu.GroupLabel
			{...props}
			class={clsx(
				props.class,
				"col-span-full grid grid-cols-[1fr,auto] gap-x-12 px-3.5 pt-2 pb-1 font-medium text-default-500 text-sm/5 sm:px-3 dark:text-default-400 sm:text-xs/5",
			)}
		/>
	)
}

export function DropdownDivider(props: DropdownMenuSeparatorProps) {
	return (
		<KobalteMenu.Separator
			{...props}
			class="col-span-full mx-3.5 my-1 h-px border-0 bg-default-950/5 sm:mx-3 dark:bg-white/10 forced-colors:bg-[CanvasText]"
		/>
	)
}

export function DropdownLabel(props: DropdownMenuItemLabelProps) {
	return (
		<KobalteMenu.ItemLabel
			{...props}
			data-slot="label"
			class={clsx("col-start-2 row-start-1")}
		/>
	)
}

export function DropdownDescription(props: DropdownMenuItemDescriptionProps) {
	return (
		<KobalteMenu.ItemDescription
			data-slot="description"
			{...props}
			class={clsx(
				"col-start-2 row-start-2 text-default-500 text-sm/5 dark:text-default-400 forced-colors:group-data-[focus]:text-[HighlightText] group-data-[focus]:text-white sm:text-xs/5",
			)}
		/>
	)
}

export function DropdownShortcut({
	keys,
	...props
}: { keys: string | string[] } & JSX.HTMLAttributes<HTMLSpanElement>) {
	return (
		<span
			{...props}
			class={clsx(props.class, "col-start-5 row-start-1 flex justify-self-end")}
		>
			{(Array.isArray(keys) ? keys : keys.split("")).map((char, index) => (
				<kbd
					class={clsx([
						"min-w-[2ch] text-center font-sans text-default-400 capitalize forced-colors:group-hover:text-[HighlightText] group-hover:text-white",
						// Make sure key names that are longer than one character (like "Tab") have extra space
						index > 0 && char.length > 1 && "pl-1",
					])}
				>
					{char}
				</kbd>
			))}
		</span>
	)
}
