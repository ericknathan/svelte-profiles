<script lang="ts">
  import Header from "./components/Header.svelte";
  import UserCard from "./components/UserCard.svelte";
  import type { IUser } from "./interfaces";

  let userData: IUser | null = null;

  function setUserData(event: CustomEvent<IUser>) {
    userData = event.detail;
  }
</script>

<div class="app">
  <Header on:fetchUserData={setUserData} />

  <main>
    {#if userData}
      <UserCard {userData} />
    {/if}
  </main>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    max-height: 100vh;
    width: 92vw;
    max-width: 900px;

    margin: auto;
    padding: 4rem 0;
  }

  .app > * {
    width: 100%;
  }
</style>
