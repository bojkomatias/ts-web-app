import { queryOptions } from "@tanstack/solid-query";
import { getRolesWithPermissions } from "~/db/role/queries/get-role-with-permissions";

export const getRolesWithPermissionsQueryOptions = queryOptions({
  queryKey: ["get-roles-with-permissions"],
  queryFn: async () => await getRolesWithPermissions(),
  staleTime: 1000 * 60 * 15,
});
