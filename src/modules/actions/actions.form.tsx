import { createForm } from "@tanstack/solid-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import type { Accessor, Setter } from "solid-js";
import { Button } from "~/ui/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "~/ui/dialog";
import { Input } from "~/ui/input";

import { insertActionSchema } from "~/db/actions/schema";

import { action, useAction, useNavigate } from "@solidjs/router";
import { useQueryClient } from "@tanstack/solid-query";
import type { z } from "zod";
import { createAction } from "~/db/actions/commands/create-action";
import {
  ErrorMesssage,
  Field,
  FieldGroup,
  Fieldset,
  Label,
} from "~/ui/fieldset";
import { getAllActionsQueryOptions } from "~/lib/query-options/actions-query";
import { loadingCreateActionQueryOptions } from "~/lib/query-options/action-query";

const _action = action(async (value: z.infer<typeof insertActionSchema>) => {
  return await createAction(value);
});

export function ActionsForm(props: {
  open: Accessor<boolean>;
  setOpen: Setter<boolean>;
}) {
  const queryClient = useQueryClient();

  const serverAction = useAction(_action);

  const form = createForm(() => ({
    defaultValues: {
      resource: "",
      action: "",
    } as z.infer<typeof insertActionSchema>,
    onSubmit: async ({ value }) => {
      // const existingActions = await queryClient.ensureQueryData(
      //   getAllActionsQueryOptions,
      // );

      // // placeholder loading state
      // queryClient.setQueryData(loadingCreateActionQueryOptions.queryKey, {
      //   action: value,
      // });

      console.log(" NAVEGANDO");
      props.setOpen(false);

      try {
        const res = await serverAction(value);
        console.log("RESSSS", res);
      } catch (error) {
        console.error("Something went wrong creating action:", error);
      } finally {
      }
    },
    validatorAdapter: zodValidator,
  }));

  return (
    <Dialog open={props.open()} onOpenChange={props.setOpen}>
      <DialogContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <DialogTitle>Create action</DialogTitle>
          <DialogDescription>
            Remember you got to talk with a developer, actions or features are
            related to code flow.
          </DialogDescription>
          <DialogBody>
            <Fieldset>
              <FieldGroup>
                <form.Field
                  name="resource"
                  validators={{ onBlur: insertActionSchema.shape.resource }}
                >
                  {(field) => (
                    <Field>
                      <Label>Resource</Label>
                      <Input
                        name={field().name}
                        value={field().state.value}
                        onBlur={field().handleBlur}
                        onInput={(e) => field().handleChange(e.target.value)}
                      />
                      <ErrorMesssage>
                        {field().state.meta.touchedErrors}
                      </ErrorMesssage>
                    </Field>
                  )}
                </form.Field>
                <form.Field
                  name="action"
                  validators={{ onBlur: insertActionSchema.shape.action }}
                >
                  {(field) => (
                    <Field>
                      <Label>Action</Label>
                      <Input
                        name={field().name}
                        value={field().state.value}
                        onBlur={field().handleBlur}
                        onInput={(e) => field().handleChange(e.target.value)}
                      />
                      <ErrorMesssage>
                        {field().state.meta.touchedErrors}
                      </ErrorMesssage>
                    </Field>
                  )}
                </form.Field>
              </FieldGroup>
            </Fieldset>
          </DialogBody>
          <DialogActions>
            <Button type="reset" plain onClick={() => props.setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Create Action</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}
