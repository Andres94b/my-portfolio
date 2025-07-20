import { Card, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { title } from "../primitives";

export default function ProjectSection() {
  return (
    <div className="justify-left">
      <span className={title({ size: "sm" })}>My Projects</span>
      <div className="gap-4 grid grid-cols-9 grid-rows-2 px-8 mt-8 max-w-4xl">
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col items-start!">
            <p className="text-tiny text-white/60 uppercase font-bold">
              An Android Project
            </p>
            <h4 className="text-white font-medium text-large">Farmily</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://img.youtube.com/vi/9CKMqmhNcUc/0.jpg"
          />
        </Card>

        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-5"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              A .NET Core Project
            </p>
            <h4 className="text-black font-medium text-2xl">Lease Link</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="https://img.youtube.com/vi/I7WIhnHABq0/0.jpg"
          />
        </Card>
      </div>
    </div>
  );
}
