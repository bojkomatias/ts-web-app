import clsx from "clsx"
import type { JSX } from "solid-js"
import { type AnchorOrButton, TouchTarget } from "./button"

export function Navbar(props: JSX.HTMLAttributes<HTMLElement>) {
	return (
		<nav
			{...props}
			class={clsx(props.class, "flex flex-1 items-center gap-4 py-2.5")}
		/>
	)
}

export function NavbarDivider(props: JSX.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			aria-hidden="true"
			{...props}
			class={clsx(props.class, "h-6 w-px bg-default-950/10 dark:bg-white/10")}
		/>
	)
}

export function NavbarSection(props: JSX.HTMLAttributes<HTMLDivElement>) {
	return (
		<div>
			<div {...props} class={clsx(props.class, "flex items-center gap-3")} />
		</div>
	)
}

export function NavbarSpacer(props: JSX.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			aria-hidden="true"
			{...props}
			class={clsx(props.class, "-ml-4 flex-1")}
		/>
	)
}

export const NavbarItem = (
	props: {
		current?: boolean
		className?: string
		children: JSX.Element
	} & AnchorOrButton,
) => {
	const classes = clsx(
		// Base
		"relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium text-default-950 sm:text-sm/5",
		// Leading icon/icon-only
		"data-[slot=icon]:*:size-6 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:stroke-600 sm:data-[slot=icon]:*:size-5",
		// Trailing icon (down chevron or similar)
		"data-[slot=icon]:last:[&:not(:nth-child(2))]:*:ml-auto data-[slot=icon]:last:[&:not(:nth-child(2))]:*:size-5 sm:data-[slot=icon]:last:[&:not(:nth-child(2))]:*:size-4",
		// Avatar
		"data-[slot=avatar]:*:-m-0.5 data-[slot=avatar]:*:size-7 data-[slot=avatar]:*:[--avatar-radius:theme(borderRadius.DEFAULT)] data-[slot=avatar]:*:[--ring-opacity:10%] sm:data-[slot=avatar]:*:size-6",
		// Hover
		"hover:bg-default-950/5 data-[slot=icon]:*:hover:stroke-default-950",
		// Active
		"active:bg-default-950/5 data-[slot=icon]:*:active:stroke-default-950",
		// Dark mode
		"dark:text-white dark:data-[slot=icon]:*:stroke-400",
		"dark:hover:bg-white/5 dark:data-[slot=icon]:*:hover:stroke-white",
		"dark:active:bg-white/5 dark:data-[slot=icon]:*:active:stroke-white",
		// Indicator
		"data-[current=true]:after:absolute data-[current=true]:after:inset-x-2 data-[current=true]:after:-bottom-1 data-[current=true]:after:h-0.5 data-[current=true]:after:rounded-full data-[current=true]:after:bg-default-950 data-[current=true]:after:dark:bg-white",
	)

	return (
		<span class={clsx(props.class, "relative")}>
			{"href" in props ? (
				props.href && (
					<a
						{...props}
						class={classes}
						data-current={props.current ? "true" : undefined}
					>
						<TouchTarget>{props.children}</TouchTarget>
					</a>
				)
			) : (
				<button
					{...props}
					class={clsx("cursor-default", classes)}
					data-current={props.current ? "true" : undefined}
				>
					<TouchTarget>{props.children}</TouchTarget>
				</button>
			)}
		</span>
	)
}

export function NavbarLabel(props: JSX.HTMLAttributes<HTMLSpanElement>) {
	return <span {...props} class={clsx(props.class, "truncate")} />
}
