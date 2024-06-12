"use server";

import { permissions } from "~/db/permissions/schema";
import { db } from "../../client";
import { roles } from "../schema";
import { eq } from "drizzle-orm";

export async function getRolesWithPermissions() {
  return db
    .select()
    .from(roles)
    .leftJoin(permissions, eq(permissions.roleId, roles.id));
}
