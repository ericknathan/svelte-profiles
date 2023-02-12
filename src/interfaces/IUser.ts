import type { IRepository } from "./IRepository";

export interface IUser {
  login: string;
  name: string;
  avatar_url: string;
  profile_url: string;
  public_repos: number;
  followers: number;
  recent_repos?: IRepository[];
}