"use server"

import type { z } from "zod"
import { db } from "~/db/client"
import { actions, insertActionSchema } from "../schema"

export async function createAction(
	newAction: z.infer<typeof insertActionSchema>,
) {
	const parsedRole = insertActionSchema.parse(newAction)

	const [result] = await db.insert(actions).values(parsedRole).returning({
		id: actions.id,
		resource: actions.resource,
		action: actions.action,
	})

	return result
}
