import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { roles } from "../role/schema";
import { scopes } from "../scopes/schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

/* Intermediate table between Roles <> Scopes  */
export const permissions = sqliteTable("permissions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  roleId: text("role_id")
    .notNull()
    .references(() => roles.id),
  scopeId: text("scope_id")
    .notNull()
    .references(() => scopes.id),
});

export const selectPermissionsSchema = createSelectSchema(permissions);

export const insertPermissionsSchema = createInsertSchema(permissions).omit({
  id: true,
});
