import type { HTMLArkProps } from "@ark-ui/solid"
import clsx from "clsx"
import type { JSXElement } from "solid-js"
import { TouchTarget } from "./button"

export function Navbar(props: HTMLArkProps<"nav">) {
	return (
		<nav
			{...props}
			class={clsx(props.class, "flex flex-1 items-center gap-4 py-2.5")}
		/>
	)
}

export function NavbarDivider(props: HTMLArkProps<"div">) {
	return (
		<div
			aria-hidden="true"
			{...props}
			class={clsx(props.class, "h-6 w-px bg-zinc-950/10 dark:bg-white/10")}
		/>
	)
}

export function NavbarSection(props: HTMLArkProps<"div">) {
	return (
		<div>
			<div {...props} class={clsx(props.class, "flex items-center gap-3")} />
		</div>
	)
}

export function NavbarSpacer(props: HTMLArkProps<"div">) {
	return (
		<div
			aria-hidden="true"
			{...props}
			class={clsx(props.class, "-ml-4 flex-1")}
		/>
	)
}

export const NavbarItem = ({
	current,
	children,
	...props
}: { current?: boolean; className?: string; children: JSXElement } & (
	| HTMLArkProps<"button">
	| HTMLArkProps<"a">
)) => {
	const classes = clsx(
		// Base
		"relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium text-zinc-950 sm:text-sm/5",
		// Leading icon/icon-only
		"data-[slot=icon]:*:size-6 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:fill-none sm:data-[slot=icon]:*:size-5",
		// Trailing icon (down chevron or similar)
		"data-[slot=icon]:last:[&:not(:nth-child(2))]:*:ml-auto data-[slot=icon]:last:[&:not(:nth-child(2))]:*:size-5 sm:data-[slot=icon]:last:[&:not(:nth-child(2))]:*:size-4",
		// Avatar
		"data-[slot=avatar]:*:-m-0.5 data-[slot=avatar]:*:size-7 data-[slot=avatar]:*:[--avatar-radius:theme(borderRadius.DEFAULT)] data-[slot=avatar]:*:[--ring-opacity:10%] sm:data-[slot=avatar]:*:size-6",
		// Hover
		"data-[hover]:bg-zinc-950/5 data-[slot=icon]:*:data-[hover]:fill-zinc-950",
		// Active
		"data-[active]:bg-zinc-950/5 data-[slot=icon]:*:data-[active]:fill-zinc-950",
		// Dark mode
		"dark:text-white dark:data-[slot=icon]:*:fill-none",
		"dark:data-[hover]:bg-white/5 dark:data-[slot=icon]:*:data-[hover]:fill-white",
		"dark:data-[active]:bg-white/5 dark:data-[slot=icon]:*:data-[active]:fill-white",
		// Indicator
		"data-[current=true]:after:absolute after:inset-x-2 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-zinc-950 after:dark:bg-white",
	)

	return (
		<span class={clsx(props.class, "relative")}>
			{"href" in props ? (
				<a
					{...props}
					class={classes}
					data-current={current ? "true" : undefined}
				>
					<TouchTarget>{children}</TouchTarget>
				</a>
			) : (
				// @ts-ignore
				<button
					{...props}
					class={clsx("cursor-default", classes)}
					data-current={current ? "true" : undefined}
				>
					<TouchTarget>{children}</TouchTarget>
				</button>
			)}
		</span>
	)
}

export function NavbarLabel(props: HTMLArkProps<"span">) {
	return <span {...props} class={clsx(props.class, "truncate")} />
}
