import {
  Dialog as ArkDialog,
  type DialogContentProps,
  type DialogDescriptionProps,
  type DialogRootProps,
  type DialogTitleProps,
  type HTMLArkProps,
} from "@ark-ui/solid";
import { clsx } from "clsx";
import { X } from "lucide-solid";
import type { JSX } from "solid-js";
import { Portal } from "solid-js/web";
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
const drawer = false;
export function Dialog(
  props: {
    children: JSX.Element;
  } & DialogRootProps,
) {
  return (
    <ArkDialog.Root {...props}>
      <Portal>
        <ArkDialog.Backdrop
          class={clsx(
            "fixed inset-0 z-20 flex w-screen justify-center overflow-y-auto px-2 py-2 focus:outline-0 sm:px-6 sm:py-8 lg:px-8 lg:py-16",
            // animation
            "data-[state=closed]:animate-[fade-out_0.2s_ease-in-out] data-[state=open]:animate-[fade-in_0.2s_ease-in-out]",
          )}
        />
        <ArkDialog.Positioner
          class={clsx(
            "fixed inset-x-0 flex w-screen overflow-y-auto pt-6 sm:pt-0",
            !drawer
              ? "bottom-0 justify-center sm:bottom-auto sm:top-24"
              : "inset-y-0",
          )}
        >
          {props.children}
        </ArkDialog.Positioner>
      </Portal>
    </ArkDialog.Root>
  );
}

export const DialogContent = ({
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
        "border-popover bg-card relative w-full rounded-xl rounded-b-none border p-8 shadow-lg sm:rounded-b-xl sm:p-6",
        !drawer ? "" : "rounded-l-none",

        // animation
        "data-[state=closed]:animate-[fade-out_0.2s_ease-in-out] data-[state=open]:animate-[fade-in_0.2s_ease-in-out]",
      )}
    >
      {props.children}
    </ArkDialog.Content>
  );
};

export function DialogTitle(props: DialogTitleProps) {
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

export function DialogDescription(props: DialogDescriptionProps) {
  return (
    <ArkDialog.Description
      {...props}
      class={clsx(props.class, "mt-2 text-pretty text-center sm:text-left")}
    />
  );
}

export function DialogBody(props: HTMLArkProps<"div">) {
  return <div {...props} class={clsx(props.class, "mt-4")} />;
}

export function DialogActions(props: HTMLArkProps<"div">) {
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

export function DialogClose() {
  return (
    <ArkDialog.CloseTrigger class="absolute right-3 top-3 justify-end">
      <Button class="rounded-lg bg-transparent">
        <X />
      </Button>
    </ArkDialog.CloseTrigger>
  );
}
