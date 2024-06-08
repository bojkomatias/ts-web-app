import { clsx } from "clsx"
import type { JSX } from "solid-js"

export function Heading(props: JSX.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h1
			{...props}
			class={clsx(
				props.class,
				"font-semibold text-2xl/8 text-zinc-950 dark:text-white sm:text-xl/8",
			)}
		/>
	)
}

export function SubHeading(props: JSX.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h2
			{...props}
			class={clsx(
				props.class,
				"font-semibold text-base/7 text-zinc-950 dark:text-white sm:text-sm/6",
			)}
		/>
	)
}
