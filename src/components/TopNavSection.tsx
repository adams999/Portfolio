import { TopNavBadge } from "@/components/TopNavBadge";
import { TopNavTitle } from "@/components/TopNavTitle";
import { TopNavDescription } from "@/components/TopNavDescription";
import { TopNavCTA } from "@/components/TopNavCTA";
import { topNavData } from "@/data/topnav";

export function TopNavSection() {
  return (
    <section className="relative flex min-h-[80vh] flex-col justify-center overflow-hidden px-4 pt-16">
      <div className="container mx-auto max-w-4xl">
        <TopNavBadge badge={topNavData.badge} />
        <TopNavTitle title={topNavData.title} />
        <TopNavDescription description={topNavData.description} />
        <TopNavCTA buttons={topNavData.buttons} />
      </div>

      {/* Background Gradient Blobs */}
      <div className="absolute -top-24 -right-24 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[100px]" />
      <div className="absolute top-1/2 -left-24 -z-10 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[100px]" />
    </section>
  );
}
