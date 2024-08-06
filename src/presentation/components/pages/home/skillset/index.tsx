import {
  FaReact,
  FaCss3,
  FaHtml5,
  FaGithub,
  FaAlgolia,
  FaDocker,
} from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa6";
import {
  SiTypescript,
  SiRedux,
  SiPostman,
  SiStrapi,
  SiAirtable,
  SiSass,
  SiReacthookform,
  SiPrisma,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { DiPostgresql } from "react-icons/di";
import { GrHeroku } from "react-icons/gr";
import { BsBootstrapFill } from "react-icons/bs";
import { contents } from "@/data/contents/content";
import { Locales } from "@/infraestructure/interfaces";

const ICONS = [
  { icon: <FaReact />, key: "react" },
  { icon: <FaCss3 />, key: "css3" },
  { icon: <FaHtml5 />, key: "html5" },
  { icon: <SiTypescript />, key: "typescript" },
  { icon: <SiRedux />, key: "redux" },
  { icon: <RiNextjsFill />, key: "nextjs" },
  { icon: <IoLogoFirebase />, key: "firebase" },
  { icon: <DiPostgresql />, key: "postgresql" },
  { icon: <GrHeroku />, key: "heroku" },
  { icon: <IoLogoVercel />, key: "vercel" },
  { icon: <FaGithub />, key: "github" },
  { icon: <SiPostman />, key: "postman" },
  { icon: <SiStrapi />, key: "strapi" },
  { icon: <RiTailwindCssFill />, key: "tailwind" },
  { icon: <SiAirtable />, key: "airtable" },
  { icon: <FaAlgolia />, key: "algolia" },
  { icon: <SiSass />, key: "sass" },
  { icon: <FaCcPaypal />, key: "paypal" },
  { icon: <BsBootstrapFill />, key: "bootstrap" },
  { icon: <SiReacthookform />, key: "reacthookform" },
  { icon: <SiPrisma />, key: "prisma" },
  { icon: <FaDocker />, key: "docker" },
];

type Props = {
  locale: Locales;
  className: string;
};

export function Skillset({ locale, className }: Props) {
  const { skillset } = contents[locale].pages.home;
  return (
    <div className={className}>
      <h2 className="text-2xl font-bold mb-4">{skillset.title}</h2>
      {skillset.texts.map((text, key) => {
        return (
          <p className="text-base mb-4" key={key}>
            {text}
          </p>
        );
      })}
      <div className="flex flex-wrap justify-center w-full gap-8 pt-5">
        {ICONS.map(({ icon, key }) => (
          <div key={key} className="text-3xl">
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}
