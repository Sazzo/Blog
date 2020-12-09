import config from "../../config.json";

type Config = {
  readonly base_url: string;
  readonly site_title: string;
  readonly site_description: string;
  readonly site_keywords: { keyword: string }[];
  readonly posts_per_page: number;
  readonly twitter_account: string;
  readonly anilist_account: string;
  readonly telegram_account: string;
  readonly discordbio_account: string;
  readonly email: string;
  readonly github_account: string;
};

export default config as Config;
