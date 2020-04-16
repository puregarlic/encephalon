<script>
  import Loading from "../components/Loading.svelte";
  import Login from "../components/Login.svelte";
  import { magic } from "../stores/magic";

  let checkAuthenticationStatus = magic && magic.user.isLoggedIn();
</script>

<section>
  {#await checkAuthenticationStatus}
    <Loading />
  {:then isAuthenticated}
    {#if isAuthenticated}
      <p>Hey, thanks for signing in. There will be something here soon!</p>
    {:else}
      <Login />
    {/if}
  {/await}
</section>
