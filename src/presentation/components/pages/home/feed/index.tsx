import { Form } from "@/presentation/components/ui/form";
import Tweet from "../../../ui/tweet";
import { Locales } from "@/infraestructure/interfaces";
import { contents } from "@/data/contents/content";

type Props = {
  locale: Locales;
  className?: string;
};

export function Feed({ locale, className }: Props) {
  const TWEETS = [
    {
      pinned: true,
      date: "20 feb 2023",
      content: <p>{contents[locale].pages.home.feed.tweets[0]}</p>,
      likes: 20,
      comments: 10,
      reposts: 5,
      saves: 2,
    },
    {
      date: "20 feb 2023",
      content: <p>{contents[locale].pages.home.feed.tweets[1]}</p>,
      likes: 15,
      comments: 5,
      reposts: 2,
      saves: 1,
    },
    {
      date: "13 feb 2023",
      content: (
        <>
          <p>{contents[locale].pages.home.feed.tweets[2][0]}</p>
          <br />
          <div>
            {(contents[locale].pages.home.feed.tweets[2] as string[])
              .slice(1)
              .map((item, key) => {
                return (
                  <div key={key}>
                    <p>{item}</p>
                  </div>
                );
              })}
          </div>
        </>
      ),
      likes: 10,
      comments: 3,
      reposts: 1,
      saves: 0,
    },
    {
      date: "26 jan 2023",
      content: (
        <>
          <p>{contents[locale].pages.home.feed.tweets[3]}</p>
          <Form />
        </>
      ),
      likes: 5,
      comments: 2,
      reposts: 0,
      saves: 1,
    },
  ];
  return (
    <div>
      <div className={className}>
        {TWEETS.map((tweet, index) => (
          <Tweet
            key={index}
            pinned={tweet.pinned}
            date={tweet.date}
            likes={tweet.likes}
            comments={tweet.comments}
            reposts={tweet.reposts}
            saves={tweet.saves}>
            {tweet.content}
          </Tweet>
        ))}
      </div>
    </div>
  );
}
