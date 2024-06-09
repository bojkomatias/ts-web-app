import type { Accessor, Setter } from "solid-js"
import { Button } from "~/ui/button"
import {
	Dialog,
	DialogActions,
	DialogBody,
	DialogContent,
	DialogDescription,
	DialogTitle,
} from "~/ui/dialog"

export function ActionsForm(props: {
	open: Accessor<boolean>
	setOpen: Setter<boolean>
}) {
	return (
		<Dialog open={props.open()} onOpenChange={props.setOpen}>
			<DialogContent>
				<form>
					<DialogTitle>Create action</DialogTitle>
					<DialogDescription>
						Remember you got to talk with a developer, actions or features are
						related to code flow.
					</DialogDescription>
					<DialogBody>sape</DialogBody>
					<DialogActions>
						<Button type="reset" plain onClick={() => props.setOpen(false)}>
							Cancel
						</Button>
						<Button type="submit" onClick={() => props.setOpen(false)}>
							Create Action
						</Button>
					</DialogActions>
				</form>
			</DialogContent>
		</Dialog>
	)
}
