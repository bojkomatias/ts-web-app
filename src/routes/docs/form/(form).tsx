import {
  Fieldset,
  Legend,
  FieldGroup,
  Field,
  Label,
  Description,
} from "~/ui/fieldset";
import { Input } from "~/ui/input";
import { Textarea } from "~/ui/textarea";
import { Text } from "~/ui/text";

import { Checkbox } from "~/ui/checkbox";

import { createSignal } from "solid-js";

export default function Home() {
  const [checked, setChecked] = createSignal<boolean | "indeterminate">(true);
  return (
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
              id="check"
              checked={checked()}
              onCheckedChange={(e) => setChecked(e.checked)}
            />

            <Description>We currently only ship to North America.</Description>
          </Field>
          <Field>
            <Label for="notes">Delivery notes</Label>
            <Textarea name="notes" id="notes" />
            <Description>
              If you have a tiger, we'd like to know about it.
            </Description>
          </Field>
        </FieldGroup>
      </Fieldset>
      {/* ... */}
    </form>
  );
}
