import { createColumnHelper } from "@tanstack/solid-table";
import { Text } from "lucide-solid";
import { User } from "~/db/user/schema";
import { Badge } from "~/ui/badge";
import { Button } from "~/ui/button";

const columnHelper = createColumnHelper<User>();

// Make some columns!
export const columns = [
  columnHelper.accessor("givenName", {
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
  }),

  columnHelper.accessor((row) => row.familiyName, {
    id: "lastName",
    cell: (info) => info.getValue(),
    header: () => <span>Last Name</span>,
    footer: (props) => props.column.id,
  }),

  columnHelper.accessor("email", {
    header: () => "Email",
    footer: (props) => props.column.id,
  }),

  columnHelper.accessor("createAt", {
    header: () => <span>Visits</span>,
    footer: (props) => props.column.id,
  }),

  columnHelper.display({
    id: "actions",
    cell: (props) => (
      <div>
        <Button plain>
          <Text />
        </Button>
      </div>
    ),
  }),
];
