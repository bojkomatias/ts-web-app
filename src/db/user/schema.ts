import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

// SQL Table
export const users = sqliteTable("users", {
  id: integer("id"),
  givenName: text("given_name").notNull(),
  familiyName: text("family_name"),
  email: text("email"),
  phone: text("phone"),
  createAt: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

// Schema for inserting a user - can be used to validate API requests
export const insertUserSchema = createInsertSchema(users);
// Schema for selecting a user - can be used to validate API responses
export const selectUserSchema = createSelectSchema(users);

export type User = z.infer<typeof selectUserSchema>;
