import { title } from "@/components/primitives";
import ProjectSection from "@/components/projects/project-section";
import { Button } from "@heroui/button";
import { Card, CardFooter, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";

export default function ProjectsPage() {
  return (
    <div className="items-center justify-center">
      <span className={title()}>My Projects</span>
      <p className="m-6">
        Here you can have an overview of the project I've worked on. You can
        click on the Github button of each project to go to it's repository.
      </p>
      <Divider className="my-6" />
      <ProjectSection
        heading="Farmily"
        descriptioon="This is an Android Project"
        imagePath="https://img.youtube.com/vi/9CKMqmhNcUc/0.jpg"
        videoPath="https://www.youtube.com/shorts/9CKMqmhNcUc"
      />
      <Divider className="my-6" />
      <ProjectSection
        heading="Lease Link"
        descriptioon="This is an Android Project"
        imagePath="https://img.youtube.com/vi/I7WIhnHABq0/0.jpg"
        videoPath="https://www.youtube.com/watch?v=I7WIhnHABq0"
      />
    </div>
  );
}
