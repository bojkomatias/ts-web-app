import {
  CheckboxControl,
  CheckboxHiddenInput,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxRoot,
  CheckboxRootProps,
} from "@ark-ui/solid";
import { clsx } from "clsx";
import { CheckIcon } from "lucide-solid";

const base = [
  // Basic layout
  "relative isolate flex size-4.5 items-center justify-center rounded-md sm:size-4",
  // Background color applied to control in dark mode
  "bg-popover group-data-[state='checked']:bg-foreground",
  // Border
  "border border-line group-data-[state='checked']:border-transparent group-data-[state='checked']:group-data-[hover]:border-transparent group-data-[hover]:border-line",
  // Focus ring
  "group-data-[focus]:outline group-data-[focus]:outline-0 group-data-[focus]:outline-offset-0 group-data-[focus]:outline-blue-500",
  // Disabled state
  "group-data-[disabled]:opacity-50",
  "group-data-[disabled]:border-line group-data-[disabled]:bg-muted group-data-[disabled]:group-data-[state='checked']:after:hidden",
];

export function Checkbox({
  labelClass,
  ...props
}: CheckboxRootProps & { labelClass?: string }) {
  return (
    <CheckboxRoot
      {...props}
      class={clsx(props.class, "group inline-flex gap-2.5 focus:outline-none")}
    >
      <CheckboxControl class={clsx([base])}>
        <CheckboxIndicator class="absolute">
          <CheckIcon class="stroke-card size-3 stroke-[4px]" />
        </CheckboxIndicator>
      </CheckboxControl>
      <CheckboxLabel
        id={props.id}
        data-slot="label"
        class={clsx(
          labelClass,
          "text-foreground -mt-[0.2rem] text-base/6 select-none data-[disabled]:opacity-50 sm:text-sm/6",
        )}
      >
        Sape
      </CheckboxLabel>
      <CheckboxHiddenInput />
    </CheckboxRoot>
  );
}
