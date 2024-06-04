import type { HTMLArkProps } from "@ark-ui/solid";
import { clsx } from "clsx";

export function Text(props: HTMLArkProps<"p">) {
	return (
		<p
			{...props}
			data-slot="text"
			class={clsx(
				props.class,
				"text-base/6 text-muted-foreground sm:text-sm/6",
			)}
		/>
	);
}

export function TextLink(props: HTMLArkProps<"a">) {
	return (
		<a
			{...props}
			class={clsx(
				props.class,
				"cursor-pointer text-foreground underline decoration-muted-foreground hover:decoration-foreground",
			)}
		/>
	);
}

export function Strong(props: HTMLArkProps<"strong">) {
	return (
		<strong {...props} class={clsx(props.class, "font-medium text-card")} />
	);
}

export function Code(props: HTMLArkProps<"code">) {
	return (
		<code
			{...props}
			class={clsx(
				props.class,
				"rounded border border-border bg-popover px-1 py-0.5 font-medium text-foreground text-sm sm:text-[0.8125rem]",
			)}
		/>
	);
}
