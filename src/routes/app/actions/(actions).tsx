import { createQuery } from "@tanstack/solid-query";
import { PlusIcon } from "lucide-solid";
import { Match, Switch, createSignal } from "solid-js";
import { getActions } from "~/db/actions/queries/get-actions";
import { getAllActionsQueryOptions } from "~/lib/query-options/actions-query";
import { ActionsForm } from "~/modules/actions/actions.form";
import ActionsTable from "~/modules/actions/actions.table";
import { Button } from "~/ui/button";

export default function Actions() {
  const query = createQuery(() => getAllActionsQueryOptions);

  const [isFormOpen, setIsFormOpen] = createSignal(false);

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
            <ActionsForm open={isFormOpen} setOpen={setIsFormOpen} />
            <ActionsTable
              actions={query.data}
              slot={
                <Button onClick={() => setIsFormOpen(true)} size="sm">
                  <PlusIcon data-slot="icon" /> Action
                </Button>
              }
            />
          </>
        )}
      </Match>
    </Switch>
  );
}
