<script lang="ts">
  import type { IUser } from "../interfaces";
  import ActionsBar from "./ActionsBar.svelte";

  export let userData: IUser;
  $: userHasRepositories = Boolean(userData.recent_repos.length);
</script>

<div class="user-card">
  <ActionsBar />
  <div class="user-data">
    <a href={userData.profile_url} target="_blank" rel="noreferrer">
      <img
        src={userData.avatar_url}
        alt="{userData.name}'s profile picture"
        class="user-image"
      />
    </a>
    <div class="user-data-content">
      <div class="user-info">
        {#if userData.name}
          <p>
            <span>Name:</span>
            {userData.name}
          </p>
        {/if}
        <p>
          <span>Username:</span>
          {userData.login}
        </p>
        <p>
          <span>Followers:</span>
          {userData.followers}
        </p>
        <p>
          <span>Repositories:</span>
          {userData.public_repos}
        </p>
      </div>
      {#if userHasRepositories}
        <div class="user-repos">
          <span>Recent repositories:</span>
          <ul>
            {#each userData.recent_repos as repoData}
              <li>
                <a href={repoData.repo_url} target="_blank" rel="noreferrer">
                  {repoData.name}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .user-card {
    border-radius: 12px;
    box-shadow: -12.1766px 36.6898px 44.9014px rgba(133, 127, 201, 0.18);
  }

  .user-card .user-data {
    padding: 1rem 4rem 2rem 4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #6781a8;
  }

  .user-card .user-data .user-data-content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 60%;
  }

  .user-card .user-data .user-image {
    height: 10rem;
    width: 10rem;

    border-radius: 9999px;
    border: 4.56px solid #fa8a2e;
  }

  .user-card .user-data span {
    font-weight: bold;
    color: #395278;
  }

  .user-card .user-data .user-repos a {
    color: #6781a8;
  }

  @media (max-width: 730px) {
    .user-card .user-data {
      flex-direction: column;
    }

    .user-card .user-data .user-data-content {
      align-items: flex-start;
      width: 100%;
      margin-top: 1rem;
    }
  }

  @media (max-width: 500px) {
    .user-card .user-data .user-data-content {
      align-items: center;
      flex-direction: column;
      gap: 1rem;

      text-align: center;
    }
  }

</style>
