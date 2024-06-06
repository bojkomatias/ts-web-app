import { clsx } from "clsx"
import { JSX } from "solid-js"

type AvatarProps = {
  src?: string | null
  square?: boolean
  initials?: string
  alt?: string
}

export function Avatar({
  src = null,
  square = false,
  initials,
  alt = '',
  ...props
}: AvatarProps & JSX.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="avatar"
      {...props}
      class={clsx(
        props.class,
        // Basic layout
        'inline-grid shrink-0 align-middle [--avatar-radius:20%] [--ring-opacity:20%] *:col-start-1 *:row-start-1',
        'outline outline-1 -outline-offset-1 outline-black/[--ring-opacity] dark:outline-white/[--ring-opacity]',
        // Add the correct border radius
        square ? 'rounded-[--avatar-radius] *:rounded-[--avatar-radius]' : 'rounded-full *:rounded-full'
      )}
    >
      {initials && (
        <svg
          class="size-full select-none fill-current p-[5%] text-[48px] font-medium uppercase"
          viewBox="0 0 100 100"
          aria-hidden={alt ? undefined : 'true'}
        >
          {alt && <title>{alt}</title>}
          <text x="50%" y="50%" alignment-baseline="middle" dominant-baseline="middle" text-anchor="middle" dy=".125em">
            {initials}
          </text>
        </svg>
      )}
      {src && <img class="size-full" src={src} alt={alt} />}
    </span>
  )
}
