import { Locales, TweetContentProps } from "@/infraestructure/interfaces";
import { contents } from "@/data/contents/content";
import { Form } from "@/presentation/components/ui/form";

function TweetDataFeed(locale: Locales) {
  const tweetData = contents[locale].pages.home.feed.tweets;

  const TWEETS: TweetContentProps[] = [
    {
      pinned: true,
      date: "20 feb 2023",
      content: <p>{tweetData[0]}</p>,
      likes: 20,
      comments: 10,
      reposts: 5,
      saves: 2,
    },
    {
      date: "20 feb 2023",
      content: <p>{tweetData[1]}</p>,
      likes: 15,
      comments: 5,
      reposts: 2,
      saves: 1,
    },
    {
      date: "13 feb 2023",
      content: (
        <>
          <p>{tweetData[2][0]}</p>
          <br />
          <div>
            {(tweetData[2] as string[]).slice(1).map((item, key) => {
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
          <p>{tweetData[3]}</p>
          <Form />
        </>
      ),
      likes: 5,
      comments: 2,
      reposts: 0,
      saves: 1,
    },
  ];
  return TWEETS;
}

export default TweetDataFeed;
