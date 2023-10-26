export interface Data {
  data: GithubRepository[];
}

export interface GithubRepository {
  name: string;
  description: string;
  image: string;
  link: string;
  Contributors: Contributor[];
}

export interface Contributor {
  name: string;
  avatar_url: string;
  github_url: string;
}
