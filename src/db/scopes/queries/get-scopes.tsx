"use server"

import { desc } from "drizzle-orm"
import { db } from "~/db/client"
import { scopes } from "../schema"

export const getScopes = async () =>
	await db.select().from(scopes).orderBy(desc(scopes.id))
