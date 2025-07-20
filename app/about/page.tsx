import { Heading } from "@/components/about/heading";
import Section from "@/components/about/section";

import { Divider } from "@heroui/divider";
import {
  education,
  experiences,
  otherExperiences,
  profile,
} from "../constants/constants";

export default function AboutPage() {
  return (
    <section className="flex flex-col max-w-3xl">
      <Heading />
      <Divider />
      <p className="mt-6">{profile.summary}</p>
      <Section name="Education" subSection={education}></Section>
      <Section name="Relative Experiences" subSection={experiences}></Section>
      <Section name="Other Experiences" subSection={otherExperiences}></Section>
    </section>
  );
}
