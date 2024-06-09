import { debounce } from "@solid-primitives/scheduled"
import {
	type ColumnFiltersState,
	createSolidTable,
	flexRender,
	getCoreRowModel,
	getFacetedMinMaxValues,
	getFacetedRowModel,
	getFacetedUniqueValues,
	getFilteredRowModel,
} from "@tanstack/solid-table"
import { For, Show, createSignal } from "solid-js"
import type { Action } from "~/db/actions/schema"
import { Badge } from "~/ui/badge"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "~/ui/table"
import { columns } from "./actions.columns"

export default function ActionsTable(props: { actions: Action[] }) {
	const [data] = createSignal(props.actions)
	const [columnFilters, setColumnFilters] = createSignal<ColumnFiltersState>([])
	const [globalFilter, setGlobalFilter] = createSignal("")
	const debounceSetGlobalFilter = debounce(
		(value: string) => setGlobalFilter(value),
		200,
	)

	const table = createSolidTable({
		get data() {
			return data()
		},
		columns,
		state: {
			get columnFilters() {
				return columnFilters()
			},
			get globalFilter() {
				return globalFilter()
			},
		},
		onGlobalFilterChange: setGlobalFilter,
		globalFilterFn: "includesString",
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getFacetedRowModel: getFacetedRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
		getFacetedMinMaxValues: getFacetedMinMaxValues(),
		debugTable: true,
		debugHeaders: true,
		debugColumns: false,
	})

	return (
		<>
			{/* Filters, features before table */}
			{/* <div class="mx-4">
				<Input
					value={globalFilter() ?? ""}
					onInput={(e) => debounceSetGlobalFilter(e.currentTarget.value)}
					placeholder="Search all columns..."
				/>
			</div> */}

			{/* <Divider soft /> */}
			{/* Table headers and rows */}
			<Table
				bleed
				class="[--gutter:theme(spacing.6)] sm:[--gutter:theme(spacing.8)]"
			>
				<TableHead>
					<For each={table.getHeaderGroups()}>
						{(headerGroup) => (
							<TableRow>
								<For each={headerGroup.headers}>
									{(header) => (
										<TableHeader>
											<Show when={!header.isPlaceholder}>
												<div
													class={
														header.column.getCanSort()
															? "cursor-pointer select-none"
															: undefined
													}
													onClick={header.column.getToggleSortingHandler()}
													onKeyUp={header.column.getToggleSortingHandler()}
												>
													{flexRender(
														header.column.columnDef.header,
														header.getContext(),
													)}
													{{
														asc: " 🔼",
														desc: " 🔽",
													}[header.column.getIsSorted() as string] ?? null}
												</div>
											</Show>
										</TableHeader>
									)}
								</For>
							</TableRow>
						)}
					</For>
				</TableHead>
				<TableBody>
					<For each={table.getRowModel().rows.slice(0, 20)}>
						{(row) => (
							<TableRow>
								<For each={row.getVisibleCells()}>
									{(cell) => (
										<TableCell>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</TableCell>
									)}
								</For>
							</TableRow>
						)}
					</For>
				</TableBody>
			</Table>

			{/* After table */}
			<div class="mr-4 flex justify-end">
				<Badge color="cyan">{table.getRowModel().rows.length} Rows</Badge>
			</div>
		</>
	)
}
