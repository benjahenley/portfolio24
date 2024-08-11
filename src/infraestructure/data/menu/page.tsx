import {
  FaInstagram,
  FaLinkedin,
  FaSoundcloud,
  FaGithub,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Locales } from "@/infraestructure/interfaces";
import { contents } from "@/data/contents/content";

function getOptions(locale: Locales) {
  const { items } = contents[locale].ui.leftbar;
  const OPTIONS = [
    {
      logo: <CgProfile />,
      text: items[0],
      href: "/",
    },
    {
      logo: <FaLinkedin />,
      text: items[1],
      href: "https://www.linkedin.com/in/benjamin-h-579b88146/",
    },
    {
      logo: <FaGithub />,
      text: items[2],
      href: "https://github.com/benjahenley",
    },
    {
      logo: <FaInstagram />,
      text: items[3],
      href: "https://www.instagram.com/benjahenley/",
    },
    {
      logo: <FaSoundcloud />,
      text: items[4],
      href: "/soundcloud",
    },
  ];
  return OPTIONS;
}

export default getOptions;
