import { SidebarIcon } from "lucide-solid"
import { type JSX, createSignal } from "solid-js"
import { NavbarItem } from "./navbar"

// function MobileSidebar({
//   open,
//   close,
//   children,
// }: React.PropsWithChildren<{ open: boolean; close: () => void }>) {
//   return (
//     <Headless.Transition show={open}>
//       <Headless.Dialog onClose={close} class="lg:hidden">
//         <Headless.TransitionChild
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div class="fixed inset-0 bg-black/30" />
//         </Headless.TransitionChild>
//         <Headless.TransitionChild
//           enter="ease-in-out duration-300"
//           enterFrom="-translate-x-full"
//           enterTo="translate-x-0"
//           leave="ease-in-out duration-300"
//           leaveFrom="translate-x-0"
//           leaveTo="-translate-x-full"
//         >
//           <Headless.DialogPanel class="fixed inset-y-0 w-full max-w-80 p-2 transition">
//             <div class="flex h-full flex-col rounded-lg bg-white shadow-sm ring-1 ring-default-950/5 dark:bg-default-900 dark:ring-white/10">
//               <div class="-mb-3 px-4 pt-3">
//                 <Headless.CloseButton
//                   as={NavbarItem}
//                   aria-label="Close navigation"
//                 >
//                   <CloseMenuIcon />
//                 </Headless.CloseButton>
//               </div>
//               {children}
//             </div>
//           </Headless.DialogPanel>
//         </Headless.TransitionChild>
//       </Headless.Dialog>
//     </Headless.Transition>
//   );
// }

export function SidebarLayout({
	navbar,
	sidebar,
	children,
}: {
	children: JSX.Element
	navbar: JSX.Element
	sidebar: JSX.Element
}) {
	const [showSidebar, setShowSidebar] = createSignal(false)

	return (
		<div class="relative isolate flex min-h-svh w-full bg-white max-lg:flex-col dark:bg-default-900 dark:lg:bg-default-950 lg:bg-default-100">
			{/* Sidebar on desktop */}
			<div class="fixed inset-y-0 left-0 w-64 max-lg:hidden">{sidebar}</div>

			{/* Sidebar on mobile */}
			{/* <MobileSidebar open={showSidebar} close={() => setShowSidebar(false)}>
        {sidebar}
      </MobileSidebar> */}

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
				<div class="min-w-0 flex-1">{navbar}</div>
			</header>

			{/* Content */}
			<main class="flex flex-1 flex-col pb-2 lg:min-w-0 lg:pt-2 lg:pr-2 lg:pl-64">
				<div class="grow p-6 lg:rounded-lg dark:lg:bg-default-900 lg:bg-white lg:p-10 lg:shadow-sm dark:lg:ring-white/10 lg:ring-1 lg:ring-default-950/5">
					<div class="mx-auto max-w-6xl">{children}</div>
				</div>
			</main>
		</div>
	)
}
