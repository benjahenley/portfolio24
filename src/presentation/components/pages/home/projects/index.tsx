import TweetData from "@/infraestructure/data/tweets/projects/page";
import Tweet from "../../../ui/tweet/page";
import { Locales, TweetContentProps } from "@/infraestructure/interfaces/index";

type Props = {
  locale: Locales;
  className: string;
};

export function Projects({ locale, className }: Props) {
  const TWEETS: TweetContentProps[] = TweetData(locale);
  return (
    <div>
      <div className={className}>
        {TWEETS.map(
          ({ date, content, likes, comments, reposts, saves }, key) => (
            <Tweet
              locale={locale}
              date={date}
              key={key}
              likes={likes}
              comments={comments}
              reposts={reposts}
              saves={saves}>
              {content}
            </Tweet>
          )
        )}
      </div>
    </div>
  );
}
