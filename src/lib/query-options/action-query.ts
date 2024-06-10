import { queryOptions } from "@tanstack/solid-query"
import type { z } from "zod"
import type { insertActionSchema } from "~/db/actions/schema"

// export const getActionQueryOptions = () =>
//   queryOptions({
//     queryKey: ["get-action"],
//     queryFn: getActions,
//     staleTime: 1000 * 60 * 15,
//   });

export const loadingCreateActionQueryOptions = queryOptions<{
	action?: z.infer<typeof insertActionSchema>
}>({
	queryKey: ["loading-create-action"],
	queryFn: async () => {
		return {}
	},
	staleTime: Number.POSITIVE_INFINITY,
})
