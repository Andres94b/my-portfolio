import { Avatar } from "@heroui/avatar";
import { title } from "../primitives";

type params = {
  heading: string;
  description: string;
};

export default function Section({ heading, description }: params) {
  return (
    <article className="max-w-4xl my-6">
      <div className="flex flex gap-8 items-center">
        <div>
          <span className={title({ size: "sm" })}>{heading}</span>
          <p className="text-justify">{description}</p>
        </div>
        <Avatar
          className="w-40 h-40 text-large min-w-40"
          src={`/avatars/me.jpg`}
        />
      </div>
    </article>
  );
}
