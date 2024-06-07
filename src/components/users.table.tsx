import { debounce } from "@solid-primitives/scheduled"
import {
	ColumnDef,
	type ColumnFiltersState,
	createColumnHelper,
	createSolidTable,
	flexRender,
	getCoreRowModel,
	getFacetedMinMaxValues,
	getFacetedRowModel,
	getFacetedUniqueValues,
	getFilteredRowModel,
} from "@tanstack/solid-table"
import { For, createSignal } from "solid-js"
import { Input } from "~/ui/input"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "~/ui/table"
import { Person, people } from "./makeData"
import { columns } from "./users.columns"

export function UsersTable() {
	const [data] = createSignal(people)
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
			<div class="border-line border-b p-1">
				<Input
					value={globalFilter() ?? ""}
					onInput={(e) => debounceSetGlobalFilter(e.currentTarget.value)}
					placeholder="Search all columns..."
				/>
			</div>
			<div class="h-full overflow-y-auto px-px">
				<Table bleed striped>
					<TableHead>
						<For each={table.getHeaderGroups()}>
							{(headerGroup) => (
								<TableRow>
									<For each={headerGroup.headers}>
										{(header) => (
											<TableHeader>
												{header.isPlaceholder ? null : (
													<>
														{flexRender(
															header.column.columnDef.header,
															header.getContext(),
														)}
													</>
												)}
											</TableHeader>
										)}
									</For>
								</TableRow>
							)}
						</For>
					</TableHead>
					<TableBody>
						<For each={table.getRowModel().rows}>
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
			</div>
			<div>{table.getRowModel().rows.length} Rows</div>
		</>
	)
}
