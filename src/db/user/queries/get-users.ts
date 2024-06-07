"use server"

import { db } from "~/db/client"
import { users } from "../schema"

export async function getUsers() {
	return db.select().from(users)
}
