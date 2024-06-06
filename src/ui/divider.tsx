import clsx from "clsx"
import type { JSX } from "solid-js"

export function Divider({
	soft = false,
	...props
}: { soft?: boolean } & JSX.HTMLAttributes<HTMLHRElement>) {
	return (
		<hr
			{...props}
			class={clsx(
				props.class,
				"w-full border-t",
				soft && "border-zinc-950/5 dark:border-white/5",
				!soft && "border-zinc-950/10 dark:border-white/10",
			)}
		/>
	)
}
