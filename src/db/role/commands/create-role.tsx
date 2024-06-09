"use server"

import type { z } from "zod"
import { db } from "~/db/client"
import { insertRoleSchema, roles } from "../schema"

export async function createRole(newRole: z.infer<typeof insertRoleSchema>) {
	const parsedRole = insertRoleSchema.parse(newRole)

	const [result] = await db
		.insert(roles)
		.values(parsedRole)
		.returning({ id: roles.id, role: roles.role })

	return result
}
