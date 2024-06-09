import { Dialog as KobalteDialog } from "@kobalte/core/dialog"
import type {
	DialogCloseButtonProps,
	DialogContentProps,
	DialogRootProps,
} from "@kobalte/core/dialog"
import { clsx } from "clsx"
import { XIcon } from "lucide-solid"
import type { JSX } from "solid-js"
import { Button } from "./button"

export function Drawer(
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
				{props.children}
			</KobalteDialog.Portal>
		</KobalteDialog>
	)
}

const sizes = {
	"2xs": "sm:max-w-52",
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

export const DrawerContent = ({
	size = "md",
	...props
}: {
	size?: keyof typeof sizes
	class?: string
	children: JSX.Element
	fromLeft?: true
} & DialogContentProps) => {
	return (
		<KobalteDialog.Content
			class={clsx(
				props.class,
				sizes[size],
				"fixed inset-x-2 inset-y-2 flex h-[calc(100svh-1rem)] flex-col rounded-lg bg-white shadow-sm ring-1 ring-default-950/5 transition sm:w-full dark:bg-default-900 dark:ring-white/10",
				props.fromLeft ? "left-2" : "right-2",
			)}
		>
			{props.children}
		</KobalteDialog.Content>
	)
}

export function DrawerTitle(props: JSX.HTMLAttributes<HTMLHeadingElement>) {
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

export function DrawerDescription(props: JSX.HTMLAttributes<HTMLDivElement>) {
	return (
		<KobalteDialog.Description
			{...props}
			class={clsx(
				props.class,
				"mt-2 text-pretty text-default-800 dark:text-default-200",
			)}
		/>
	)
}

export function DrawerBody(props: JSX.HTMLAttributes<HTMLDivElement>) {
	return <div {...props} class={clsx(props.class, "mt-6")} />
}

export function DrawerActions(props: JSX.HTMLAttributes<HTMLDivElement>) {
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

export function DrawerCloseButton(props: DialogCloseButtonProps) {
	return (
		<KobalteDialog.CloseButton {...props} class="self-end p-2">
			<Button plain class="size-8">
				<XIcon data-slot="icon" class="!size-5" />
			</Button>
		</KobalteDialog.CloseButton>
	)
}
