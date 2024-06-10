import { clsx } from "clsx"
import { type JSX, useContext } from "solid-js"
import { createContext } from "solid-js"

const TableContext = createContext<{
	bleed: boolean
	dense: boolean
	grid: boolean
	striped: boolean
}>({
	bleed: false,
	dense: false,
	grid: false,
	striped: false,
})

export function Table(
	props: {
		bleed?: boolean
		dense?: boolean
		grid?: boolean
		striped?: boolean
	} & JSX.HTMLAttributes<HTMLDivElement>,
) {
	const value = {
		striped: props.striped || false,
		grid: props.grid || false,
		bleed: props.bleed || false,
		dense: props.dense || false,
	}
	return (
		<TableContext.Provider value={value}>
			<div class="flow-root">
				<div
					{...props}
					class={clsx(props.class, "-mx-4 whitespace-nowrap", "sm:px-4")}
				>
					<div
						class={clsx(
							"inline-block min-w-full align-middle",
							!props.bleed && "sm:px-4",
						)}
					>
						<table class="min-w-full table-auto text-left text-sm/6">
							{props.children}
						</table>
					</div>
				</div>
			</div>
		</TableContext.Provider>
	)
}

export function TableHead(props: JSX.HTMLAttributes<HTMLTableSectionElement>) {
	return (
		<thead
			class={clsx(props.class, "text-default-500 dark:text-default-400")}
			{...props}
		/>
	)
}

export function TableBody(props: JSX.HTMLAttributes<HTMLTableSectionElement>) {
	return <tbody {...props} />
}

const TableRowContext = createContext<{
	href?: string
	target?: string
	title?: string
}>({
	href: undefined,
	target: undefined,
	title: undefined,
})

export function TableRow(
	props: {
		href?: string
		target?: string
		title?: string
	} & JSX.HTMLAttributes<HTMLTableRowElement>,
) {
	const { striped } = useContext(TableContext)

	const value = {
		href: props.href,
		title: props.title,
		target: props.target,
	}

	return (
		<TableRowContext.Provider value={value}>
			<tr
				{...props}
				class={clsx(
					props.class,
					props.href &&
						"has-[[data-row-link][data-focus]]:-outline-offset-2 dark:focus-within:bg-white/[2.5%] has-[[data-row-link][data-focus]]:outline has-[[data-row-link][data-focus]]:outline-2 has-[[data-row-link][data-focus]]:outline-blue-500",
					striped && "dark:even:bg-white/[2.5%] even:bg-default-950/[2.5%]",
					props.href &&
						striped &&
						"dark:hover:bg-white/5 hover:bg-default-950/5",
					props.href &&
						!striped &&
						"dark:hover:bg-white/[2.5%] hover:bg-default-950/[2.5%]",
				)}
			>
				{props.children}
			</tr>
		</TableRowContext.Provider>
	)
}

export function TableHeader(props: JSX.HTMLAttributes<HTMLTableCellElement>) {
	const { bleed, grid } = useContext(TableContext)

	return (
		<th
			{...props}
			class={clsx(
				props.class,
				"border-b border-b-default-950/5 px-4 py-2 font-medium dark:border-b-white/5 last:pr-[var(--gutter,theme(spacing.2))] first:pl-[var(--gutter,theme(spacing.2))]",
				grid &&
					"border-l border-l-default-950/5 dark:border-l-white/5 first:border-l-0",
				!bleed && "sm:last:pr-1 sm:first:pl-1",
			)}
		/>
	)
}

export function TableCell(props: JSX.HTMLAttributes<HTMLTableCellElement>) {
	const { bleed, dense, grid, striped } = useContext(TableContext)
	const { href, target, title } = useContext(TableRowContext)

	return (
		<td
			{...props}
			class={clsx(
				props.class,
				"relative px-4 last:pr-[var(--gutter,theme(spacing.2))] first:pl-[var(--gutter,theme(spacing.2))]",
				!striped && "border-default-950/5 border-b dark:border-white/5",
				grid &&
					"border-l border-l-default-950/5 dark:border-l-white/5 first:border-l-0",
				dense ? "py-2.5" : "py-4",
				!bleed && "sm:last:pr-1 sm:first:pl-1",
			)}
		>
			{href && (
				<a
					data-row-link
					href={href}
					target={target}
					aria-label={title}
					class="absolute inset-0 focus:outline-none"
				>
					SaPE
				</a>
			)}
			{props.children}
		</td>
	)
}
