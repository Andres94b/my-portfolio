"use client";

import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { title } from "../primitives";
import { useRouter } from "next/navigation";

type props = {
  heading: string;
  descriptioon: string;
  imagePath: string;
  videoPath: string;
};

export default function ProjectSection({
  heading,
  descriptioon,
  imagePath,
  videoPath,
}: props) {
  const router = useRouter();
  const handleOnClick = () => {
    router.push(videoPath);
  };
  return (
    <div className="flex gap-10 justify-center">
      <div>
        <span className={title({ size: "sm" })}>{heading}</span>
        <p>{descriptioon}</p>
      </div>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-max-2xs h-max-md"
        src={imagePath}
        onClick={handleOnClick}
      />
    </div>
  );
}
