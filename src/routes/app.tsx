import type { RouteSectionProps } from "@solidjs/router"
import {
	HomeIcon,
	InboxIcon,
	KeyRoundIcon,
	MessageCircleQuestionIcon,
	SearchIcon,
	ShieldCheckIcon,
	SparklesIcon,
	UsersIcon,
} from "lucide-solid"
import { UserDropdown } from "~/modules/profile/user-dropdown"
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
		<SidebarLayout
			navbar={
				<Navbar>
					<NavbarSpacer />
					<NavbarSection>
						<NavbarItem href="#" aria-label="Search">
							<SearchIcon data-slot="icon" />
						</NavbarItem>
						<NavbarItem href="#" aria-label="Inbox">
							<InboxIcon data-slot="icon" />
						</NavbarItem>
						<UserDropdown avatarOnly />
					</NavbarSection>
				</Navbar>
			}
			sidebar={
				<Sidebar>
					<SidebarHeader class="max-lg:hidden">
						<UserDropdown />
						<SidebarSpacer />
						<SidebarSection>
							<SidebarItem href="#">
								<SearchIcon data-slot="icon" />
								<SidebarLabel>Search</SidebarLabel>
							</SidebarItem>
							<SidebarItem href="#">
								<InboxIcon data-slot="icon" />
								<SidebarLabel>Inbox</SidebarLabel>
							</SidebarItem>
						</SidebarSection>
					</SidebarHeader>
					<SidebarBody>
						<SidebarSection>
							<SidebarItem href="/app">
								<HomeIcon data-slot="icon" />
								<SidebarLabel>Home</SidebarLabel>
							</SidebarItem>
							<SidebarItem href="/app/users">
								<UsersIcon data-slot="icon" />
								<SidebarLabel>Users</SidebarLabel>
							</SidebarItem>
							<SidebarItem href="/app/role-permissions">
								<ShieldCheckIcon data-slot="icon" />
								<SidebarLabel>Role Permissions</SidebarLabel>
							</SidebarItem>
							<SidebarItem href="/app/actions">
								<KeyRoundIcon data-slot="icon" />
								<SidebarLabel>Actions</SidebarLabel>
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
			}
		>
			{props.children}
		</SidebarLayout>
	)
}
