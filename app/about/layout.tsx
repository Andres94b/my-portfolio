import { SideBarAbout } from "@/components/layout/sidebar-about";

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
    <div className="flex justify-center gap-20 m-10">
      <main className="overflow-auto">{children}</main>
      <SideBarAbout />
    </div>
  );
}
