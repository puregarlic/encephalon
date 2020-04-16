<script>
  import Loading from "./Loading.svelte";
  import Button from "./Button.svelte";
  import Login from "./Login.svelte";
  import Shade from "./Shade.svelte";
  import { slide } from "svelte/transition";
  import { magic } from "../stores/magic";

  let showLogin = false;

  let checkAuthenticationStatus;
  if (process.browser) {
    checkAuthenticationStatus = magic.user.isLoggedIn();
  }

  function toggleLogin() {
    showLogin = !showLogin;
  }
</script>

<style>
  nav {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding: calc(env(safe-area-inset-top, 2rem) + 2rem);
  }

  a {
    background: none;
  }

  a:hover {
    color: var(--theme-accent-pink);
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
</style>

<nav>
  {#await checkAuthenticationStatus then isLoggedIn}
    {#if isLoggedIn}
      <a href="/app">
        <Button outline>Open App</Button>
      </a>
    {:else}
      <Button outline on:click={toggleLogin}>Sign In</Button>
    {/if}
  {/await}
</nav>

{#if showLogin === true}
  <Shade
    visible={showLogin}
    on:hide={e => {
      showLogin = e.detail;
    }}>
    <Login />
  </Shade>
{/if}
