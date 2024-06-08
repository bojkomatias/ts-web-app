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
import { For, createSignal } from "solid-js"
import { Suspense } from "solid-js"
import type { User } from "~/db/user/schema"
import { Badge } from "~/ui/badge"
import { Divider } from "~/ui/divider"
import { Input } from "~/ui/input"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "~/ui/table"
import { columns } from "./users.columns"

export default function UsersTable({ users }: { users: User[] }) {
	const [data] = createSignal(users)
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
			<div class="mx-4">
				<Input
					value={globalFilter() ?? ""}
					onInput={(e) => debounceSetGlobalFilter(e.currentTarget.value)}
					placeholder="Search all columns..."
				/>
			</div>
			<Divider />
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
					<Suspense>
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
					</Suspense>
				</TableBody>
			</Table>
			<div class="mr-4 flex justify-end">
				<Badge color="cyan">{table.getRowModel().rows.length} Rows</Badge>
			</div>
		</>
	)
}
