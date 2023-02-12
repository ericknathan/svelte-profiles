<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { IUser } from "../interfaces";
  import { fetchUserData, fetchUserRepos } from "../requests";
  import Button from "./Button.svelte";

  let githubUsername = "";
  let errorMessage: string | null = null;

  const dispatch = createEventDispatcher<{
    onFetchUserData: IUser | null;
  }>();

  async function fetchGithubUser() {
    const userData = await fetchUserData(githubUsername);
    const userRepos = await fetchUserRepos(githubUsername);

    if (typeof userData !== "number" && typeof userRepos !== "number") {
      dispatch("onFetchUserData", {
        ...userData,
        recent_repos: userRepos
      });
      errorMessage = null;
    } else {
      switch (userData) {
        case 404:
          errorMessage = "User not found!";
          break;
        default:
          errorMessage = "An error occurred while fetching information from the given user!";
          break;
      }

      dispatch("onFetchUserData", null);
    }
  }
</script>

<form
  on:submit|preventDefault={fetchGithubUser}
  class="search-user"
  class:fetch-error={!!errorMessage}
>
  <input
    type="text"
    placeholder="Insert Github username"
    bind:value={githubUsername}
  />
  {#if errorMessage}
    <span class="error">{errorMessage}</span>
  {/if}
  <Button>
    Search
    <img src="/assets/magnifying-glass.svg" alt="Magnifying glass icon">
  </Button>
</form>

<style>
  form.search-user {
    position: relative;
    display: flex;

    height: 3rem;
    border-radius: 8px;

    outline: 1px solid #fa8a2e;
  }

  form.search-user input {
    flex: 1;

    padding: 0 1rem;
    border-radius: 8px;

    border: none;
    outline: none;

    font-size: 1rem;
  }

  form.search-user.fetch-error {
    outline: 1px solid #ff003e;
  }
  
  form .error {
    position: absolute;
    left: 0;
    top: 3.5rem;

    color: #ff003e;
    font-style: italic;
  }
</style>
