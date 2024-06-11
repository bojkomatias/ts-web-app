import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { roles } from "../role/schema";
import { scopes } from "../scopes/schema";

/* Intermediate table between Roles <> Actions */
export const permissions = sqliteTable("permissions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  roleId: text("role_id")
    .notNull()
    .references(() => roles.id),
  scopeId: text("scope_id")
    .notNull()
    .references(() => scopes.id),
});
