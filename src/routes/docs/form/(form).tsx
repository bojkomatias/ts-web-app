import { ArrowUpIcon } from "lucide-solid";
import { createSignal } from "solid-js";
import { Button } from "~/ui/button";
import { Checkbox } from "~/ui/checkbox";
import {
  Description,
  ErrorMesssage,
  Field,
  FieldGroup,
  Fieldset,
  Label,
  Legend,
} from "~/ui/fieldset";
import { Input } from "~/ui/input";
import { Text } from "~/ui/text";
import { Textarea } from "~/ui/textarea";

export default function Home() {
  const [checked, setChecked] = createSignal<boolean | "indeterminate">(true);

  return (
    <div class="p-20">
      <Button outline>
        Hola <ArrowUpIcon data-slot="icon" />
      </Button>
      <form action="/orders" method="post" class="p-20">
        {/* ... */}
        <Fieldset>
          <Legend>Shipping details</Legend>
          <Text>Without this your odds of getting your order are low.</Text>
          <FieldGroup>
            <Field>
              <Label for="sa">Street address</Label>
              <Input name="street_address" id="sa" />
            </Field>
            <Field>
              <Checkbox
                checked={checked()}
                onCheckedChange={(e) => setChecked(e.checked)}
              >
                This is garbaje
              </Checkbox>
              <Description>
                If you have a tiger, we'd like to know about it.
              </Description>
              <ErrorMesssage>This is wrong</ErrorMesssage>
            </Field>
          </FieldGroup>
        </Fieldset>
        {/* ... */}
      </form>
    </div>
  );
}
