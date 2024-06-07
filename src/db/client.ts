import { createClient } from "@libsql/client"
import { drizzle } from "drizzle-orm/libsql"
import { z } from "zod"

const client = createClient({
	url: z.string().parse(process.env.DATABASE_URL),
	authToken: z.string().parse(process.env.DATABASE_TOKEN),
})

export const db = drizzle(client)
