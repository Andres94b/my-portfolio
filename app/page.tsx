import { title, subtitle } from "@/components/primitives";
import { Divider } from "@heroui/divider";
import Section from "@/components/home/section";
import ProjectSection from "@/components/home/project-section";
import { profile } from "../utils/constants";
import { Avatar } from "@heroui/avatar";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <section className="flex flex-col items-center gap-20 max-w-full py-10 px-8 md:px-60 md:pd-10">
      <div className="flex text-center justify-center border rounded-3xl w-full items-center gap-10 pt-20 bg-background border-foreground">
        {/* <span className={title({ className: "text-middleground" })}>
          Welcome
        </span> */}
        <Image
          className="w-96 min-w-40 hidden sm:block m-x4"
          src={`/avatars/me_sitting.png`}
        />
        <div className="grid gap-4 text-center mb-20 m-4">
          <span className={title({ className: "text-foreground" })}>
            Hi, I'm Andres!
          </span>
          <span className={subtitle({ className: "text-middleground" })}>
            Software Developer & Mechatronics Specialist
          </span>
          <div className="flex justify-center gap-4">
            <Link isExternal aria-label="Github" href={siteConfig.links.github}>
              <GithubIcon className="text-middleground" />
            </Link>
            <Link
              isExternal
              aria-label="LinkedIn"
              href={siteConfig.links.linkedin}
            >
              <LinkedInIcon className="text-middleground" />
            </Link>
          </div>
        </div>
      </div>

      <div className="container text-center my-20 sm:px-20">
        <span className={title({ className: "text-middleground" })}>
          This portfolio was built with Next.js, Tailwind CSS, and Node.js, as a
          way to share my projects and show how I apply these tools in
          real-world development.
        </span>
      </div>

      <Section description={profile.summary} />
      <ProjectSection />
    </section>
  );
}
