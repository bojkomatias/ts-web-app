import { sql } from "drizzle-orm"
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import type { z } from "zod"
import { roles } from "../role/schema"

// SQL Table
export const users = sqliteTable("users", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	givenName: text("given_name").notNull(),
	familiyName: text("family_name"),
	email: text("email"),
	phone: text("phone"),

	roleId: integer("role_id").references(() => roles.id),

	updatedAt: text("updated_at")
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`)
		.$onUpdate(() => sql`CURRENT_TIMESTAMP`),
	createAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
})

export const insertUserSchema = createInsertSchema(users)
// Schema for selecting a user - can be used to validate API response
export const selectUserSchema = createSelectSchema(users)

export type User = z.infer<typeof selectUserSchema>
