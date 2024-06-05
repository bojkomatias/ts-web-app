import type { HTMLArkProps } from "@ark-ui/solid";
import { clsx } from "clsx";

export function Text(props: HTMLArkProps<"p">) {
  return (
    <p
      {...props}
      data-slot="text"
      class={clsx(
        props.class,
        "text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400",
      )}
    />
  );
}

export function TextLink(props: HTMLArkProps<"a">) {
  return (
    <a
      {...props}
      class={clsx(
        props.class,
        "text-zinc-950 underline decoration-zinc-950/50 data-[hover]:decoration-zinc-950 dark:text-white dark:decoration-white/50 dark:data-[hover]:decoration-white",
      )}
    />
  );
}

export function Strong(props: HTMLArkProps<"strong">) {
  return (
    <strong
      {...props}
      class={clsx(props.class, "font-medium text-zinc-950 dark:text-white")}
    />
  );
}

export function Code(props: HTMLArkProps<"code">) {
  return (
    <code
      {...props}
      class={clsx(
        props.class,
        "rounded border border-zinc-950/10 bg-zinc-950/[2.5%] px-0.5 text-sm font-medium text-zinc-950 sm:text-[0.8125rem] dark:border-white/20 dark:bg-white/5 dark:text-white",
      )}
    />
  );
}
