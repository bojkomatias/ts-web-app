import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import type { z } from "zod";

export const scopes = sqliteTable("scopes", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  resource: text("resource").notNull(),
  action: text("action").notNull(),

  updatedAt: text("updated_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`)
    .$onUpdate(() => sql`CURRENT_TIMESTAMP`),
  createdAt: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const insertScopeSchema = createInsertSchema(scopes, {
  resource: (schema) =>
    schema.resource.min(4, { message: "Must be at least 4 characters long" }),
  action: (schema) =>
    schema.action.min(4, { message: "Must be at least 4 characters long" }),
}).pick({ resource: true, action: true });

export const selectScopeSchema = createSelectSchema(scopes);

export type Scope = z.infer<typeof selectScopeSchema>;
