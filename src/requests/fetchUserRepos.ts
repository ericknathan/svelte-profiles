import type { IRepository } from "../interfaces";

export async function fetchUserRepos(githubUsername: string): Promise<IRepository[] | number> {
  const userReposResponse = await fetch(
    `https://api.github.com/users/${githubUsername}/repos?per_page=5&sort=created`
  );

  if(userReposResponse.ok) {
    const userRepos = await userReposResponse.json();
    return userRepos.map(({ name, html_url }: any) => ({
      name,
      repo_url: html_url,
    }));
  } else {
    return userReposResponse.status;
  }
}