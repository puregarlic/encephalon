<script>
  import { onMount } from "svelte";
  import { readable } from "svelte/store";
  import { slide, blur } from "svelte/transition";

  function* nextLetter(message) {
    let index = 0;
    while (true) {
      yield {
        letter: message[index].toUpperCase(),
        index
      };
      if (index < message.length - 1) {
        index++;
      } else {
        index = 0;
      }
    }
  }

  const state = readable({ index: 1, letter: "" }, function start(set) {
    const generator = nextLetter("loading!");
    const interval = setInterval(() => {
      set(generator.next().value);
    }, 600);

    return function stop() {
      clearInterval(interval);
    };
  });
</script>

<style>
  div {
    display: flex;
  }

  p {
    position: absolute;
    text-align: center;
    margin: 0;
    font-weight: 900;
    font-size: 2rem;
    color: inherit;
  }
</style>

<div transition:blur={{ duration: 200 }}>
  {#if $state.index % 2 === 0}
    <p transition:slide>{$state.letter}</p>
  {:else}
    <p transition:slide>{$state.letter}</p>
  {/if}
</div>
