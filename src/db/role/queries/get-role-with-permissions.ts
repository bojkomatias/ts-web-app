"use server"

import { db } from "../../client"

export async function getRolesWithPermissions() {
	return await db.query.permissions.findMany({
		columns: {},
		with: {
			role: { columns: { role: true } },
			scope: { columns: { resource: true, action: true } },
		},
	})
}
