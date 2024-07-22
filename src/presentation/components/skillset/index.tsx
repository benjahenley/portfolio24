import { FaReact, FaCss3, FaHtml5, FaGithub } from "react-icons/fa";
import { SiTypescript, SiRedux, SiPostman } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { DiPostgresql } from "react-icons/di";
import { GrHeroku } from "react-icons/gr";

const ICONS = [
  <FaReact />,
  <FaCss3 />,
  <FaHtml5 />,
  <SiTypescript />,
  <SiRedux />,
  <RiNextjsFill />,
  <IoLogoFirebase />,
  <DiPostgresql />,
  <GrHeroku />,
  <IoLogoVercel />,
  <FaGithub />,
  <SiPostman />,
];

export function Skillset(props: any) {
  return (
    <div className={props.className}>
      <h2 className="text-2xl font-bold mb-4">My Skillset</h2>
      <p className="text-base mb-4">
        I am proficient in JavaScript and TypeScript, with a strong knowledge of
        both SQL and NoSQL databases including Firebase Cloud Firestore,
        Firebase Realtime Database, and PostgreSQL. I enjoy working on
        React-based projects with Next.js and have experience deploying
        applications on Heroku and Vercel. From initial layout and architecture
        to a fully functional web app, I can handle the entire development
        process. Additionally, I am bilingual, fluent in both English and
        Spanish.
      </p>
      <p className="text-base mb-4">
        I have extensive experience with Postman, which has equipped me with the
        skills to build robust backends with CRUD operations. Check out the
        Projects tab to see my apps along with their respective documentation.
      </p>
      <p className="text-base mb-4">
        Moreover, I am adept at using powerful tools like Airtable and Algolia.
        I am also familiar with deploying applications on GitHub Pages, Vercel,
        and Heroku. Unfortunately, Heroku's recent removal of free dynos has
        left many of my applications without a host.
      </p>
      <div className="flex flex-wrap justify-center w-full gap-4 text-4xl pt-5">
        {ICONS.map((icon) => {
          return icon;
        })}
      </div>
    </div>
  );
}
