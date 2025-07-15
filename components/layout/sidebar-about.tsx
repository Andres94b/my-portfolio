import { siteConfig } from "@/config/site";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Navbar } from "@heroui/navbar";
import { LocationIcon } from "../icons";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";

export const SideBarAbout = () => {
  return (
    <aside className="flex flex-col gap-4 max-w-48 h-fit sticky top-20">
      <Avatar className="w-48 h-48 text-large" src={`/avatars/me.jpg`} />
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
      <div
        id="language_section"
        className="flex flex-wrap justify-center gap-2 "
      >
        <span>Spanish</span>
        {/* <Divider orientation="vertical" /> */}
        <span>English</span>
        {/* <Divider orientation="vertical" /> */}
        <span>French</span>
        {/* <Divider orientation="vertical" /> */}
        <span>German</span>
      </div>
    </aside>
  );
};
