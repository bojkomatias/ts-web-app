import type { HTMLArkProps } from "@ark-ui/solid";
import { clsx } from "clsx";
import type { JSX } from "solid-js";
import { tv } from "tailwind-variants";

export const button = tv({
	base: [
		// Base
		"relative isolate inline-flex items-center justify-center gap-x-2.5 rounded border text-sm/6 sm:text-xs/4 whitespace-nowrap",

		// Sizing
		"px-2 h-7 py-1",

		// Focus
		"focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500",

		//Disabled
		"disabled:opacity-50 disabled:pointer-event-none",

		// Active
		"active:brightness-110",

		// Icon
		"[&>svg]:-mx-0.5 [&>svg]:shrink-0 [&>svg]:text-[--btn-icon] [&>svg]:size-3.5 forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText]",
	],
	variants: {
		accent: {
			true: [
				"border-transparent bg-accent text-accent-foreground hover:bg-hover-accent",
			],
		},
		outline: {
			true: ["border-border bg-popover text-foreground hover:bg-hover-popover"],
		},
		solid: {
			true: [
				"border-transparent bg-popover text-foreground hover:bg-hover-popover",
			],
		},
		ghost: {
			true: ["border-transparent bg-transparent hover:bg-hover-card"],
		},
	},
	defaultVariants: {
		outline: true,
	},
});

export type ButtonProps = (HTMLArkProps<"button"> | HTMLArkProps<"a">) & {
	accent?: true;
	solid?: true;
	ghost?: true;
};

export const Button = ({ accent, solid, ghost, ...props }: ButtonProps) => {
	return "href" in props ? (
		<a
			{...props}
			class={button({
				accent,
				solid,
				ghost,
				class: props.class,
			})}
		>
			<TouchTarget>{props.children}</TouchTarget>
		</a>
	) : (
		// @ts-ignore
		<button
			{...props}
			class={button({
				accent,
				solid,
				ghost,
				class: clsx(props.class, "cursor-default"),
			})}
		>
			<TouchTarget>{props.children}</TouchTarget>
		</button>
	);
};

/* Expand the hit area to at least 44×44px on touch devices */
export function TouchTarget({
	children,
}: {
	children: JSX.Element;
}) {
	return (
		<>
			{children}
			<span
				class="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] [@media(pointer:fine)]:hidden"
				aria-hidden="true"
			/>
		</>
	);
}
