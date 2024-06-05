import type { HTMLArkProps } from "@ark-ui/solid";
import { clsx } from "clsx";

export function Fieldset(
  props: {
    disabled?: boolean;
  } & HTMLArkProps<"fieldset">,
) {
  return (
    <fieldset
      {...props}
      class={clsx(
        props.class,
        "[&>*+[data-slot=control]]:mt-6 [&>[data-slot=text]]:mt-1",
      )}
    />
  );
}

export function Legend(props: HTMLArkProps<"legend">) {
  return (
    <legend
      {...props}
      data-slot="legend"
      class={clsx(
        props.class,
        "text-base/6 font-semibold text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white",
      )}
    />
  );
}
export function FieldGroup(props: HTMLArkProps<"div">) {
  return (
    <div
      {...props}
      data-slot="control"
      class={clsx(props.class, "space-y-8")}
    />
  );
}

export function Field(props: HTMLArkProps<"div">) {
  return (
    <div
      class={clsx(
        props.class,
        "[&>[data-slot=label]+[data-slot=control]]:mt-3",
        "[&>[data-slot=label]+[data-slot=description]]:mt-1",
        "[&>[data-slot=description]+[data-slot=control]]:mt-3",
        "[&>[data-slot=control]+[data-slot=description]]:mt-3",
        "[&>[data-slot=control]+[data-slot=error]]:mt-3",
        "[&>[data-slot=label]]:font-medium",
      )}
      {...props}
    />
  );
}

export function Label({
  ...props
}: {
  className?: string;
} & HTMLArkProps<"label">) {
  return (
    <label
      {...props}
      data-slot="label"
      class={clsx(
        props.class,
        "select-none text-base/6 text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white",
      )}
    />
  );
}

export function Description({
  disabled,
  ...props
}: {
  className?: string;
  disabled?: boolean;
} & HTMLArkProps<"div">) {
  return (
    <div
      {...props}
      data-slot="description"
      class={clsx(
        props.class,
        "text-base/6 text-zinc-500 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-zinc-400",
      )}
    />
  );
}

export function ErrorMesssage(
  props: {
    className?: string;
  } & HTMLArkProps<"div">,
) {
  return (
    <div
      data-slot="error"
      {...props}
      class={clsx(
        props.class,
        "text-base/6 text-red-600 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-red-500",
      )}
    />
  );
}
