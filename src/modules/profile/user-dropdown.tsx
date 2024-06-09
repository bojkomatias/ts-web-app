import {
	ArrowRightIcon,
	ChevronUpIcon,
	LightbulbIcon,
	SettingsIcon,
	ShieldCheckIcon,
	UserIcon,
} from "lucide-solid"
import { Avatar } from "~/ui/avatar"
import {
	Dropdown,
	DropdownButton,
	DropdownDivider,
	DropdownItem,
	DropdownLabel,
	DropdownMenu,
} from "~/ui/dropdown"

export function UserDropdown(props: { avatarOnly?: true }) {
	return (
		<Dropdown>
			{!props.avatarOnly ? (
				<DropdownButton class="w-full justify-normal" plain>
					<span class="flex min-w-0 flex-grow items-center gap-3">
						<Avatar src="/matu.jpeg" class="size-8" square alt="" />
						<span class="min-w-0">
							<span class="block truncate text-start font-medium text-default-950 text-sm/5 dark:text-white">
								Matías Bojko
							</span>
							<span class="block truncate font-normal text-default-500 text-xs/5 dark:text-default-400">
								bojko.matias@example.com
							</span>
						</span>
					</span>
					<ChevronUpIcon data-slot="icon" />
				</DropdownButton>
			) : (
				<DropdownButton class="!px-1.5" plain>
					<Avatar class="size-6" src="/matu.jpeg" square />
				</DropdownButton>
			)}
			<DropdownMenu class="min-w-64">
				<DropdownItem href="/my-profile">
					<UserIcon data-slot="icon" />
					<DropdownLabel>My profile</DropdownLabel>
				</DropdownItem>
				<DropdownItem href="/settings">
					<SettingsIcon data-slot="icon" />
					<DropdownLabel>Settings</DropdownLabel>
				</DropdownItem>
				<DropdownDivider />
				<DropdownItem href="/privacy-policy">
					<ShieldCheckIcon data-slot="icon" />
					<DropdownLabel>Privacy policy</DropdownLabel>
				</DropdownItem>
				<DropdownItem href="/share-feedback">
					<LightbulbIcon data-slot="icon" />
					<DropdownLabel>Share feedback</DropdownLabel>
				</DropdownItem>
				<DropdownDivider />
				<DropdownItem href="/logout">
					<ArrowRightIcon data-slot="icon" />
					<DropdownLabel>Sign out</DropdownLabel>
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	)
}
