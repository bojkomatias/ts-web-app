import clsx from "clsx"
import type { JSX } from "solid-js"

export function DescriptionList(props: JSX.HTMLAttributes<HTMLDListElement>) {
	return (
		<dl
			{...props}
			class={clsx(
				props.class,
				"grid grid-cols-1 text-base/6 sm:grid-cols-[min(50%,theme(spacing.80))_auto] sm:text-sm/6",
			)}
		/>
	)
}

export function DescriptionTerm(props: JSX.HTMLAttributes<HTMLElement>) {
	return (
		<dt
			{...props}
			class={clsx(
				props.class,
				"col-start-1 border-zinc-950/5 border-t pt-3 text-zinc-500 dark:border-white/5 sm:border-zinc-950/5 sm:dark:border-white/5 sm:border-t first:border-none sm:py-3 dark:text-zinc-400",
			)}
		/>
	)
}

export function DescriptionDetails(props: JSX.HTMLAttributes<HTMLElement>) {
	return (
		<dd
			{...props}
			class={clsx(
				props.class,
				"pt-1 pb-3 text-zinc-950 dark:sm:border-white/5 sm:border-zinc-950/5 sm:border-t sm:[&:nth-child(2)]:border-none sm:py-3 dark:text-white",
			)}
		/>
	)
}
