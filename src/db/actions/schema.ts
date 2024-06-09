import { sql } from "drizzle-orm"
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import type { z } from "zod"

export const actions = sqliteTable("actions", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	resource: text("resource").notNull(),
	action: text("action").notNull(),

	updatedAt: text("updated_at")
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`)
		.$onUpdate(() => sql`CURRENT_TIMESTAMP`),
	createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
})

export const insertActionSchema = createInsertSchema(actions)

export const selectActionSchema = createSelectSchema(actions)

export type Action = z.infer<typeof selectActionSchema>
