export type TweetContentProps = {
  date: string;
  content: JSX.Element;
  likes: number;
  comments: number;
  reposts: number;
  saves: number;
  pinned?: boolean;
};

export type InteractionItemProps = {
  icon: React.ReactNode;
  clicked: React.ReactNode;
  text: string;
  key: string;
  color: string;
  colorText: string;
};

export type tweetProps = {
  className?: string;
  content: any;
  pinned?: boolean;
  date: string;
  children: any;
  likes: number;
  comments: number;
  reposts: number;
  saves: number;
};
