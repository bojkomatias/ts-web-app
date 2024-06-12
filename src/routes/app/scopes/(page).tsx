import { createQuery } from "@tanstack/solid-query";
import { PlusIcon } from "lucide-solid";
import { createEffect } from "solid-js";
import { Match, Switch, createSignal } from "solid-js";
import { getAllScopesQueryOptions } from "~/modules/scopes/queries/scopes-query";
import { ScopeForm } from "~/modules/scopes/scope.form";
import { ScopesTable } from "~/modules/scopes/scopes.table";
import { Button } from "~/ui/button";

export default function Scopes() {
  const query = createQuery(() => getAllScopesQueryOptions);

  const [isFormOpen, setIsFormOpen] = createSignal(false);

  createEffect(() => console.log("I have changed =>", query.data));
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
            <ScopeForm open={isFormOpen} setOpen={setIsFormOpen} />
            <ScopesTable
              scopes={query.data}
              slot={
                <Button onClick={() => setIsFormOpen(true)} size="sm">
                  <PlusIcon data-slot="icon" /> Scope
                </Button>
              }
            />
          </>
        )}
      </Match>
    </Switch>
  );
}
