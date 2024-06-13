import { clsx } from "clsx"
import type { JSX } from "solid-js"

export function Fieldset(
	props: {
		disabled?: boolean
	} & JSX.HTMLAttributes<HTMLFieldSetElement>,
) {
	return (
		<fieldset
			{...props}
			class={clsx(
				props.class,
				"[&>*+[data-slot=control]]:mt-6 [&>[data-slot=text]]:mt-1",
			)}
		/>
	)
}

export function Legend(props: JSX.HTMLAttributes<HTMLLegendElement>) {
	return (
		<legend
			{...props}
			data-slot="legend"
			class={clsx(
				props.class,
				"font-semibold text-base/6 text-default-950 dark:text-white sm:text-sm/6 data-[disabled]:opacity-50",
			)}
		/>
	)
}
export function FieldGroup(props: JSX.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			data-slot="control"
			class={clsx(props.class, "space-y-8")}
		/>
	)
}

export function Field(props: JSX.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			class={clsx(
				props.class,
				"[&>[data-slot=label]+[data-slot=control]]:mt-2",
				"[&>[data-slot=label]+[data-slot=description]]:mt-1",
				"[&>[data-slot=description]+[data-slot=control]]:mt-3",
				"[&>[data-slot=control]+[data-slot=description]]:mt-3",
				"[&>[data-slot=control]+[data-slot=error]]:mt-2",
				"[&>[data-slot=label]]:font-medium",
			)}
			{...props}
		/>
	)
}

export function Label(
	props: {
		className?: string
	} & JSX.HTMLAttributes<HTMLLabelElement>,
) {
	return (
		<label
			{...props}
			data-slot="label"
			class={clsx(
				props.class,
				"select-none text-base/6 text-default-950 dark:text-white sm:text-sm/6 data-[disabled]:opacity-50",
			)}
		/>
	)
}

export function Description(
	props: {
		className?: string
		disabled?: boolean
	} & JSX.HTMLAttributes<HTMLDivElement>,
) {
	return (
		<div
			{...props}
			data-slot="description"
			class={clsx(
				props.class,
				"text-base/6 text-default-500 dark:text-default-400 sm:text-sm/6 data-[disabled]:opacity-50",
			)}
		/>
	)
}

export function ErrorMesssage(
	props: {
		className?: string
	} & JSX.HTMLAttributes<HTMLDivElement>,
) {
	return (
		<div
			data-slot="error"
			{...props}
			class={clsx(
				props.class,
				"text-base/6 text-red-600 dark:text-red-500 sm:text-sm/6 data-[disabled]:opacity-50",
			)}
		/>
	)
}
