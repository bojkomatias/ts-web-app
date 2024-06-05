import { createColumnHelper } from "@tanstack/solid-table"
import { Text } from "lucide-solid"
import { Badge } from "~/ui/badge"
import { Button } from "~/ui/button"
import type { Person } from "./makeData"

const columnHelper = createColumnHelper<Person>()

// Make some columns!
export const columns = [
	columnHelper.accessor("firstName", {
		cell: (info) => info.getValue(),
		footer: (props) => props.column.id,
	}),

	columnHelper.accessor((row) => row.lastName, {
		id: "lastName",
		cell: (info) => info.getValue(),
		header: () => <span>Last Name</span>,
		footer: (props) => props.column.id,
	}),

	columnHelper.accessor("age", {
		header: () => "Age",
		footer: (props) => props.column.id,
	}),

	columnHelper.accessor("visits", {
		header: () => <span>Visits</span>,
		footer: (props) => props.column.id,
	}),

	columnHelper.accessor("status", {
		header: "Status",
		cell: (info) => <Badge color="cyan">{info.getValue()}</Badge>,
		footer: (props) => props.column.id,
	}),

	columnHelper.accessor("progress", {
		header: "Profile Progress",
		footer: (props) => props.column.id,
	}),

	columnHelper.display({
		id: "actions",
		cell: (props) => (
			<div>
				<Button ghost>
					<Text />
				</Button>
			</div>
		),
	}),
]
