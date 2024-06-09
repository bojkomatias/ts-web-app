import type { RouteSectionProps } from "@solidjs/router"
import {
	ArrowRightIcon,
	ChevronUpIcon,
	HomeIcon,
	InboxIcon,
	KeyRoundIcon,
	LightbulbIcon,
	MessageCircleQuestionIcon,
	SearchIcon,
	SettingsIcon,
	ShieldCheckIcon,
	SparklesIcon,
	UserCogIcon,
	UserIcon,
	UsersIcon,
} from "lucide-solid"
import { UserDropdown } from "~/modules/profile/user-dropdown"
import { Avatar } from "~/ui/avatar"
import {
	Dropdown,
	DropdownButton,
	DropdownDivider,
	DropdownItem,
	DropdownLabel,
	DropdownMenu,
} from "~/ui/dropdown"
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from "~/ui/navbar"
import {
	Sidebar,
	SidebarBody,
	SidebarHeader,
	SidebarItem,
	SidebarLabel,
	SidebarSection,
	SidebarSpacer,
} from "~/ui/sidebar"
import { SidebarLayout } from "~/ui/sidebar-layout"

export default function AppLayout(props: RouteSectionProps) {
	return (
		<SidebarLayout navbar={<AppNavbar />} sidebar={<AppSidebar />}>
			{props.children}
		</SidebarLayout>
	)
}

function AppNavbar() {
	return (
		<Navbar>
			<NavbarSpacer />
			<NavbarSection>
				<NavbarItem href="/search" aria-label="Search">
					<SearchIcon data-slot="icon" />
				</NavbarItem>
				<NavbarItem href="/inbox" aria-label="Inbox">
					<InboxIcon data-slot="icon" />
				</NavbarItem>
				<UserDropdown avatarOnly />
			</NavbarSection>
		</Navbar>
	)
}

function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader class="max-lg:hidden">
				<UserDropdown />
				<SidebarSpacer />
				<SidebarSection>
					<SidebarItem href="/search">
						<SearchIcon data-slot="icon" />
						<SidebarLabel>Search</SidebarLabel>
					</SidebarItem>
					<SidebarItem href="/inbox">
						<InboxIcon data-slot="icon" />
						<SidebarLabel>Inbox</SidebarLabel>
					</SidebarItem>
				</SidebarSection>
			</SidebarHeader>
			<SidebarBody>
				<SidebarSection>
					<SidebarItem href="/">
						<HomeIcon data-slot="icon" />
						<SidebarLabel>Home</SidebarLabel>
					</SidebarItem>
					<SidebarItem href="/events">
						<UsersIcon data-slot="icon" />
						<SidebarLabel>Users</SidebarLabel>
					</SidebarItem>
					<SidebarItem href="/orders">
						<UserCogIcon data-slot="icon" />
						<SidebarLabel>Roles</SidebarLabel>
					</SidebarItem>
					<SidebarItem href="/settings">
						<KeyRoundIcon data-slot="icon" />
						<SidebarLabel>Permissions</SidebarLabel>
					</SidebarItem>
				</SidebarSection>
				<SidebarSpacer />
				<SidebarSection>
					<SidebarItem href="/support">
						<MessageCircleQuestionIcon data-slot="icon" />
						<SidebarLabel>Support</SidebarLabel>
					</SidebarItem>
					<SidebarItem href="/changelog">
						<SparklesIcon data-slot="icon" />
						<SidebarLabel>Changelog</SidebarLabel>
					</SidebarItem>
				</SidebarSection>
			</SidebarBody>
		</Sidebar>
	)
}
