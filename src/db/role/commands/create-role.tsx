"use server"

import type { z } from "zod"
import { db } from "~/db/client"
import { insertPermissionsSchema } from "../../permissions/schema"
import { insertRoleSchema, roles } from "../schema"

const schema = insertRoleSchema.merge(insertPermissionsSchema)

export async function createRole(newRole: z.infer<typeof schema>) {
	const parsedRole = schema.parse(newRole)

	const [result] = await db
		.insert(roles)
		.values(parsedRole)
		.returning({ id: roles.id, role: roles.role })

	return result
}
