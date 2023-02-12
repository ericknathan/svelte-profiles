import type { IUser } from "../interfaces";

export async function fetchUserData(githubUsername: string): Promise<IUser | number> {
  const userDataResponse = await fetch(
    `https://api.github.com/users/${githubUsername}`
  );

  if(userDataResponse.ok) {
    const userData = await userDataResponse.json();
    const { login, name, avatar_url, html_url, followers, public_repos } = userData;

    return {
      login,
      name,
      avatar_url,
      profile_url: html_url,
      followers,
      public_repos,
    }
  } else {
    return userDataResponse.status;
  }
}