import { useAction } from "@solidjs/router"
import { createForm } from "@tanstack/solid-form"
import { useQueryClient } from "@tanstack/solid-query"
import { zodValidator } from "@tanstack/zod-form-adapter"
import type { z } from "zod"
import { insertScopeSchema } from "~/db/scopes/schema"
import { Button } from "~/ui/button"
import {
	Dialog,
	DialogActions,
	DialogBody,
	DialogContent,
	DialogDescription,
	DialogTitle,
} from "~/ui/dialog"
import {
	ErrorMesssage,
	Field,
	FieldGroup,
	Fieldset,
	Label,
} from "~/ui/fieldset"
import { Input } from "~/ui/input"
import { postScope } from "./actions/post-scope"

export function ScopeForm(props: {
	open: boolean
	setOpen: (isOpen: boolean) => void
}) {
	const queryClient = useQueryClient()

	const action = useAction(postScope)

	const form = createForm(() => ({
		defaultValues: {
			resource: "",
			action: "",
		} as z.infer<typeof insertScopeSchema>,
		onSubmit: async ({ value }) => {
			props.setOpen(false)
			try {
				await action(value)
				await queryClient.refetchQueries({ queryKey: ["get-all-scopes"] })
			} catch (error) {
				console.error("Something went wrong creating action:", error)
			}
		},
		validatorAdapter: zodValidator,
	}))

	return (
		<Dialog open={props.open()} onOpenChange={props.setOpen}>
			<DialogContent>
				<form
					onSubmit={(e) => {
						e.preventDefault()
						e.stopPropagation()
						form.handleSubmit()
					}}
				>
					<DialogTitle>Create scope</DialogTitle>
					<DialogDescription>
						Remember you got to talk with a developer, scopes or features are
						related to code flow.
					</DialogDescription>
					<DialogBody>
						<Fieldset>
							<FieldGroup>
								<form.Field
									name="resource"
									validators={{
										onSubmit: insertScopeSchema.shape.resource,
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
								<form.Field
									name="action"
									validators={{ onSubmit: insertScopeSchema.shape.action }}
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
	)
}
