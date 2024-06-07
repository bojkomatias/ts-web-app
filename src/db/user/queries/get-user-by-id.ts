"use server"

import { eq } from "drizzle-orm"
import { db } from "~/db/client"
import { users } from "../schema"

export async function getUser(id: number) {
	const result = await db.select().from(users).where(eq(users.id, id))
	return result[0]
}
