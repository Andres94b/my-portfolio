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
      </div>
      <Divider />
      <Section heading="Who am I?" description={profile} />
      <Divider />
      <ProjectSection />
    </section>
  );
}
