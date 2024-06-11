"use server";

import { db } from "~/db/client";
import { scopes } from "../schema";
import { desc } from "drizzle-orm";

export const getScopes = async () =>
  await db.select().from(scopes).orderBy(desc(scopes.id));
