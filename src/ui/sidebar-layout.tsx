import { SidebarIcon } from "lucide-solid"
import { type Accessor, type JSX, createSignal } from "solid-js"
import type { Setter } from "solid-js"
import { Drawer, DrawerCloseButton, DrawerContent } from "./drawer"
import { NavbarItem } from "./navbar"

function MobileSidebar(props: {
	children: JSX.Element
	open: Accessor<boolean>
	setOpen: Setter<boolean>
}) {
	return (
		<Drawer open={props.open()} onOpenChange={props.setOpen}>
			<DrawerContent fromLeft size="xs">
				<DrawerCloseButton />
				{props.children}
			</DrawerContent>
		</Drawer>
	)
}

export function SidebarLayout(props: {
	children: JSX.Element
	navbar: JSX.Element
	sidebar: JSX.Element
}) {
	const [showSidebar, setShowSidebar] = createSignal(false)

	return (
		<div class="relative isolate flex min-h-svh w-full bg-white max-lg:flex-col dark:bg-default-900 dark:lg:bg-default-950 lg:bg-default-100">
			{/* Sidebar on desktop */}
			<div class="fixed inset-y-0 left-0 w-64 max-lg:hidden">
				{props.sidebar}
			</div>

			{/* Sidebar on mobile */}
			<MobileSidebar open={showSidebar} setOpen={setShowSidebar}>
				{props.sidebar}
			</MobileSidebar>

			{/* Navbar on mobile */}
			<header class="flex items-center px-4 lg:hidden">
				<div class="py-2.5">
					<NavbarItem
						onClick={() => setShowSidebar(true)}
						aria-label="Open navigation"
					>
						<SidebarIcon data-slot="icon" />
					</NavbarItem>
				</div>
				<div class="min-w-0 flex-1">{props.navbar}</div>
			</header>

			{/* Content */}
			<main class="flex flex-1 flex-col pb-2 lg:min-w-0 lg:pt-2 lg:pr-2 lg:pl-64">
				<div class="grow space-y-2 lg:rounded-lg dark:lg:bg-default-900 lg:bg-white lg:shadow-sm dark:lg:ring-white/10 lg:ring-1 lg:ring-default-950/5">
					{props.children}
				</div>
			</main>
		</div>
	)
}
