import { type Table as TableType, flexRender } from "@tanstack/solid-table"
import {
	ChevronsDownIcon,
	ChevronsUpDownIcon,
	ChevronsUpIcon,
} from "lucide-solid"
import { For, Show } from "solid-js"

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "~/ui/table"

export function DataTable<T>(props: { table: TableType<T>; submission: any }) {
	return (
		<Table
			bleed
			class="[--gutter:theme(spacing.6)] sm:[--gutter:theme(spacing.8)]"
		>
			<TableHead>
				<For each={props.table.getHeaderGroups()}>
					{(headerGroup) => (
						<TableRow>
							<For each={headerGroup.headers}>
								{(header) => (
									<TableHeader>
										<Show when={!header.isPlaceholder}>
											<button
												type="button"
												class={
													header.column.getCanSort()
														? "flex cursor-default select-none items-center gap-2 font-semibold dark:hover:text-default-200 hover:text-default-800"
														: undefined
												}
												onClick={header.column.getToggleSortingHandler()}
											>
												{flexRender(
													header.column.columnDef.header,
													header.getContext(),
												)}
												{header.column.getCanSort()
													? {
															asc: <ChevronsUpIcon class="size-3.5" />,
															desc: <ChevronsDownIcon class="size-3.5" />,
														}[header.column.getIsSorted() as string] ?? (
															<ChevronsUpDownIcon class="size-3.5 stroke-default-500/70" />
														)
													: null}
											</button>
										</Show>
									</TableHeader>
								)}
							</For>
						</TableRow>
					)}
				</For>
			</TableHead>
			<TableBody>
				<Show when={props.submission?.pending}>
					<TableRow class="animate-pulse">
						<For each={props.table.getVisibleLeafColumns()}>
							{(col) => (
								<TableCell>
									{props.submission?.input[0][
										col.columnDef.id as keyof (typeof props.submission.input)[0]
									] ?? "Null"}
								</TableCell>
							)}
						</For>
					</TableRow>
				</Show>
				<For each={props.table.getRowModel().rows.slice(0, 20)}>
					{(row) => (
						<TableRow>
							<For each={row.getVisibleCells()}>
								{(cell) => (
									<TableCell>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								)}
							</For>
						</TableRow>
					)}
				</For>
			</TableBody>
		</Table>
	)
}
