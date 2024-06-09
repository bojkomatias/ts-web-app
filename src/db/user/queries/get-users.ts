"use server"

import { db } from "~/db/client"
import { fakeDelay } from "~/lib/fake-delay"
import { users } from "../schema"

export async function getUsers() {
	await fakeDelay(2000)
	return await db.select().from(users)
}
