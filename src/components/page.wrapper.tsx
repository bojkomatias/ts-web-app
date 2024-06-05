import type { JSX } from "solid-js"

type PageWrapperProps = {
	title: string
	actions: JSX.Element
	children: JSX.Element
}
export function PageWrapper(props: PageWrapperProps) {
	return (
		<div class="h-screen overflow-hidden rounded-lg bg-card ring-1 ring-line ring-inset sm:h-[calc(100vh-0.5rem)]">
			<div class="inline-flex w-full justify-between gap-3 border-line border-b p-3">
				<h1 class="pl-4 font-bold text-lg capitalize">{props.title}</h1>
				<div class="flex gap-2">{props.actions}</div>
			</div>
			{props.children}
		</div>
	)
}
