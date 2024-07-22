import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/media";

export function Footer({ className }: any) {
  return (
    <div
      className={`${className} w-full py-8 dark:bg-[#2d3748] dark:text-white`}>
      <div className="grid place-items-center gap-2.5">
        <div className="flex space-x-2.5">
          <a
            href="https://www.instagram.com/benjahenleymusic/"
            className="w-10 h-10 grid place-items-center hover:bg-gray-200 rounded"
            target="_blank"
            rel="noopener noreferrer">
            <InstagramIcon className="w-5" />
          </a>
          <a
            href="https://github.com/benjini123"
            className="w-10 h-10 grid place-items-center hover:bg-gray-200 rounded"
            target="_blank"
            rel="noopener noreferrer">
            <GithubIcon className="w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/benjamin-h-579b88146/"
            className="w-10 h-10 grid place-items-center hover:bg-gray-200 rounded"
            target="_blank"
            rel="noopener noreferrer">
            <LinkedinIcon className="w-5" />
          </a>
        </div>
        <div className="text-center">
          Benja © <span>2023</span>
        </div>
      </div>
    </div>
  );
}
