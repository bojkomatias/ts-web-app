import { ChevronsUpDownIcon, Info, Settings, UserIcon } from "lucide-solid";
import { Avatar } from "~/ui/avatar";

import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
  DropdownShortcut,
  DropdownDivider,
  DropdownHeading,
  DropdownSection,
  DropdownHeader,
  DropdownDescription,
  DropdownLabel,
} from "~/ui/dropdown";

export const Example = () => {
  return (
    <Dropdown>
      <DropdownButton asChild>
        <button
          class="flex w-48 items-center gap-3 rounded-xl border border-transparent p-1 data-[active]:border-zinc-200 data-[hover]:border-zinc-200 dark:data-[active]:border-zinc-700 dark:data-[hover]:border-zinc-700"
          aria-label="Account options"
        >
          <Avatar
            class="size-10"
            initials="MB"
            src={"https://avatars.githubusercontent.com/u/55543631?v=4"}
          />
          <span class="block text-left">
            <span class="block text-sm/5 font-medium">Matias Bojko</span>
            <span class="block text-xs/5 text-zinc-500">admin</span>
          </span>
          <ChevronsUpDownIcon class="ml-auto mr-1 size-4 shrink-0 stroke-zinc-400" />
        </button>
      </DropdownButton>
      <DropdownMenu>
        <DropdownHeader>
          <div class="pr-6">
            <div class="text-xs text-zinc-500 dark:text-zinc-400">
              Signed in as Tom Cook
            </div>
            <div class="text-sm/7 font-semibold text-zinc-800 dark:text-white">
              tom@example.com
            </div>
          </div>
        </DropdownHeader>
        <DropdownDivider />
        <DropdownSection aria-label="Account">
          <DropdownItem href="#">
            <UserIcon data-slot="icon" />
            <DropdownLabel>Account</DropdownLabel>
          </DropdownItem>
          <DropdownItem href="#">
            <Settings data-slot="icon" />
            <DropdownLabel>Settings</DropdownLabel>
          </DropdownItem>
          <DropdownItem href="#">
            <Info data-slot="icon" />
            <DropdownLabel>Help center</DropdownLabel>
          </DropdownItem>
        </DropdownSection>
        <DropdownDivider />
        <DropdownSection>
          <DropdownHeading>My events</DropdownHeading>
          <DropdownItem href={"/"} target="_blank">
            <DropdownLabel>Open</DropdownLabel>
            <DropdownDescription>
              Open the file in a new tab.
            </DropdownDescription>
          </DropdownItem>
          <DropdownItem href="/past-events">
            <DropdownLabel>Delete</DropdownLabel>
            <DropdownShortcut keys="⇧⌘⌫" />
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
