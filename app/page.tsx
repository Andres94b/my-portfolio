import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Divider } from "@heroui/divider";
import Section from "@/components/home/section";
import { profile } from "./about/page";
import ProjectSection from "@/components/home/project-section";
import Oscar from "@/components/projects/project-section";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-16 md:pd-10">
      <div className="inline-block text-center justify-center">
        <span className={title({ color: "blue" })}>Welcome</span>
        <br />
        <span className={subtitle()}>
          This page is currently under development so some pages will not seem
          completed.
        </span>
        <span className={subtitle()}>Feel free to explore</span>
      </div>
      <Divider />
      <Section heading="Who am I?" description={profile} />
      <Divider />
      <ProjectSection />
    </section>
    // <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
    //   <div className="inline-block max-w-xl text-center justify-center">
    //     <span className={title()}>Make&nbsp;</span>
    //     <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
    //     <br />
    //     <span className={title()}>
    //       websites regardless of your design experience.
    //     </span>
    //     <div className={subtitle({ class: "mt-4" })}>
    //       Beautiful, fast and modern React UI library.
    //     </div>
    //   </div>

    //   <div className="flex gap-3">
    //     <Link
    //       isExternal
    //       className={buttonStyles({
    //         color: "primary",
    //         radius: "full",
    //         variant: "shadow",
    //       })}
    //       href={siteConfig.links.docs}
    //     >
    //       Documentation
    //     </Link>
    //     <Link
    //       isExternal
    //       className={buttonStyles({ variant: "bordered", radius: "full" })}
    //       href={siteConfig.links.github}
    //     >
    //       <GithubIcon size={20} />
    //       GitHub
    //     </Link>
    //   </div>

    //   <div className="mt-8">
    //     <Snippet hideCopyButton hideSymbol variant="bordered">
    //       <span>
    //         Get started by editing <Code color="primary">app/page.tsx</Code>
    //       </span>
    //     </Snippet>
    //   </div>
    // </section>
  );
}
