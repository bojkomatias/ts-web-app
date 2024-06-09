import { PlusIcon } from "lucide-solid"
import { createSignal } from "solid-js"
import { ActionsForm } from "~/modules/actions/actions.form"
import { Button } from "~/ui/button"

export default function Actions() {
	const [isFormOpen, setIsFormOpen] = createSignal(false)
	return (
		<>
			<ActionsForm open={isFormOpen} setOpen={setIsFormOpen} />

			<Button onClick={() => setIsFormOpen(true)} size="sm">
				<PlusIcon data-slot="icon" /> Action
			</Button>
		</>
	)
}
