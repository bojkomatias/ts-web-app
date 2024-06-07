import type { RouteSectionProps } from "@solidjs/router"
import {
	ArrowRightIcon,
	ChevronDownIcon,
	ChevronUpIcon,
	CopyIcon,
	HomeIcon,
	InboxIcon,
	LightbulbIcon,
	MegaphoneIcon,
	MessageCircleQuestionIcon,
	PlusIcon,
	SearchIcon,
	SettingsIcon,
	ShieldCheckIcon,
	SparklesIcon,
	TicketIcon,
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
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from "~/ui/navbar"
import {
	Sidebar,
	SidebarBody,
	SidebarFooter,
	SidebarHeader,
	SidebarHeading,
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
						<NavbarItem href="/search" aria-label="Search">
							<SearchIcon data-slot="icon" />
						</NavbarItem>
						<NavbarItem href="/inbox" aria-label="Inbox">
							<InboxIcon data-slot="icon" />
						</NavbarItem>
						<Dropdown>
							<DropdownButton class="!p-1 w-full justify-normal" plain>
								<Avatar class="size-6" src="/matu.jpeg" square />
							</DropdownButton>
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
					</NavbarSection>
				</Navbar>
			}
			sidebar={
				<Sidebar>
					<SidebarHeader>
						<Dropdown>
							<DropdownButton class="w-full justify-normal" plain>
								<Avatar class="size-6" src="/favicon.ico" />
								<SidebarLabel>Tailwind Labs</SidebarLabel>
								<span class="flex-1" />
								<ChevronDownIcon data-slot="icon" />
							</DropdownButton>
							<DropdownMenu class="min-w-80 lg:min-w-64">
								<DropdownItem href="/teams/1/settings">
									<SettingsIcon data-slot="icon" />
									<DropdownLabel>Settings</DropdownLabel>
								</DropdownItem>
								<DropdownDivider />
								<DropdownItem href="/teams/1">
									<Avatar class="size-6" slot="icon" src="/favicon.ico" />
									<DropdownLabel>Tailwind Labs</DropdownLabel>
								</DropdownItem>
								<DropdownItem href="/teams/2">
									<Avatar
										slot="icon"
										initials="WC"
										class="size-6 bg-purple-500 text-white"
									/>
									<DropdownLabel>Workcation</DropdownLabel>
								</DropdownItem>
								<DropdownDivider />
								<DropdownItem href="/teams/create">
									<PlusIcon data-slot="icon" />
									<DropdownLabel>New team&hellip;</DropdownLabel>
								</DropdownItem>
							</DropdownMenu>
						</Dropdown>
						<SidebarSpacer />
						<SidebarSection class="max-lg:hidden">
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
								<CopyIcon data-slot="icon" />
								<SidebarLabel>Events</SidebarLabel>
							</SidebarItem>
							<SidebarItem href="/orders">
								<TicketIcon data-slot="icon" />
								<SidebarLabel>Orders</SidebarLabel>
							</SidebarItem>
							<SidebarItem href="/settings">
								<SettingsIcon data-slot="icon" />
								<SidebarLabel>Settings</SidebarLabel>
							</SidebarItem>
							<SidebarItem href="/broadcasts">
								<MegaphoneIcon data-slot="icon" />
								<SidebarLabel>Broadcasts</SidebarLabel>
							</SidebarItem>
						</SidebarSection>
						<SidebarSection class="max-lg:hidden">
							<SidebarHeading>Upcoming Events</SidebarHeading>
							<SidebarItem href="/events/1">
								Bear Hug: Live in Concert
							</SidebarItem>
							<SidebarItem href="/events/2">Viking People</SidebarItem>
							<SidebarItem href="/events/3">Six Fingers — DJ Set</SidebarItem>
							<SidebarItem href="/events/4">We All Look The Same</SidebarItem>
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
					<SidebarFooter class="max-lg:hidden">
						<Dropdown>
							<DropdownButton class="w-full justify-normal" plain>
								<span class="flex min-w-0 flex-grow items-center gap-3">
									<Avatar src="/matu.jpeg" class="size-8" square alt="" />
									<span class="min-w-0">
										<span class="block truncate font-medium text-default-950 text-sm/5 dark:text-white">
											Erica
										</span>
										<span class="block truncate font-normal text-default-500 text-xs/5 dark:text-default-400">
											erica@example.com
										</span>
									</span>
								</span>
								<ChevronUpIcon data-slot="icon" />
							</DropdownButton>
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
					</SidebarFooter>
				</Sidebar>
			}
		>
			{props.children}
		</SidebarLayout>
	)
}
