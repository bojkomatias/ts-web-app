import type { HTMLArkProps } from "@ark-ui/solid"
import clsx from "clsx"

export function Divider({
	soft = false,
	...props
}: { soft?: boolean } & HTMLArkProps<"hr">) {
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
