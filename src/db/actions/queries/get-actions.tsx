"use server"

import { db } from "~/db/client"
import { actions } from "../schema"

export async function getActions() {
	return await db.select().from(actions)
}
