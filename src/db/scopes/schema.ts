import { relations, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { permissions } from "../permissions/schema";

export const scopes = sqliteTable("scopes", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  resource: text("resource").$type<Resource>().notNull(),
  action: text("action").$type<Action>().notNull(),

  updatedAt: text("updated_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`)
    .$onUpdate(() => sql`CURRENT_TIMESTAMP`),
  createdAt: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const scopesRelations = relations(scopes, ({ many }) => ({
  permissions: many(permissions),
}));

const resource = z.enum(["users", "roles", "permissions"]);
const action = z.enum(["read", "update", "create", "delete"]);

export const insertScopeSchema = createInsertSchema(scopes, {
  resource,
  action,
}).pick({ resource: true, action: true });

export const selectScopeSchema = createSelectSchema(scopes);

export type Scope = z.infer<typeof selectScopeSchema>;

type Resource = z.infer<typeof resource>;
type Action = z.infer<typeof action>;
