import Database from "better-sqlite3"
import { drizzle } from "drizzle-orm/better-sqlite3"
import * as permissions from "./permissions/schema"
import * as roles from "./role/schema"
import * as scopes from "./scopes/schema"
import * as users from "./user/schema"

const sqlite = new Database("sqlite.db")

export const db = drizzle(sqlite, {
	schema: { ...users, ...roles, ...permissions, ...scopes },
})
