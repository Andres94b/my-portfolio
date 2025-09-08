"use client";

import { Avatar } from "@heroui/avatar";
import { subtitle, title } from "../primitives";
import Link from "next/link";
import { useRouter } from "next/navigation";

type params = {
  heading?: string;
  description: string;
};

export default function Section({ heading, description }: params) {
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/about");
  };
  return (
    <article
      className="max-w-full duration-300 ease-in-out hover:scale-105 hover:opacity-75"
      onClick={handleOnClick}
    >
      <div className="flex flex gap-8 items-center p-10 bg-foreground rounded-3xl cursor-pointer">
        <div>
          {/* <span className={title({ size: "sm" })}>{heading}</span> */}
          <span
            className={subtitle({
              className: "text-justify text-background",
            })}
          >
            {description}
          </span>
        </div>
        <Avatar
          className="w-40 h-40 text-large min-w-40 hidden sm:block"
          src={`/avatars/me.jpg`}
        />
      </div>
    </article>
  );
}
