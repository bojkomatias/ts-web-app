"use server";

import type { z } from "zod";
import { db } from "~/db/client";
import { scopes, insertScopeSchema } from "../schema";
import { fakeDelay } from "~/lib/fake-delay";

export const createScope = async (
  newAction: z.infer<typeof insertScopeSchema>,
) => {
  await fakeDelay(6000);
  try {
    const data = insertScopeSchema.parse(newAction);
    const [result] = await db.insert(scopes).values(data).returning({
      id: scopes.id,
      resource: scopes.resource,
      action: scopes.action,
    });

    return result;
  } catch (error) {
    console.error(error);
    return new Error("An error ocurred", { cause: error });
  }
};
