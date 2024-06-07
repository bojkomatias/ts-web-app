import { createSignal } from "solid-js"
import { Button } from "~/ui/button"
import { Checkbox } from "~/ui/checkbox"
import {
	Dialog,
	DialogActions,
	DialogBody,
	DialogContent,
	DialogDescription,
	DialogTitle,
} from "~/ui/dialog"
import { Field, Label } from "~/ui/fieldset"
import { Input } from "~/ui/input"

export default function Index() {
	const [open, setIsOpen] = createSignal(false)
	return (
		<div class="flex h-screen items-center justify-center gap-4 bg-default-500 dark:bg-default-500">
			<Button href="/app">Go to App</Button>
			<Checkbox />
			<Button onClick={() => setIsOpen(true)}>Refund payment</Button>
			<Dialog open={open()} onOpenChange={setIsOpen}>
				<DialogContent>
					<DialogTitle>Refund payment</DialogTitle>
					<DialogDescription>
						The refund will be reflected in the customer’s bank account 2 to 3
						business days after processing.
					</DialogDescription>
					<DialogBody>
						<Field>
							<Label>Amount</Label>
							<Input name="amount" placeholder="$0.00" />
						</Field>
					</DialogBody>
					<DialogActions>
						<Button plain onClick={() => setIsOpen(false)}>
							Cancel
						</Button>
						<Button onClick={() => setIsOpen(false)}>Refund</Button>
					</DialogActions>
				</DialogContent>
			</Dialog>
		</div>
	)
}
