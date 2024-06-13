import { createColumnHelper } from "@tanstack/solid-table"
import type { getRolesWithPermissions } from "~/db/role/queries/get-role-with-permissions"
import { Button } from "~/ui/button"

const columnHelper =
	createColumnHelper<
		ArrayElement<Awaited<ReturnType<typeof getRolesWithPermissions>>>
	>()

// Always put "id" in your columns to enable features
export const columns = [
	columnHelper.accessor("role.role", {
		id: "role.role",
		header: () => "Role",
		cell: (info) => info.getValue(),
		footer: (props) => props.column.id,
	}),

	columnHelper.accessor("scope.resource", {
		id: "scope.resource",
		header: () => "Resource",
		cell: (info) => info.getValue(),
		footer: (props) => props.column.id,
	}),

	columnHelper.accessor("scope.action", {
		id: "scope.action",
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
