"use client";

import { getTrends } from "@/presentation/helpers/getTrends";
import { useEffect, useState } from "react";

const TRENDS = [
  {
    title: "Apple's IOS 18.1",
    posts: "302k",
    url: "https://www.theverge.com/2024/7/29/24208732/apple-intelligence-ai-ios-18-1-developer-beta-launch-iphone",
    category: "Technology - Trending",
  },
  {
    title: "#OpenAI's new voice",
    posts: "453k",
    url: "https://techcrunch.com/2024/07/30/openai-releases-chatgpts-super-realistic-voice-feature/",
    category: "AI - Trending",
  },
  {
    title: "AWS's AI Strategy",
    posts: "216k",
    url: "https://www.cnbc.com/video/2024/07/01/aws-ceo-matt-garman-breaks-down-the-companys-ai-strategy.html?&qsearchterm=aws",
    category: "AI - Trending",
  },
  {
    title: "Razer Blackshark V2",
    posts: "339k",
    url: "https://www.zdnet.com/home-and-office/home-entertainment/razer-blackshark-v2-pro-review/",
    category: "Equipment in USA",
  },
  {
    title: "#React_19",
    posts: "127k",
    url: "https://react.dev/blog/2024/04/25/react-19-upgrade-guide",
    category: "Technology - Trending",
  },
  {
    title: "Meta's New AI Tools",
    posts: "400k",
    url: "https://www.engadget.com/metas-next-hardware-project-might-be-ai-infused-headphones-with-cameras-204741102.html",
    category: "AI - Trending",
  },
  // {
  //   title: "Docker Security Updates",
  //   posts: "90k",
  //   url: "https://www.zdnet.com/2023/07/19/docker-security-updates/",
  //   category: "DevOps - Trending",
  // },
  // {
  //   title: "#Blockchain Technology",
  //   posts: "600k",
  //   url: "https://www.coindesk.com/2023/07/16/blockchain-technology-news",
  //   category: "Cryptocurrency - Trending",
  // },
];

export function RightBar() {
  return (
    <div
      style={{ width: "inherit" }}
      className="lg:max-w-[280px] overflow-hidden xl:max-w-[230px] 2xl:max-w-[280px] fixed dark:text-white border border-gray-300 dark:border-slate-600 top-2 pt-4 rounded-xl">
      <div className="dark:text-white font-bold w-full text-xl px-4 border-b border-gray-300 dark:border-slate-600 pb-4">
        What's Happening
      </div>
      <ul className="flex flex-col w-full border-b border-gray-300 dark:border-slate-600">
        {TRENDS.map(({ title, posts, category, url }, index) => (
          <li
            key={index}
            className="px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-slate-700">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="m-0 p-0 flex flex-col">
              <span className="text-gray-500 m-0 p-0 text-sm ">{category}</span>
              <span
                className="text-md font-semibold"
                style={{ lineHeight: "0.9" }}>
                {title}
              </span>
              <span className="text-gray-500 m-0 p-0 text-sm">
                {posts} posts
              </span>
            </a>
          </li>
        ))}
      </ul>
      <div className="px-4 bottom-2 w-full py-2 text-blue-500 cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-600">
        <p>Show More</p>
      </div>
    </div>
  );
}
