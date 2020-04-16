<script>
  import { slide } from "svelte/transition";
  import Button from "../components/Button.svelte";
  import Nav from "../components/Nav.svelte";
</script>

<style>
  span {
    font-weight: bold;
    font-style: italic;
    font-size: 1.5rem;
  }

  div {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 3rem;
    width: 100%;
  }

  section,
  footer {
    padding: 4rem 2rem;
  }

  /* input {
    flex-grow: 1;
    max-width: 40ch;
    box-sizing: content-box;
    padding: 0.5rem 1rem;
    color: var(--theme-text);
    background-color: var(--theme-background);
    font-size: 1rem;
    outline: none;
    border: 0.25rem solid var(--theme-background);
  } */

  .inverted {
    background-color: var(--theme-text);
    color: var(--theme-background);
  }

  .features__item {
    padding: 0;
  }

  @media screen and (min-width: 600px) {
    section {
      padding: 3rem;
    }
  }

  @media screen and (min-width: 812px) {
    section,
    footer {
      padding: 4rem;
    }
  }

  @media screen and (min-width: 834px) {
    div {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>

<svelte:head>
  <title>Encephalon</title>
</svelte:head>

<Nav />

<main>

  <section>
    <h1>Encephalon</h1>
    <h3>A place for your thoughts.</h3>
  </section>

  <section class="inverted">
    <h2 style="margin-bottom: 3rem;">
      Hands juggle.
      <em style="text-decoration: underline;">Brains don't.</em>
    </h2>

    <p>
      The
      <b>greater</b>
      number of running tasks, projects, and responsibilities you have, the
      <b>harder</b>
      it is to focus on the task at hand.
    </p>
    <p>
      And when you can't focus on what's in front of you,
      <b>you don't finish it</b>
      .
    </p>
    <p style="margin-top: 3rem;">
      <span>Work just keeps piling up.</span>
    </p>
  </section>

  <section>
    <h2>Here's how Encephalon helps.</h2>

    <div>
      <section class="features__item">
        <h4>Empty your head</h4>
        <p>
          At any time,
          <b>quickly save a note</b>
          about anything that crosses your mind, and be confident that you can
          get back to it later.
        </p>
      </section>

      <section class="features__item">
        <h4>Identify next steps</h4>
        <p>
          At a scheduled time each day, go through your notes and
          <b>identify the next action step</b>
          required to complete your project.
        </p>
      </section>

      <section class="features__item">
        <h4>Dispatch with intention</h4>
        <p>
          Once you've identified your next action, choose whether to
          <b>do it, delegate it, or defer it.</b>
        </p>
      </section>
    </div>
  </section>

  <!-- <section class="inverted">
  <h2>Try it today.</h2>
  <form>
    <input type="email" required placeholder="your@brain.com" />
    <Button outline>Sign Up</Button>
  </form>
</section> -->

  <section class="inverted">
    <h1>Coming soon.</h1>
    <h3>Check back later for more details.</h3>
  </section>

</main>

<footer class="inverted">
  <p>
    Built by
    <a href="https://graham.now.sh" target="_blank" rel="noopener noreferrer">
      Graham Barber
    </a>
  </p>
</footer>
