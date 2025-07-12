import { siteConfig } from "@/config/site";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Navbar } from "@heroui/navbar";
import { LocationIcon } from "../icons";

export const SideBarAbout = () => {
  return (
    <aside className="flex flex-col gap-4 ">
      <Avatar className="w-40 h-40 text-large" src={`/avatars/me.jpg`} />
      <Button
        isExternal
        as={Link}
        className="text-xs font-normal text-default-600 bg-default-100 rounded-full"
        href={siteConfig.links.address}
        startContent={<LocationIcon className="text-blue-600" />}
        variant="flat"
      >
        Montreal, Canada
      </Button>
    </aside>
  );
};
