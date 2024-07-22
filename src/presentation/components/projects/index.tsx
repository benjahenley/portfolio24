import {
  PrimaryButton,
  SecondaryButton,
} from "@/presentation/components/ui/button";
import Tweet from "../tweet";
import IBIJET from "@/media/programming-projects/IBIJET-1.png";
import WIM1 from "@/media/programming-projects/WIM.png";
import BAV from "@/media/programming-projects/BAV-DARK.png";
import BAV2 from "@/media/programming-projects/BAV-LIGHT.png";
import WIM3 from "@/media/programming-projects/WIM-3.png";
import COPPER from "@/media/programming-projects/COPPER.png";
import SANJUAN from "@/media/programming-projects/SAN-JUAN.png";
import POSTMAN from "@/media/programming-projects/POSTMAN.png";
import TUKI from "@/media/programming-projects/TUKI.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  date: string;
  content: string;
  link: string;
  button: string;
  image?: Array<StaticImageData>;
};

const TWEETS: Props[] = [
  {
    date: "8 jan 2023",
    content: "Check out my E-commerce backend complete with postman docs",
    link: "https://github.com/benjini123/dwf-m9-desafio-final",
    image: [POSTMAN],
    button: "E-COMMERCE: BACKEND",
  },
  {
    date: "02 Jul 2024",
    content:
      "Want to have fun in ibiza? I recommend renting a jetski to get to know the beauties this island has to offer. Thanks to a powerfull algorithm i designed that both checks the availability of guides and jetskis, together with a robust backend designed using firebase, you can easily rent out your own!",
    link: "https://ibijetrent.com/",
    image: [IBIJET],
    button: "IBIJET",
  },
  {
    date: "01 Oct 2023",
    content:
      "I've had a great experience working with Panorama Minero, a company at the forefront of the mining industry. They have been pleased to work with me on multiple occasions. This time, I improved the UI by internationalizing the page, making it accessible in both English and Spanish. Additionally, I collaborated with a design team to add new sections to the page.",
    link: "https://exposanjuan.com.ar/",
    image: [SANJUAN],
    button: "SAN JUAN",
  },
  {
    date: "03 Jun 2024",
    content:
      "International Women in Mining (IWiM) is an international organization run by volunteers committed to the advancement of women in the mining sector. I was happy to develop this page dedicated to the inclusion and visibility of the female workforce.",
    image: [WIM1, WIM3],
    link: "https://starfish-app-gx66l.ondigitalocean.app/es",
    button: "WOMEN IN MINING",
  },
  {
    date: "02 Jul 2024",
    content:
      "i contributed to the creation of PM's Gold, Silver and Copper page. Check it out!",
    link: "https://oroplataycobre.com.ar/",
    image: [COPPER],
    button: "GOLD, SILVER & COPPER",
  },

  {
    date: "02 Feb 2024",
    content:
      "My first solo project went pretty well! I designed this page for a tourism company called Buenos Aires Vision. They provide the best selection of tours if you're ever visiting Buenos Aires. The array of choices is outstanding, ranging from excellent meals to river explorations. You're bound to have a memorable time during your stay.",
    link: "https://www.buenosairesvision.tur.ar",
    image: [BAV, BAV2],
    button: "GOLD, SILVER & COPPER",
  },
  {
    date: "02 July 2024",
    content:
      "My most ambitious project yet is designing a web app with React Native. Tuki will be used to get food from different places. These places offer special boxes with random items chosen by the store.",
    link: "",
    image: [TUKI],
    button: "GOLD, SILVER & COPPER",
  },
];

export function Projects(props: any) {
  return (
    <div>
      <div className={props.className} style={props.style}>
        {TWEETS.map(({ date, content, link, button, image }, key) => {
          return (
            <Tweet date={date} key={key}>
              <p>
                {content}
                <br></br>
              </p>
              <br></br>
              <Link href={link} target="_blank">
                {image!.map((img, key2) => {
                  return <Image src={img} alt={button} key={key2} />;
                })}
              </Link>
              {/* <SecondaryButton>
                <a href={link} target="_blank" className="dark:text-white">
                  <strong>{button}</strong>
                </a>
              </SecondaryButton> */}
            </Tweet>
          );
        })}
      </div>
    </div>
  );
}
