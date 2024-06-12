"use server";

import type { z } from "zod";
import { db } from "~/db/client";
import { scopes, insertScopeSchema } from "../schema";
import { fakeDelay } from "~/lib/fake-delay";

export const createScope = async (
  newScope: z.infer<typeof insertScopeSchema>,
) => {
  await fakeDelay(2000);

  const [result] = await db.insert(scopes).values(newScope).returning();

  return result;
};
