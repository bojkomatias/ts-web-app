import { action } from "@solidjs/router";
import { z } from "zod";
import { createRole } from "~/db/role/commands/create-role";
import { insertRoleSchema } from "~/db/role/schema";

export const postRole = action(
  async (value: z.infer<typeof insertRoleSchema>) => {
    return await createRole(value);
  },
);
