import { Heading } from "@/components/about/heading";
import Section from "@/components/about/section";
import { LocationIcon } from "@/components/icons";
import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";

const profile =
  "I am a Software Developer with a background in Robotics Engineering." +
  "Looking for opportunities in front end and/or back end development." +
  "Skilled in building responsive user interfaces using React and .NET" +
  "Core, and developing RESTful APIs with Node.js. Experienced in" +
  "integrating components with Docker, Postgres, and AWS S3. Passionate" +
  "about software development and excited to collaborate with kind and" +
  "hardworking teams combining creativity and technical excellence.";

const experiences = [
  {
    name: "Fireraven AI",
    position: "Full Stack Developer",
    from: "April 2025",
    to: "June 2025",
    location: "Montreal, Canada",
    bullets: [
      "Developed and implemented new features using Next.js, React, Nest.js, and Node.js, improving user interface responsiveness and functionality",
      "Integrated and managed Postgres Databases while leveraging GenAI tools, enhancing data retrieval speed and productivity",
      "Implemented Docker Containers and CI/CD practices to develop and deploy a reliable platform under a Scrum Methodology, ensuring consistent and efficient software delivery",
    ],
  },
  {
    name: "Imocom",
    position: "Technical Service Engineer",
    from: "March 2017",
    to: "March 2021",
    location: "Bogota, Colombia",
    bullets: [
      "Installed and programmed automation and robotics systems for injection molding machines using C, enhancing production efficiency.",
      "Read electrical, pneumatic, mechanical, and hydraulic schematics to provide effective maintenance of machinery, reducing downtime",
      "Planned and executed machinery overhaul, resulting in a 60% reduction in energy consumption and significant cost savings",
    ],
  },
];

const education = [
  {
    name: "LaSalle College",
    position: "AEC, Information Technology Programmer-ANalyst",
    from: "September 2023",
    to: "June 2025",
    location: "Montreal, Canada",
    bullets: [
      "Full Stack Web Applications Development",
      "Database Management",
      "Scripting Language",
      "Trending Frameworks & Technologies",
      "Data Structures and Algorithms",
    ],
  },
  {
    name: "Military Unversity Nueva Granada",
    position: "Bachelor's degree, Mechatronics Engineering",
    from: "March 2017",
    to: "March 2021",
    location: "Bogota, Colombia",
    bullets: [
      "Object Oriented Programming",
      "Microcontrollers Programming",
      "Virtual Reality Development",
      "Artificial Intelligence",
      "MATLAB and Simulink Laboratories",
      "CAD Design",
    ],
  },
];

const otherExperiences = [
  {
    name: "GrowPro Experience",
    position: "Full Stack Developer",
    from: "June 2022",
    to: "May 2023",
    location: "Montreal, Canada",
    bullets: [
      "Tracked status and handled customer relationships using Zoho CRM, enhancing customer satisfaction and retention",
      "Improved educational and customer experiences by identifying opportunities and responding to requests professionally, leading to increased customer engagement and satisfaction",
    ],
  },
];

export default function AboutPage() {
  return (
    <section className="flex flex-col max-w-3xl">
      <Heading />
      <Divider />
      <p className="mt-6">{profile}</p>
      <Section name="Education" subSection={education}></Section>
      <Section name="Relative Experiences" subSection={experiences}></Section>
      <Section name="Other Experiences" subSection={otherExperiences}></Section>
    </section>
  );
}
