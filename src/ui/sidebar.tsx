import clsx from "clsx"
import type { JSX } from "solid-js"
import { type AnchorOrButton, TouchTarget } from "./button"

export function Sidebar(props: JSX.HTMLAttributes<HTMLElement>) {
	return <nav {...props} class={clsx(props.class, "flex h-full flex-col")} />
}

export function SidebarHeader(props: JSX.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			class={clsx(
				props.class,
				"flex flex-col border-default-950/5 border-b p-4 [&>[data-slot=section]+[data-slot=section]]:mt-2.5 dark:border-white/5",
			)}
		/>
	)
}

export function SidebarBody(props: JSX.HTMLAttributes<HTMLDivElement>) {
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

export function SidebarFooter(props: JSX.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			class={clsx(
				props.class,
				"flex flex-col border-default-950/5 border-t p-4 [&>[data-slot=section]+[data-slot=section]]:mt-2.5 dark:border-white/5",
			)}
		/>
	)
}

export function SidebarSection(props: JSX.HTMLAttributes<HTMLDivElement>) {
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

export function SidebarDivider(props: JSX.HTMLAttributes<HTMLHRElement>) {
	return (
		<hr
			{...props}
			class={clsx(
				props.class,
				"lg:-mx-4 my-4 border-default-950/5 border-t dark:border-white/5",
			)}
		/>
	)
}

export function SidebarSpacer(props: JSX.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			aria-hidden="true"
			{...props}
			class={clsx(props.class, "mt-8 flex-1")}
		/>
	)
}

export function SidebarHeading(props: JSX.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h3
			{...props}
			class={clsx(
				props.class,
				"mb-1 px-2 font-medium text-default-500 text-xs/6 dark:text-default-400",
			)}
		/>
	)
}

export const SidebarItem = ({
	current,
	children,
	...props
}: { current?: boolean; children: JSX.Element } & AnchorOrButton) => {
	const classes = clsx(
		// Base
		"flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-default-950 sm:py-2 sm:text-sm/5",
		// Leading icon/icon-only
		"data-[slot=icon]:*:size-6 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:stroke-default-600 sm:data-[slot=icon]:*:size-5",
		// Trailing icon (down chevron or similar)
		"data-[slot=icon]:last:*:ml-auto data-[slot=icon]:last:*:size-5 sm:data-[slot=icon]:last:*:size-4",
		// Avatar
		"data-[slot=avatar]:*:-m-0.5 data-[slot=avatar]:*:size-7 data-[slot=avatar]:*:[--ring-opacity:10%] sm:data-[slot=avatar]:*:size-6",
		// Hover
		"hover:bg-default-950/5 data-[slot=icon]:*:hover:stroke-default-950",
		// Active
		"active:bg-default-950/5 data-[slot=icon]:*:active:stroke-default-950",
		// Current
		"data-[slot=icon]:*:data-[current]:stroke-default-950",
		// Dark mode
		"dark:text-white dark:data-[slot=icon]:*:stroke-default-400",
		"dark:hover:bg-white/5 dark:data-[slot=icon]:*:hover:stroke-white",
		"dark:active:bg-white/5 dark:data-[slot=icon]:*:active:stroke-white",
		"dark:data-[slot=icon]:*:data-[current]:stroke-white",
	)

	return (
		<span class={clsx(props.class, "relative")}>
			{/* {current && (
        <motion.span
          layoutId="current-indicator"
          class="absolute inset-y-2 -left-4 w-0.5 rounded-full bg-default-950 dark:bg-white"
        />
      )} */}
			{"href" in props ? (
				// <Headless.CloseButton as={Fragment} ref={ref}>
				props.href && (
					<a
						class={classes}
						{...props}
						data-current={current ? "true" : undefined}
					>
						<TouchTarget>{children}</TouchTarget>
					</a>
				)
			) : (
				// </Headless.CloseButton>
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

export function SidebarLabel(props: JSX.HTMLAttributes<HTMLSpanElement>) {
	return <span {...props} class={clsx(props.class, "truncate")} />
}
