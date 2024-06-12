import { createColumnHelper } from "@tanstack/solid-table";
import { Role } from "~/db/role/schema";
import { Button } from "~/ui/button";

const columnHelper = createColumnHelper<Role>();

// Always put "id" in your columns to enable features
export const columns = [
  columnHelper.accessor("id", {
    id: "id",
    header: "Id",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
  }),

  columnHelper.accessor((row) => row.role, {
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
];
