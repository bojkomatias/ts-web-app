import { queryOptions } from "@tanstack/solid-query";
import { getScopes } from "~/db/scopes/queries/get-scopes";

export const getAllScopesQueryOptions = queryOptions({
  queryKey: ["get-all-scopes"],
  queryFn: async () => await getScopes(),
  staleTime: 1000 * 60 * 15,
});
