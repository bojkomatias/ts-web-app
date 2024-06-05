import { ArrowUpIcon, ChevronDownIcon } from "lucide-solid";
import { createSignal } from "solid-js";
import { Button } from "~/ui/button";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "~/ui/dialog";
import { Index } from "solid-js";
import { Menu } from "@ark-ui/solid";
import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
} from "~/ui/dropdown";
import { Example } from "~/components/example";

export default function Home() {
  const [open, setOpen] = createSignal<boolean>(false);

  return (
    <div class="space-x-20 p-20 ">
      <Example />
    </div>
  );
}
