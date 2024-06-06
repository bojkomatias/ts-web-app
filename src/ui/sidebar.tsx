import type { HTMLArkProps } from "@ark-ui/solid"
import clsx from "clsx"
import type { JSXElement } from "solid-js"
import { TouchTarget } from "./button"

export function Sidebar(props: HTMLArkProps<"nav">) {
	return <nav {...props} class={clsx(props.class, "flex h-full flex-col")} />
}

export function SidebarHeader(props: HTMLArkProps<"div">) {
	return (
		<div
			{...props}
			class={clsx(
				props.class,
				"flex flex-col border-zinc-950/5 border-b p-4 [&>[data-slot=section]+[data-slot=section]]:mt-2.5 dark:border-white/5",
			)}
		/>
	)
}

export function SidebarBody(props: HTMLArkProps<"div">) {
	return (
		<div
			{...props}
			class={clsx(
				props.class,
				"flex flex-1 flex-col overflow-y-auto p-4 [&>[data-slot=section]+[data-slot=section]]:mt-8",
			)}
		/>
	)
}

export function SidebarFooter(props: HTMLArkProps<"div">) {
	return (
		<div
			{...props}
			class={clsx(
				props.class,
				"flex flex-col border-zinc-950/5 border-t p-4 [&>[data-slot=section]+[data-slot=section]]:mt-2.5 dark:border-white/5",
			)}
		/>
	)
}

export function SidebarSection(props: HTMLArkProps<"div">) {
	return (
		<div>
			<div
				{...props}
				data-slot="section"
				class={clsx(props.class, "flex flex-col gap-0.5")}
			/>
		</div>
	)
}

export function SidebarDivider(props: HTMLArkProps<"hr">) {
	return (
		<hr
			{...props}
			class={clsx(
				props.class,
				"lg:-mx-4 my-4 border-zinc-950/5 border-t dark:border-white/5",
			)}
		/>
	)
}

export function SidebarSpacer(props: HTMLArkProps<"div">) {
	return (
		<div
			aria-hidden="true"
			{...props}
			class={clsx(props.class, "mt-8 flex-1")}
		/>
	)
}

export function SidebarHeading(props: HTMLArkProps<"h3">) {
	return (
		<h3
			{...props}
			class={clsx(
				props.class,
				"mb-1 px-2 font-medium text-xs/6 text-zinc-500 dark:text-zinc-400",
			)}
		/>
	)
}

export const SidebarItem = ({
	current,
	children,
	...props
}: { current?: boolean; children: JSXElement } & (
	| HTMLArkProps<"button">
	| HTMLArkProps<"a">
)) => {
	const classes = clsx(
		// Base
		"flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-950 sm:py-2 sm:text-sm/5",
		// Leading icon/icon-only
		"data-[slot=icon]:*:size-6 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:fill-none sm:data-[slot=icon]:*:size-5",
		// Trailing icon (down chevron or similar)
		"data-[slot=icon]:last:*:ml-auto data-[slot=icon]:last:*:size-5 sm:data-[slot=icon]:last:*:size-4",
		// Avatar
		"data-[slot=avatar]:*:-m-0.5 data-[slot=avatar]:*:size-7 data-[slot=avatar]:*:[--ring-opacity:10%] sm:data-[slot=avatar]:*:size-6",
		// Hover
		"data-[hover]:bg-zinc-950/5 data-[slot=icon]:*:data-[hover]:fill-zinc-950",
		// Active
		"data-[active]:bg-zinc-950/5 data-[slot=icon]:*:data-[active]:fill-zinc-950",
		// Current
		"data-[slot=icon]:*:data-[current]:fill-zinc-950",
		// Dark mode
		"dark:text-white dark:data-[slot=icon]:*:fill-none",
		"dark:data-[hover]:bg-white/5 dark:data-[slot=icon]:*:data-[hover]:fill-white",
		"dark:data-[active]:bg-white/5 dark:data-[slot=icon]:*:data-[active]:fill-white",
		"dark:data-[slot=icon]:*:data-[current]:fill-white",
	)

	return (
		<span class={clsx(props.class, "relative")}>
			{/* {current && (
        <motion.span
          layoutId="current-indicator"
          class="absolute inset-y-2 -left-4 w-0.5 rounded-full bg-zinc-950 dark:bg-white"
        />
      )} */}
			{"href" in props ? (
				// <Headless.CloseButton as={Fragment} ref={ref}>
				<a
					class={classes}
					{...props}
					data-current={current ? "true" : undefined}
				>
					<TouchTarget>{children}</TouchTarget>
				</a>
			) : (
				// </Headless.CloseButton>
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

export function SidebarLabel(props: HTMLArkProps<"span">) {
	return <span {...props} class={clsx(props.class, "truncate")} />
}
