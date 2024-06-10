import { queryOptions } from "@tanstack/solid-query";
import { getActions } from "~/db/actions/queries/get-actions";

export const getAllActionsQueryOptions = queryOptions({
  queryKey: ["get-all-actions"],
  queryFn: async () => await getActions(),
  staleTime: 1000 * 60 * 15,
});
