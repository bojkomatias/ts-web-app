import { debounce } from "@solid-primitives/scheduled"
import { useSubmission } from "@solidjs/router"
import {
	type ColumnFiltersState,
	type SortingState,
	createSolidTable,
	getCoreRowModel,
	getFacetedMinMaxValues,
	getFacetedRowModel,
	getFacetedUniqueValues,
	getFilteredRowModel,
	getSortedRowModel,
} from "@tanstack/solid-table"
import { type JSX, createSignal } from "solid-js"
import type { Scope } from "~/db/scopes/schema"
import { DataTable } from "~/shared/data-table"
import { Badge } from "~/ui/badge"
import { Divider } from "~/ui/divider"
import { Input } from "~/ui/input"
import { postScope } from "./actions/post-scope"
import { columns } from "./scopes.columns"

export function ScopesTable(props: { scopes: Scope[]; slot?: JSX.Element }) {
	const submission = useSubmission(postScope)

	const [columnFilters, setColumnFilters] = createSignal<ColumnFiltersState>([])
	const [globalFilter, setGlobalFilter] = createSignal("")
	const debounceSetGlobalFilter = debounce(
		(value: string) => setGlobalFilter(value),
		200,
	)
	const [sorting, setSorting] = createSignal<SortingState>([])

	const table = createSolidTable({
		get data() {
			return props.scopes
		},
		columns,
		state: {
			get columnFilters() {
				return columnFilters()
			},
			get globalFilter() {
				return globalFilter()
			},
			get sorting() {
				return sorting()
			},
		},
		onGlobalFilterChange: setGlobalFilter,
		globalFilterFn: "includesString",
		onColumnFiltersChange: setColumnFilters,
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
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
			<div class="mx-2 flex items-center gap-2">
				<Input
					value={globalFilter() ?? ""}
					onInput={(e) => debounceSetGlobalFilter(e.currentTarget.value)}
					placeholder="Search all columns..."
				/>
				<span class="grow" />
				{props.slot}
			</div>
			<Divider soft />
			{/* Table headers and rows */}
			<DataTable<Scope> table={table} submission={submission} />

			{/* After table */}
			<div class="mr-4 flex justify-end">
				<Badge color="cyan">{table.getRowModel().rows.length} Rows</Badge>
			</div>
		</>
	)
}
