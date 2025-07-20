import { title, subtitle } from "@/components/primitives";
import { Divider } from "@heroui/divider";
import Section from "@/components/home/section";
import ProjectSection from "@/components/home/project-section";
import { profile } from "./constants/constants";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-16 md:pd-10">
      <div className="inline-block text-center justify-center">
        <span className={title({ color: "blue" })}>Welcome</span>
      </div>
      <Divider />
      <Section heading="Who am I?" description={profile.summary} />
      <Divider />
      <ProjectSection />
    </section>
  );
}
