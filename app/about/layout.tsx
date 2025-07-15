import { LocationIcon } from "@/components/icons";
import { SideBarAbout } from "@/components/layout/sidebar-about";
import { siteConfig } from "@/config/site";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
    //   <div className="inline-block max-w-lg text-center justify-center">
    //     {children}
    //   </div>
    // </section>
    <div className="flex justify-center gap-20">
      <main className="overflow-auto">{children}</main>
      <SideBarAbout />
    </div>
  );
}
