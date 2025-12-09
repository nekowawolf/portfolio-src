import HeroSection from "@/components/HeroSection";
import ExperienceEducation from "@/components/ResumeSection";
import RecentProjects from "@/components/RecentProjects";
import RecentDesigns from "@/components/RecentDesigns";
import Certificates from "@/components/Certificates";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1f35] px-4 py-8 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <HeroSection />
        <ExperienceEducation />
        <Skills />
        <RecentProjects />
        <RecentDesigns />
        <Certificates />
      </div>
    </main>
  );
}