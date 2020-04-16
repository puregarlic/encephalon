<script>
  import Loading from "./Loading.svelte";
  import Button from "./Button.svelte";
  import { magic } from "../stores/magic";

  let hideForm = false;

  async function handleLogin(e) {
    const formValues = new FormData(e.currentTarget);
    const email = formValues.get("email");

    if (process.browser) {
      hideForm = true;
      const token = await magic.auth.loginWithMagicLink({ email });
      console.log(token);
    }
  }
</script>

<style>
  form {
    display: block;
    max-width: 25ch;
  }

  input {
    text-align: center;
    box-sizing: border-box;
    appearance: none;
    font-size: 1rem;
    border: 0.25rem solid var(--theme-background);
    background: var(--theme-background);
    padding: 0.5rem 1rem;
    width: 100%;
    margin-bottom: 0.5rem;
  }
</style>

{#if hideForm === false}
  <form on:submit on:submit|preventDefault={handleLogin}>
    <input
      type="email"
      name="email"
      required
      placeholder="example@example.com" />
    <Button outline wide>Sign Up or Sign In</Button>
  </form>
{:else}
  <Loading />
{/if}
