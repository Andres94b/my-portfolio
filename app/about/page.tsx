import { Heading } from "@/components/about/heading";
import { LocationIcon } from "@/components/icons";
import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";

export default function AboutPage() {
  return (
    <section className="flex flex-col w-full max-w-lg">
      <Heading />
      <Divider />
      <p className="mt-6">
        I am a Software Developer with a background in Robotics Engineering.
        Looking for opportunities in front end and/or back end development.
        Skilled in building responsive user interfaces using React and .NET
        Core, and developing RESTful APIs with Node.js. Experienced in
        integrating components with Docker, Postgres, and AWS S3. Passionate
        about software development and excited to collaborate with kind and
        hardworking teams combining creativity and technical excellence.
      </p>
    </section>
  );
}
