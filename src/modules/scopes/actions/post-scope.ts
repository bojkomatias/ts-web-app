import { action } from "@solidjs/router"
import type { z } from "zod"
import { createScope } from "~/db/scopes/commands/create-scope"
import type { insertScopeSchema } from "~/db/scopes/schema"

export const postScope = action(
	async (value: z.infer<typeof insertScopeSchema>) => {
		return await createScope(value)
	},
)
