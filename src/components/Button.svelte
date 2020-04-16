<script>
  import { blur } from "svelte/transition";

  export let invert = false;
  export let outline = false;
  export let wide = false;
</script>

<style>
  button {
    box-sizing: border-box;
    --text-color: var(--theme-background);
    --background-color: var(--theme-text);
    --border-color: var(--theme-text);
    appearance: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 900;
    color: var(--text-color);
    background: var(--background-color);
    border: 0.25rem solid var(--border-color);
    transition: 0.2s;
    backdrop-filter: hue-rotate(30deg);
  }

  button:hover {
    --text-color: var(--theme-accent-pink);
  }

  .invert {
    --text-color: var(--theme-text);
    --background-color: var(--theme-background);
    --border-color: var(--theme-text);
  }

  .invert:hover {
    --text-color: var(--theme-text);
    --background-color: var(--theme-accent-pink);
  }

  .outline {
    --border-color: var(--text-color);
  }

  .wide {
    width: 100%;
  }
</style>

<button class:invert class:outline class:wide on:click transition:blur>
  <slot />
</button>
