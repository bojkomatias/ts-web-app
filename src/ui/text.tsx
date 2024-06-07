import { clsx } from "clsx"
import type { JSX } from "solid-js"

export function Text(props: JSX.HTMLAttributes<HTMLParagraphElement>) {
	return (
		<p
			{...props}
			data-slot="text"
			class={clsx(
				props.class,
				"text-base/6 text-default-500 dark:text-default-400 sm:text-sm/6",
			)}
		/>
	)
}

export function TextLink(props: JSX.HTMLAttributes<HTMLAnchorElement>) {
	return (
		<a
			{...props}
			class={clsx(
				props.class,
				"text-default-950 underline decoration-default-950/50 dark:text-white dark:decoration-white/50hover:decoration-default-950 dark:hover:decoration-white",
			)}
		/>
	)
}

export function Strong(props: JSX.HTMLAttributes<HTMLElement>) {
	return (
		<strong
			{...props}
			class={clsx(props.class, "font-medium text-default-950 dark:text-white")}
		/>
	)
}

export function Code(props: JSX.HTMLAttributes<HTMLElement>) {
	return (
		<code
			{...props}
			class={clsx(
				props.class,
				"rounded border border-default-950/10 bg-default-950/[2.5%] px-0.5 font-medium text-default-950 text-sm dark:border-white/20 dark:bg-white/5 dark:text-white sm:text-[0.8125rem]",
			)}
		/>
	)
}
