import { createColumnHelper } from "@tanstack/solid-table"
import type { Scope } from "~/db/scopes/schema"
import { Button } from "~/ui/button"

const columnHelper = createColumnHelper<Scope>()

// Always put "id" in your columns to enable features
export const columns = [
	columnHelper.accessor("id", {
		id: "id",
		header: "Id",
		cell: (info) => info.getValue(),
		footer: (props) => props.column.id,
	}),

	columnHelper.accessor((row) => row.resource, {
		id: "resource",
		header: () => "Resource",
		cell: (info) => info.getValue(),
		footer: (props) => props.column.id,
	}),

	columnHelper.accessor("action", {
		id: "action",
		header: () => "Action",
		cell: (info) => info.getValue(),
		footer: (props) => props.column.id,
	}),

	columnHelper.display({
		id: "actions",
		enableSorting: false,
		cell: (props) => (
			<div>
				<Button plain>Ejecutar</Button>
			</div>
		),
	}),
]
