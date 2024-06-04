import {
  Dialog as ArkDialog,
  type DialogContentProps,
  type DialogDescriptionProps,
  type DialogRootProps,
  type DialogTitleProps,
  type HTMLArkProps,
} from "@ark-ui/solid";
import { clsx } from "clsx";
import { Portal } from "solid-js/web";
import type { JSX } from "solid-js";
import { X } from "lucide-solid";
import { Button } from "./button";

const sizes = {
  xs: "sm:max-w-xs",
  sm: "sm:max-w-sm",
  md: "sm:max-w-md",
  lg: "sm:max-w-lg",
  xl: "sm:max-w-xl",
  "2xl": "sm:max-w-2xl",
  "3xl": "sm:max-w-3xl",
  "4xl": "sm:max-w-4xl",
  "5xl": "sm:max-w-5xl",
};

export function Drawer(
  props: {
    children: JSX.Element;
  } & DialogRootProps,
) {
  return (
    <ArkDialog.Root {...props}>
      <Portal>
        <ArkDialog.Backdrop
          class={clsx(
            "fixed inset-0 flex w-screen justify-center overflow-y-auto py-2 px-2 focus:outline-0 sm:py-8 sm:px-6 lg:py-16 lg:px-8",
            // animation
            "data-[state=closed]:animate-[fade-out_0.2s_ease-in-out] data-[state=open]:animate-[fade-in_0.3s_ease-in-out]",
          )}
        />
        <ArkDialog.Positioner
          class={clsx(
            "fixed inset-x-0 flex w-screen overflow-y-auto pt-6 sm:pt-0",
            "inset-y-0",
          )}
        >
          {props.children}
        </ArkDialog.Positioner>
      </Portal>
    </ArkDialog.Root>
  );
}

export const DrawerContent = ({
  size = "lg",
  ...props
}: {
  size?: keyof typeof sizes;
} & DialogContentProps) => {
  return (
    <ArkDialog.Content
      class={clsx(
        props.class,
        sizes[size],
        "border-popover bg-card w-full rounded-xl border p-8 shadow-lg sm:p-6",
        "rounded-l-none",
        // position
        "relative flex flex-col",

        // animation
        "data-[state=closed]:animate-[x-left-out_0.2s_ease-in-out] data-[state=open]:animate-[x-left-in_0.3s_ease-out]",
      )}
    >
      {props.children}
    </ArkDialog.Content>
  );
};

export function DrawerTitle(props: DialogTitleProps) {
  return (
    <ArkDialog.Title
      {...props}
      class={clsx(
        props.class,
        "text-foreground text-balance text-center text-base/6 font-semibold sm:text-wrap sm:text-left sm:text-sm/6",
      )}
    />
  );
}

export function DrawerDescription(props: DialogDescriptionProps) {
  return (
    <ArkDialog.Description
      {...props}
      class={clsx(props.class, "mt-2 text-pretty text-center sm:text-left")}
    />
  );
}

export function DrawerBody(props: HTMLArkProps<"div">) {
  return (
    <div
      {...props}
      class={clsx(props.class, "text-muted-foreground mt-4 flex-1")}
    />
  );
}

export function DrawerActions(props: HTMLArkProps<"div">) {
  return (
    <div
      {...props}
      class={clsx(
        props.class,
        "mt-6 flex flex-col-reverse items-center justify-end gap-3 *:w-full sm:mt-4 sm:flex-row sm:*:w-auto",
      )}
    />
  );
}

export function DrawerClose() {
  return (
    <ArkDialog.CloseTrigger class="absolute top-3 right-3 justify-end">
      <Button ghost class="rounded-lg bg-transparent">
        <X />
      </Button>
    </ArkDialog.CloseTrigger>
  );
}
