import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { actions } from "../actions/schema"
import { roles } from "../role/schema"

/* Intermediate table between Roles <> Actions */
export const permissions = sqliteTable("permissions", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	roleId: text("role_id")
		.notNull()
		.references(() => roles.id),
	actionId: text("action_id")
		.notNull()
		.references(() => actions.id),
})
