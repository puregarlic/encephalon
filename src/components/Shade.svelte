<script>
  import { createEventDispatcher } from "svelte";
  import { slide, fade } from "svelte/transition";

  const dispatch = createEventDispatcher();

  export let visible = false;

  function hide() {
    dispatch("hide", false);
  }
</script>

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

  .backdrop {
    background: var(--theme-text);
  }

  .container {
    box-sizing: content-box;
    position: relative;
    display: block;
    width: fit-content;
    height: fit-content;
    z-index: 2;
  }
</style>

{#if visible}
  <div transition:slide>
    <div class="container">
      <slot />
    </div>
    <div transition:slide class="backdrop" on:click={hide} />
  </div>
{/if}
