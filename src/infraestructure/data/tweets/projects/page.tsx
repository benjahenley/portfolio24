import { FaCcPaypal } from "react-icons/fa6";
import {
  FaReact,
  FaCss3,
  FaHtml5,
  FaGithub,
  FaAlgolia,
  FaDocker,
} from "react-icons/fa";
import { SiTypescript, SiPostman, SiStrapi, SiAirtable } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { BsBootstrapFill } from "react-icons/bs";
import { Locales, TweetContentProps } from "@/infraestructure/interfaces";
import { contents } from "@/data/contents/content";

function TweetData(locale: Locales) {
  const tweetData = contents[locale].pages.home.projects.tweets;

  const TWEETS: TweetContentProps[] = [
    {
      date: "8 jan 2023",
      content: (
        <>
          <p className="mb-5">{tweetData[0]}</p>
          <a
            href="https://github.com/benjini123/dwf-m9-desafio-final"
            target="_blank"
            className="block w-full transition-transform transform hover:scale-105">
            <img
              src="/photos/projects/POSTMAN.png"
              alt="E-COMMERCE: BACKEND"
              className="w-full"
            />
          </a>
          <div className="text-2xl flex justify-end gap-4 pt-5 flex-wrap">
            <FaReact />
            <SiTypescript />
            <RiNextjsFill />
            <SiPostman />
            <FaGithub />
            <IoLogoVercel />
            <FaAlgolia />
            <SiAirtable />
          </div>
        </>
      ),
      likes: 10,
      comments: 20,
      reposts: 3,
      saves: 2,
    },
    {
      date: "02 Jul 2024",
      content: (
        <>
          <p className="mb-5">{tweetData[1]}</p>
          <a
            href="https://ibijetrent.com/"
            target="_blank"
            className="block w-full transition-transform transform hover:scale-105">
            <img
              src="/photos/projects/IBIJET.png"
              alt="IBIJET"
              className="w-full"
            />
          </a>
          <div className="text-2xl flex justify-end gap-4 pt-5 flex-wrap">
            <FaReact />
            <SiTypescript />
            <RiNextjsFill />
            <SiPostman />
            <FaGithub />
            <IoLogoVercel />
            <IoLogoFirebase />
            <FaCss3 />
            <FaHtml5 />
            <RiTailwindCssFill />
            <FaCcPaypal />
          </div>
        </>
      ),
      likes: 15,
      comments: 25,
      reposts: 5,
      saves: 3,
    },
    {
      date: "01 Oct 2023",
      content: (
        <>
          <p className="mb-5">{tweetData[2]}</p>
          <a
            href="https://exposanjuan.com.ar/"
            target="_blank"
            className="block w-full transition-transform transform hover:scale-105">
            <img
              src="/photos/projects/SAN-JUAN.png"
              alt="SAN JUAN"
              className="w-full"
            />
          </a>
          <div className="text-2xl flex justify-end gap-4 pt-5 flex-wrap">
            <FaReact />
            <SiTypescript />
            <RiNextjsFill />
            <SiPostman />
            <FaGithub />
            <IoLogoVercel />
            <IoLogoFirebase />
            <RiTailwindCssFill />
            <FaCss3 />
            <FaHtml5 />
            <SiStrapi />
            <FaDocker />
          </div>
        </>
      ),
      likes: 20,
      comments: 30,
      reposts: 7,
      saves: 4,
    },
    {
      date: "03 Jun 2024",
      content: (
        <>
          <p className="mb-5">{tweetData[3]}</p>
          <a
            href="https://starfish-app-gx66l.ondigitalocean.app/es"
            target="_blank"
            className="block w-full transition-transform transform hover:scale-105">
            <img
              src="/photos/projects/WIM.png"
              alt="WOMEN IN MINING"
              className="w-full"
            />
            <img
              src="/photos/projects/WIM-3.png"
              alt="WOMEN IN MINING"
              className="w-full"
            />
          </a>
          <div className="text-2xl flex justify-end gap-4 pt-5 flex-wrap">
            <FaReact />
            <SiTypescript />
            <RiNextjsFill />
            <SiPostman />
            <FaGithub />
            <IoLogoVercel />
            <RiTailwindCssFill />
            <FaCss3 />
            <FaHtml5 />
            <SiStrapi />
            <FaDocker />
          </div>
        </>
      ),
      likes: 25,
      comments: 35,
      reposts: 10,
      saves: 5,
    },
    {
      date: "02 Jul 2024",
      content: (
        <>
          <p className="mb-5">{tweetData[4]}</p>
          <a
            href="https://oroplataycobre.com.ar/"
            target="_blank"
            className="block w-full transition-transform transform hover:scale-105">
            <img
              src="/photos/projects/COPPER.png"
              alt="GOLD, SILVER & COPPER"
              className="w-full"
            />
          </a>
          <div className="text-2xl flex justify-end gap-4 pt-5 flex-wrap">
            <FaReact />
            <SiTypescript />
            <RiNextjsFill />
            <FaGithub />
            <IoLogoVercel />
            <BsBootstrapFill />
            <FaCss3 />
            <FaHtml5 />
            <SiStrapi />
            <FaDocker />
          </div>
        </>
      ),
      likes: 30,
      comments: 40,
      reposts: 15,
      saves: 6,
    },
    {
      date: "02 Feb 2024",
      content: (
        <>
          <p className="mb-5">{tweetData[5]}</p>
          <a
            href="https://www.buenosairesvision.tur.ar"
            target="_blank"
            className="block w-full transition-transform transform hover:scale-105">
            <img
              src="/photos/projects/BAV-LIGHT.png"
              alt="BUENOS AIRES VISION"
              className="w-full"
            />
            <img
              src="/photos/projects/BAV-DARK.png"
              alt="BUENOS AIRES VISION"
              className="w-full"
            />
          </a>
          <div className="text-2xl flex justify-end gap-4 pt-5 flex-wrap">
            <FaReact />
            <SiTypescript />
            <RiNextjsFill />
            <FaGithub />
            <IoLogoVercel />
            <FaCss3 />
            <FaHtml5 />
            <BsBootstrapFill />
          </div>
        </>
      ),
      likes: 35,
      comments: 45,
      reposts: 20,
      saves: 8,
    },
    {
      date: "02 July 2024",
      content: (
        <>
          <p className="mb-5">{tweetData[6]}</p>
          <a
            href="https://www.figma.com/design/vDiWoD4HxfIm5LFCh3xtAD/Benja-Henley's-team-library?node-id=0-1&t=Nb821uveOsnAKKED-0"
            target="_blank"
            className="block w-full transition-transform transform hover:scale-105">
            <img
              src="/photos/projects/TUKI.png"
              alt="TUKI FOOD APP"
              className="w-full"
            />
          </a>
          <div className="text-2xl flex justify-end gap-4 pt-5 flex-wrap">
            <FaReact />
            <SiTypescript />
            <RiNextjsFill />
            <FaGithub />
            <IoLogoVercel />
            <BsBootstrapFill />
            <RiTailwindCssFill />
          </div>
        </>
      ),
      likes: 40,
      comments: 50,
      reposts: 25,
      saves: 10,
    },
  ];
  return TWEETS;
}

export default TweetData;
