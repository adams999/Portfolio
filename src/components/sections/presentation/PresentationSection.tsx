import { PresentationBadge } from "@/components/sections/presentation/PresentationBadge";
import { PresentationTitle } from "@/components/sections/presentation/PresentationTitle";
import { PresentationDescription } from "@/components/sections/presentation/PresentationDescription";
import { PresentationCTA } from "@/components/sections/presentation/PresentationCTA";
import { topNavData } from "@/data/topnav";

export function PresentationSection() {
  return (
    <section className="relative flex min-h-[80vh] flex-col justify-center overflow-hidden px-4 pt-16">
      <div className="container mx-auto max-w-4xl">
        <PresentationBadge badge={topNavData.badge} />
        <PresentationTitle title={topNavData.title} />
        <PresentationDescription description={topNavData.description} />
        <PresentationCTA buttons={topNavData.buttons} />
      </div>

      {/* Background Gradient Blobs */}
      <div className="absolute -top-24 -right-24 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[100px]" />
      <div className="absolute top-1/2 -left-24 -z-10 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[100px]" />
    </section>
  );
}
