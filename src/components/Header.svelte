<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { IUser } from "../interfaces";
  import SearchForm from "./SearchForm.svelte";

  import Title from "./Title.svelte";

  const dispatch = createEventDispatcher();

  function forwardFetchUserDataEvent(event: CustomEvent<IUser | null>) {
    dispatch("fetchUserData", event.detail);
  }
</script>

<header>
  <Title />
  <SearchForm on:onFetchUserData={forwardFetchUserDataEvent} />
</header>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    width: 100%;
  }

  @media (max-width: 680px) {
    header {
      flex-direction: column;
    }
  }
</style>
