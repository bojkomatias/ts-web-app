import type { BreadcrumbsSeparatorProps } from "@kobalte/core/breadcrumbs";
import { Breadcrumbs as KobalteBreadcrumbs } from "@kobalte/core/breadcrumbs";
import clsx from "clsx";
import { ChevronRightIcon } from "lucide-solid";
import type { JSX } from "solid-js";

export function Breadcrumbs(props: { children: JSX.Element }) {
  return (
    <KobalteBreadcrumbs
      separator={
        <ChevronRightIcon class="mt-0.5 size-3 dark:stroke-default-300" />
      }
      class="flex items-center gap-2 mx-6 mt-2"
    >
      {props.children}
    </KobalteBreadcrumbs>
  );
}

export function BreadcrumbsLink(props: {
  children: JSX.Element;
  href?: string;
}) {
  return (
    <KobalteBreadcrumbs.Link
      {...props}
      class={clsx(
        props.href
          ? "cursor-pointer dark:hover:text-default-100"
          : "cursor-default",
        "font-normal text-sm dark:text-default-300 capitalize",
      )}
    />
  );
}

export function BreadcrumbsSeparator(props: BreadcrumbsSeparatorProps) {
  return <KobalteBreadcrumbs.Separator {...props} />;
}
