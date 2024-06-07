import { clsx } from "clsx";
import { JSX } from "solid-js";

export function Heading(props: JSX.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      {...props}
      class={clsx(
        props.class,
        "text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white",
      )}
    />
  );
}

export function SubHeading(props: JSX.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      {...props}
      class={clsx(
        props.class,
        "text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white",
      )}
    />
  );
}
