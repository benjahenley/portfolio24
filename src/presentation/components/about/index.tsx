type Props = {
  className?: string;
  style?: React.CSSProperties;
};

export function About(props: Props) {
  return (
    <div className={props.className} style={props.style}>
      <h2 className="text-2xl font-bold mb-4">Hello!</h2>
      <p className="text-base mb-4">
        I'm Benja, a programmer based in Buenos Aires, Argentina. My journey in
        programming began in May 2021 when I started a course at APX School, an
        interactive platform that allows students to progress at their own pace.
      </p>
      <p className="text-base mb-4">
        Before that, I was already interested in coding and learned Python
        through YouTube tutorials by Mosh Hamedi.
      </p>
      <p className="text-base mb-4">
        I'm a fast learner with a keen eye for detail. I'm always eager to make
        new connections, take on new challenges, and deliver my best work.
      </p>
      <p className="text-base mb-4">
        I love learning new stuff, i am currently on my way to develop my first
        native app. Which will be quite a challenge. I am studying at Udemy,
        completed a next 14 course as well as underway to complete my native
        course.
      </p>
      <p className="text-base mb-4">
        Aside from programming, I'm passionate about electronic music,
        especially techno. I've been a DJ and producer since high school. Check
        out my music on Spotify{" "}
        <a
          href="https://open.spotify.com/artist/6BzP9m9BqegCaCajUA4IEg"
          target="_blank"
          className="text-blue-500 underline">
          <strong>here</strong>
        </a>
        .
      </p>
    </div>
  );
}
