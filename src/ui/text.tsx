import type { HTMLArkProps } from "@ark-ui/solid";
import { clsx } from "clsx";

export function Text(props: HTMLArkProps<"p">) {
  return (
    <p
      {...props}
      data-slot="text"
      class={clsx(
        props.class,
        "text-muted-foreground text-base/6 sm:text-sm/6",
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
        "text-foreground decoration-muted-foreground hover:decoration-foreground cursor-pointer underline",
      )}
    />
  );
}

export function Strong(props: HTMLArkProps<"strong">) {
  return (
    <strong {...props} class={clsx(props.class, "text-card font-medium")} />
  );
}

export function Code(props: HTMLArkProps<"code">) {
  return (
    <code
      {...props}
      class={clsx(
        props.class,
        "border-line bg-popover text-foreground rounded border py-0.5 px-1 text-sm font-medium sm:text-[0.8125rem]",
      )}
    />
  );
}
