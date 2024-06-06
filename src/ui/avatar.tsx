import {
	AvatarFallback,
	AvatarImage,
	AvatarRoot,
	type AvatarRootProps,
	type HTMLArkProps,
} from "@ark-ui/solid"
import clsx from "clsx"
import { TouchTarget } from "./button"

type AvatarProps = {
	src?: string
	square?: boolean
	initials?: string
	alt?: string
	class?: string
}

export function Avatar({
	src,
	square = false,
	initials,
	alt = "",
	...props
}: AvatarProps & AvatarRootProps) {
	return (
		<AvatarRoot
			data-slot="avatar"
			{...props}
			class={clsx(
				props.class,
				// Basic layout
				"inline-grid shrink-0 align-middle [--avatar-radius:20%] [--ring-opacity:20%] *:col-start-1 *:row-start-1",
				"-outline-offset-1 outline outline-1 outline-black/[--ring-opacity] dark:outline-white/[--ring-opacity]",
				// Add the correct border radius
				square
					? "rounded-[--avatar-radius] *:rounded-[--avatar-radius]"
					: "rounded-full *:rounded-full",
			)}
		>
			<AvatarFallback>
				<svg
					class="size-full select-none fill-current p-[5%] font-medium text-[48px] uppercase"
					viewBox="0 0 100 100"
					aria-hidden={alt ? undefined : "true"}
				>
					{alt && <title>{alt}</title>}
					<text x="50%" y="50%" dy=".125em">
						{initials}
					</text>
				</svg>
			</AvatarFallback>
			<AvatarImage class="size-full" src={src} alt={alt} />
		</AvatarRoot>
	)
}

export const AvatarButton = ({
	src,
	square = false,
	initials,
	alt,
	...props
}: AvatarProps &
	(
		| Omit<HTMLArkProps<"button">, "class">
		| Omit<HTMLArkProps<"a">, "class">
	)) => {
	const classes = clsx(
		props.class,
		square ? "rounded-[20%]" : "rounded-full",
		"relative inline-grid focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500",
	)

	return "href" in props ? (
		<a {...props} class={classes}>
			<TouchTarget>
				<Avatar src={src} square={square} initials={initials} alt={alt} />
			</TouchTarget>
		</a>
	) : (
		// @ts-ignore
		<button {...props} class={classes}>
			<TouchTarget>
				<Avatar src={src} square={square} initials={initials} alt={alt} />
			</TouchTarget>
		</button>
	)
}
