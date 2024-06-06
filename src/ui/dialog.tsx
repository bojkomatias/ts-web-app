import {
	Dialog as ArkDialog,
	type DialogContentProps,
	type DialogDescriptionProps,
	type DialogRootProps,
	type DialogTitleProps,
} from "@ark-ui/solid"
import { clsx } from "clsx"
import type { JSX } from "solid-js"
import { Portal } from "solid-js/web"

const sizes = {
	xs: "sm:max-w-xs",
	sm: "sm:max-w-sm",
	md: "sm:max-w-md",
	lg: "sm:max-w-lg",
	xl: "sm:max-w-xl",
	"2xl": "sm:max-w-2xl",
	"3xl": "sm:max-w-3xl",
	"4xl": "sm:max-w-4xl",
	"5xl": "sm:max-w-5xl",
}

export function Dialog(
	props: {
		children: JSX.Element
	} & DialogRootProps,
) {
	return (
		<ArkDialog.Root {...props}>
			<Portal>
				<ArkDialog.Backdrop
					class={clsx(
						"pointer-events-none fixed inset-0 flex w-screen justify-center overflow-y-auto bg-zinc-950/25 px-2 py-2 dark:bg-zinc-950/50 lg:px-8 sm:px-6 lg:py-16 sm:py-8 focus:outline-0",
						// Animation
						"transition duration-300 data-[state='closed']:opacity-0 data-[state='open']:opacity-100",
					)}
				/>
				<ArkDialog.Positioner class="fixed inset-0 w-screen overflow-y-auto pt-6 sm:pt-0">
					<div
						class={clsx(
							"grid min-h-full grid-rows-[1fr_auto] justify-items-center sm:grid-rows-[1fr_auto_3fr] sm:p-4",
						)}
					>
						{props.children}
					</div>
				</ArkDialog.Positioner>
			</Portal>
		</ArkDialog.Root>
	)
}

export const DialogContent = ({
	size = "lg",
	...props
}: {
	size?: keyof typeof sizes
} & DialogContentProps) => {
	return (
		<ArkDialog.Content
			class={clsx(
				props.class,
				sizes[size],
				"relative row-start-2 w-full min-w-0 rounded-t-3xl bg-white p-[--gutter] shadow-lg ring-1 ring-zinc-950/10 [--gutter:theme(spacing.8)] sm:mb-auto sm:rounded-2xl dark:bg-zinc-900 forced-colors:outline dark:ring-white/10",
				// "h-[calc(100svh-2rem)]",
			)}
		>
			{props.children}
		</ArkDialog.Content>
	)
}

export function DialogTitle(props: DialogTitleProps) {
	return (
		<ArkDialog.Title
			{...props}
			class={clsx(
				props.class,
				"text-balance font-semibold text-lg/6 text-zinc-950 dark:text-white sm:text-base/6",
			)}
		/>
	)
}

export function DialogDescription(props: DialogDescriptionProps) {
	return (
		<ArkDialog.Description
			{...props}
			class={clsx(
				props.class,
				"mt-2 text-pretty text-zinc-800 dark:text-zinc-200",
			)}
		/>
	)
}

export function DialogBody(props: JSX.HTMLAttributes<HTMLDivElement>) {
	return <div {...props} class={clsx(props.class, "mt-6")} />
}

export function DialogActions(props: JSX.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			class={clsx(
				props.class,
				"mt-8 flex flex-col-reverse items-center justify-end gap-3 *:w-full sm:*:w-auto sm:flex-row",
			)}
		/>
	)
}
