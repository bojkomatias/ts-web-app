import { Dialog as KobalteDialog } from "@kobalte/core/dialog"
import type { DialogContentProps, DialogRootProps } from "@kobalte/core/dialog"
import { clsx } from "clsx"
import type { JSX } from "solid-js"

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
		<KobalteDialog {...props}>
			<KobalteDialog.Portal>
				<KobalteDialog.Overlay
					class={clsx(
						"pointer-events-none fixed inset-0 flex w-screen justify-center overflow-y-auto bg-default-950/25 px-2 py-2 dark:bg-default-950/50 lg:px-8 sm:px-6 lg:py-16 sm:py-8 focus:outline-0",
					)}
				/>
				<div class="fixed inset-0 w-screen overflow-y-auto pt-6 sm:pt-0">
					<div
						class={clsx(
							"grid min-h-full grid-rows-[1fr_auto] justify-items-center sm:grid-rows-[1fr_auto_3fr] sm:p-4",

							//
							"justify-items-end",
						)}
					>
						{props.children}
					</div>
				</div>
			</KobalteDialog.Portal>
		</KobalteDialog>
	)
}

export const DialogContent = ({
	size = "lg",
	...props
}: {
	size?: keyof typeof sizes
	class?: string
	children: JSX.Element
} & DialogContentProps) => {
	return (
		<KobalteDialog.Content
			class={clsx(
				props.class,
				sizes[size],
				"relative row-start-2 w-full min-w-0 rounded-t-3xl bg-white p-[--gutter] shadow-lg ring-1 ring-default-950/10 [--gutter:theme(spacing.8)] sm:mb-auto sm:rounded-2xl dark:bg-default-900 forced-colors:outline dark:ring-white/10",
			)}
		>
			{props.children}
		</KobalteDialog.Content>
	)
}

export function DialogTitle(props: JSX.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<KobalteDialog.Title
			{...props}
			class={clsx(
				props.class,
				"text-balance font-semibold text-default-950 text-lg/6 dark:text-white sm:text-base/6",
			)}
		/>
	)
}

export function DialogDescription(props: JSX.HTMLAttributes<HTMLDivElement>) {
	return (
		<KobalteDialog.Description
			{...props}
			class={clsx(
				props.class,
				"mt-2 text-pretty text-default-800 text-sm dark:text-default-200",
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
