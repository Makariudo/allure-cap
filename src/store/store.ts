import { writable } from "svelte/store";
import type { DisplayMode } from "../models/distance_models";

export const vma = writable<number>(15.1);
export const displayMode = writable<DisplayMode>("Officielles");
const intermediaireMode = vma.subscribe((value) => {
  console.log(value);
}); // logs '0'

/* vma.set(16.5); // logs '1'

vma.update((n: number) => n + 1); // logs '2' */
