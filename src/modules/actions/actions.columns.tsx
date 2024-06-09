import { createColumnHelper } from "@tanstack/solid-table"
import type { Action } from "~/db/actions/schema"
import { Button } from "~/ui/button"

const columnHelper = createColumnHelper<Action>()

export const columns = [
	columnHelper.accessor("id", {
		header: "id",
		cell: (info) => info.getValue(),
		footer: (props) => props.column.id,
	}),

	columnHelper.accessor((row) => row.resource, {
		id: "resource",
		cell: (info) => info.getValue(),
		header: () => "Resource",
		footer: (props) => props.column.id,
	}),

	columnHelper.accessor("action", {
		id: "resource",
		header: () => "Action",
		cell: (info) => info.getValue(),
		footer: (props) => props.column.id,
	}),

	columnHelper.display({
		id: "actions",
		cell: (props) => (
			<div>
				<Button plain>Ejecutar</Button>
			</div>
		),
	}),
]
