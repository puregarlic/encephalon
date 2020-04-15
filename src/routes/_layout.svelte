<script>
  import Nav from "../components/Nav.svelte";
</script>

<style>
  main {
    box-sizing: border-box;
  }
</style>

<Nav />

<main>
  <slot />
</main>
