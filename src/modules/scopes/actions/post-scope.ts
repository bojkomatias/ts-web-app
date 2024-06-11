import { action } from "@solidjs/router";
import { z } from "zod";
import { createScope } from "~/db/scopes/commands/create-scope";
import { insertScopeSchema } from "~/db/scopes/schema";

export const postScope = action(
  async (value: z.infer<typeof insertScopeSchema>) => {
    return await createScope(value);
  },
);
