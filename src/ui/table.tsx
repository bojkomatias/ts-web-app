import type { HTMLArkProps } from "@ark-ui/solid";
import { clsx } from "clsx";
import { Accessor, createSignal, useContext } from "solid-js";
import { createContext } from "solid-js";

const TableContext = createContext<{
  bleed: boolean;
  dense: boolean;
  grid: boolean;
  striped: boolean;
}>({
  bleed: false,
  dense: false,
  grid: false,
  striped: false,
});

export function Table(
  props: {
    bleed?: boolean;
    dense?: boolean;
    grid?: boolean;
    striped?: boolean;
  } & HTMLArkProps<"div">,
) {
  const value = {
    striped: props.striped || false,
    grid: props.grid || false,
    bleed: props.bleed || false,
    dense: props.dense || false,
  };
  return (
    <TableContext.Provider value={value}>
      <div class="flow-root">
        <div
          {...props}
          class={clsx(props.class, "-mx-4 whitespace-nowrap", "sm:px-4")}
        >
          <div
            class={clsx(
              "inline-block min-w-full align-middle",
              !props.bleed && "sm:px-4",
            )}
          >
            <table class="min-w-full table-auto text-left text-sm/6">
              {props.children}
            </table>
          </div>
        </div>
      </div>
    </TableContext.Provider>
  );
}

export function TableHead(props: HTMLArkProps<"thead">) {
  return (
    <thead class={clsx(props.class, "text-muted-foreground")} {...props} />
  );
}

export function TableBody(props: HTMLArkProps<"tbody">) {
  return <tbody {...props} />;
}

const TableRowContext = createContext<{
  href?: string;
  target?: string;
  title?: string;
}>({
  href: undefined,
  target: undefined,
  title: undefined,
});

export function TableRow(
  props: {
    href?: string;
    target?: string;
    title?: string;
  } & HTMLArkProps<"tr">,
) {
  const { striped } = useContext(TableContext);

  const value = {
    href: props.href,
    title: props.title,
    target: props.target,
  };

  return (
    <TableRowContext.Provider value={value}>
      <tr
        {...props}
        class={clsx(
          props.class,
          props.href &&
            "hover:bg-muted has-[[data-row-link][data-focus]]:outline has-[[data-row-link][data-focus]]:outline-2 has-[[data-row-link][data-focus]]:-outline-offset-2 has-[[data-row-link][data-focus]]:outline-blue-500",
          striped && "even:bg-popover/20 hover:bg-popover",
          !striped && "hover:bg-popover",
        )}
      >
        {props.children}
      </tr>
    </TableRowContext.Provider>
  );
}

export function TableHeader(props: HTMLArkProps<"th">) {
  const { bleed, grid } = useContext(TableContext);

  return (
    <th
      {...props}
      class={clsx(
        props.class,
        "border-b-line border-b py-2 px-4 font-medium first:pl-4 last:pr-4",
        grid && "border-l-line border-l first:border-l-0",
        !bleed && "sm:first:pl-2 sm:last:pr-2",
      )}
    />
  );
}

export function TableCell(props: HTMLArkProps<"td">) {
  const { bleed, dense, grid, striped } = useContext(TableContext);
  const { href, target, title } = useContext(TableRowContext);

  return (
    <td
      {...props}
      class={clsx(
        props.class,
        "relative px-2 first:pl-4 last:pr-4",
        !striped && "border-popover border-b",
        grid && "border-l-popover border-l first:border-l-0",
        dense ? "py-2.5" : "py-4",
        !bleed && "sm:first:pl-2 sm:last:pr-2",
      )}
    >
      {href && (
        <a
          data-row-link
          href={href}
          target={target}
          aria-label={title}
          class="absolute inset-1 focus:outline-none"
        >
          SaPE
        </a>
      )}
      {props.children}
    </td>
  );
}
