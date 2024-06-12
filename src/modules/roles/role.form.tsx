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
import { insertRoleSchema } from "~/db/role/schema";
import { postRole } from "./actions/post-role";

export function RoleForm(props: {
  open: Accessor<boolean>;
  setOpen: Setter<boolean>;
}) {
  const queryClient = useQueryClient();

  const action = useAction(postRole);

  const form = createForm(() => ({
    defaultValues: {
      role: "",
    } as z.infer<typeof insertRoleSchema>,
    onSubmit: async ({ value }) => {
      props.setOpen(false);
      try {
        await action(value);
        await queryClient.refetchQueries({
          queryKey: ["get-roles-with-permissions"],
        });
      } catch (error) {
        console.error("Something went wrong creating action:", error);
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
          <DialogTitle>Create role</DialogTitle>
          <DialogDescription>
            Remember you got to talk with a developer, scopes or features are
            related to code flow.
          </DialogDescription>
          <DialogBody>
            <Fieldset>
              <FieldGroup>
                <form.Field
                  name="role"
                  validators={{
                    onSubmit: insertRoleSchema.shape.role,
                  }}
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
            </Fieldset>
          </DialogBody>
          <DialogActions>
            <Button type="reset" plain onClick={() => props.setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Create Role</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}
