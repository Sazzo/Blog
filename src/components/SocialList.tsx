import React from "react";
import Twitter from "../assets/twitter.svg";
import GitHub from "../assets/github.svg";
import Anilist from "../assets/anilist.svg";
import Telegram from "../assets/telegram.svg";
import Discord from "../assets/discord.svg";
import Email from "../assets/email.svg";
import config from "../lib/config";

export function SocialList({}) {
  return (
    <div>
      <a
        title="Twitter"
        href={`https://twitter.com/${config.twitter_account}`}
        target="_blank"
        rel="noopener"
      >
        <Twitter width={24} height={24} fill={"#ffffff"} />
      </a>
      <a
        title="GitHub"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
      >
        <GitHub width={24} height={24} fill={"#ffffff"} />
      </a>
      <a
        title="Email"
        href={`mailto:${config.email}`}
        target="_blank"
        rel="noopener"
      >
        <Email width={24} height={24} fill={"#ffffff"} />
      </a>
      <a
        title="Telegram"
        href={`https://t.me/${config.telegram_account}`}
        target="_blank"
        rel="noopener"
      >
        <Telegram width={24} height={24} fill={"#ffffff"} />
      </a>
      <a
        title="Discord"
        href={`https://dsc.bio/${config.discordbio_account}`}
        target="_blank"
        rel="noopener"
      >
        <Discord width={24} height={24} fill={"#ffffff"} />
      </a>
      <a
        title="Anilist"
        href={`https://anilist.co/user/${config.anilist_account}`}
        target="_blank"
        rel="noopener"
      >
        <Anilist width={24} height={24} fill={"#ffffff"} />
      </a>
      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
      `}</style>
    </div>
  );
}
