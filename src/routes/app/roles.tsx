import { RouteSectionProps } from "@solidjs/router";
import { createQuery } from "@tanstack/solid-query";
import { PlusIcon } from "lucide-solid";
import { Switch, Match } from "solid-js";
import { getRolesWithPermissionsQueryOptions } from "~/modules/roles/queries/roles-with-permissions-query";
import { RoleForm } from "~/modules/roles/role.form";
import { RolesTable } from "~/modules/roles/roles.table";
import { getAllScopesQueryOptions } from "~/modules/scopes/queries/scopes-query";
import { Button } from "~/ui/button";

export default function RolesLayout(props: RouteSectionProps) {
  const query = createQuery(() => getRolesWithPermissionsQueryOptions);

  return (
    <Switch>
      <Match when={query.isPending}>
        <p>Loading...</p>
      </Match>
      <Match when={query.isError}>
        <p>Error: {query.error?.message}</p>
      </Match>
      <Match when={query.isSuccess}>
        {query.data && (
          <>
            <RolesTable
              roles={query.data}
              slot={
                <Button href="/app/roles/new" size="sm">
                  <PlusIcon data-slot="icon" /> Scope
                </Button>
              }
            />
            {props.children}
          </>
        )}
      </Match>
    </Switch>
  );
}
