<script>
  export let invert = false;
  export let outline = false;
</script>

<style>
  button {
    --text-color: var(--theme-background);
    --background-color: var(--theme-text);
    --border-color: var(--theme-text);
    appearance: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    box-sizing: content-box;
    font-weight: bold;
    color: var(--text-color);
    background: var(--background-color);
    border: 0.25rem solid var(--border-color);
    transition: 0.2s;
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
</style>

<button class:invert class:outline>
  <slot />
</button>
