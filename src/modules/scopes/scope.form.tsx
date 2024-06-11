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
import { useAction } from "@solidjs/router";
import { useQueryClient } from "@tanstack/solid-query";
import type { z } from "zod";

import {
  ErrorMesssage,
  Field,
  FieldGroup,
  Fieldset,
  Label,
} from "~/ui/fieldset";
import { insertScopeSchema } from "~/db/scopes/schema";
import { getAllScopesQueryOptions } from "./queries/scopes-query";
import { postScope } from "./actions/post-scope";

export function ScopeForm(props: {
  open: Accessor<boolean>;
  setOpen: Setter<boolean>;
}) {
  const queryClient = useQueryClient();

  const action = useAction(postScope);

  const form = createForm(() => ({
    defaultValues: {
      resource: "",
      action: "",
    } as z.infer<typeof insertScopeSchema>,
    onSubmit: async ({ value }) => {
      const existingActions = await queryClient.ensureQueryData(
        getAllScopesQueryOptions,
      );

      // placeholder loading state
      // queryClient.setQueryData(loadingCreateActionQueryOptions.queryKey, {
      //   action: value,
      // });

      props.setOpen(false);

      try {
        const res = await action(value);
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
                  validators={{ onBlur: insertScopeSchema.shape.resource }}
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
                  validators={{ onBlur: insertScopeSchema.shape.action }}
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
