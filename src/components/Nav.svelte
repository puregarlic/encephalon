<script>
  import Button from "./Button.svelte";
</script>

<style>
  nav {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding: calc(env(safe-area-inset-top, 2rem) + 2rem);
  }

  @media screen and (min-width: 834px) {
    nav {
      width: 100%;
      position: fixed;
      top: 0;
      justify-content: flex-end;
      padding: 2rem;
    }
  }

  .spacer {
    width: 1rem;
  }
</style>

<nav>
  <Button invert outline>Sign Up</Button>
  <div class="spacer" />
  <Button>Sign In</Button>
</nav>
