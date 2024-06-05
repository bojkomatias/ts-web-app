import { ArrowUpIcon } from "lucide-solid";
import { createSignal } from "solid-js";
import { Button } from "~/ui/button";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "~/ui/dialog";

export default function Home() {
  const [open, setOpen] = createSignal<boolean>(false);

  return (
    <div class="p-20">
      <Button onClick={() => setOpen(true)}>
        Open <ArrowUpIcon data-slot="icon" />
      </Button>
      <Dialog open={open()} onOpenChange={() => setOpen(false)}>
        <DialogContent>
          <DialogTitle>Im a dialog</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut optio
            accusantium!
          </DialogDescription>
          <DialogBody></DialogBody>
        </DialogContent>
      </Dialog>
    </div>
  );
}
