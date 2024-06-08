import { createSignal } from "solid-js"
import { SolidMarkdown } from "solid-markdown"
import { Button } from "~/ui/button"
import { Drawer, DrawerCloseButton, DrawerContent } from "~/ui/drawer"

const markdown = `
  # Client project starter

  ### Todo

  - ✓ Define project architecture
  - [x] Configure theme
  - [x] Configure linter + formatter
  - [x] Connect ORM + DB
  - [] Setup query layer
  - [] Setup form management
  - [] Validations
  - [] Internacionalization
  - [] Caching
  - [] Mutation + invalidation

  ## Developing

  Comment of leave examples to copy and paste easily for future scaffolding
`

export default function Index() {
	const [open, setOpen] = createSignal(false)
	return (
		<div class="">
			<Button onClick={() => setOpen(true)}>Show modal</Button>

			<Drawer open={open()} onOpenChange={setOpen}>
				<DrawerContent fromLeft>
					<DrawerCloseButton />
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
					officiis consequatur aspernatur dicta quibusdam quam ipsa voluptates
					doloremque reiciendis sunt! Tempora autem eaque commodi maxime
					perferendis temporibus dolores debitis praesentium.
				</DrawerContent>
			</Drawer>

			<SolidMarkdown class="prose dark:prose-invert mx-auto rounded-lg p-12 dark:bg-default-800">
				{markdown}
			</SolidMarkdown>
		</div>
	)
}
