import { sql } from "drizzle-orm"
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import type { z } from "zod"

// SQL Table
export const roles = sqliteTable("roles", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	role: text("role").notNull().unique(),

	updatedAt: text("updated_at")
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`)
		.$onUpdate(() => sql`CURRENT_TIMESTAMP`),
	createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
})

export const insertRoleSchema = createInsertSchema(roles)

export const selectRoleSchema = createSelectSchema(roles)

export type Role = z.infer<typeof selectRoleSchema>
