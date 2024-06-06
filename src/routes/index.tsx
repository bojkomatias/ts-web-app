import { ChevronDownIcon } from "lucide-solid"
import {
	Dropdown,
	DropdownButton,
	DropdownItem,
	DropdownMenu,
} from "~/ui/dropdown"

export default function Index() {
	return (
		<Dropdown>
			<DropdownButton outline>
				Options
				<ChevronDownIcon />
			</DropdownButton>
			<DropdownMenu>
				<DropdownItem href="/users/1">View</DropdownItem>
				<DropdownItem href="/users/1/edit">Edit</DropdownItem>
				<DropdownItem onClick={() => null}>Delete</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	)
}
