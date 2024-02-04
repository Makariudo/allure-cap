<script lang="ts">
  import {
    NumberInput,
    Label,
    ButtonGroup,
    InputAddon,
    Input,
  } from "flowbite-svelte";
  import { vma } from "../store/store";
  let count: number = 0;
  const increment = () => {
    count += 1;
  };
</script>

<section class="container mx-auto">
  <div>
    <Label for="VMA" class="mb-2">Votre VMA</Label>
    <ButtonGroup class="w-full" size="md">
      <NumberInput id="VMA" placeholder="" required value={$vma} step="0.5" />
      <InputAddon>Km/h</InputAddon>
    </ButtonGroup>
  </div>
  <div>
    <Label class="mb-2" for="input-addon-md">Default additional text</Label>
    <ButtonGroup class="w-full" size="md">
      <Input id="input-addon-md" type="email" placeholder="elonmusk" />
      <InputAddon>.com</InputAddon>
    </ButtonGroup>
  </div>
</section>
