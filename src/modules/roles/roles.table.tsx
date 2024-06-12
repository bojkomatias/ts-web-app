import { debounce } from "@solid-primitives/scheduled";
import {
  type ColumnFiltersState,
  createSolidTable,
  flexRender,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
} from "@tanstack/solid-table";
import { For, type JSX, Show, createSignal } from "solid-js";
import { columns } from "./scopes.columns";
import { Badge } from "~/ui/badge";
import { Divider } from "~/ui/divider";
import { Input } from "~/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/ui/table";
import {
  ChevronsDownIcon,
  ChevronsDownUpIcon,
  ChevronsUpDownIcon,
  ChevronsUpIcon,
} from "lucide-solid";
import { Scope } from "~/db/scopes/schema";
import { useSubmission } from "@solidjs/router";
import { postScope } from "./actions/post-scope";

export function ScopesTable(props: { scopes: Scope[]; slot?: JSX.Element }) {
  const submission = useSubmission(postScope);

  const [columnFilters, setColumnFilters] = createSignal<ColumnFiltersState>(
    [],
  );
  const [globalFilter, setGlobalFilter] = createSignal("");
  const debounceSetGlobalFilter = debounce(
    (value: string) => setGlobalFilter(value),
    200,
  );
  const [sorting, setSorting] = createSignal<SortingState>([]);

  const table = createSolidTable({
    get data() {
      return props.scopes;
    },
    columns,
    state: {
      get columnFilters() {
        return columnFilters();
      },
      get globalFilter() {
        return globalFilter();
      },
      get sorting() {
        return sorting();
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
  });

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
                        <button
                          type="button"
                          class={
                            header.column.getCanSort()
                              ? "cursor-default select-none flex gap-2 font-semibold hover:text-default-800 dark:hover:text-default-200 items-center"
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
          <Show when={submission.pending}>
            <TableRow class="animate-pulse">
              <For each={table.getVisibleLeafColumns()}>
                {(col) => (
                  <TableCell>
                    {submission.input[0][
                      col.columnDef.id as keyof (typeof submission.input)[0]
                    ] ?? "Null"}
                  </TableCell>
                )}
              </For>
            </TableRow>
          </Show>
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
  );
}
