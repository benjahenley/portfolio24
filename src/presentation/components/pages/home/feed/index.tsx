import { Form } from "@/presentation/components/ui/form";
import Tweet from "../../../ui/tweet/page";
import { Locales } from "@/infraestructure/interfaces";
import { contents } from "@/data/contents/content";
import TweetDataFeed from "@/infraestructure/data/tweets/feed/page";

type Props = {
  locale: Locales;
  className?: string;
};

export function Feed({ locale, className }: Props) {
  const TWEETS = TweetDataFeed(locale);
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
