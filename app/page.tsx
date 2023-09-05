import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider"
import About from "@/components/about"
import Projects from "@/components/projects";
import Skill from "@/components/skill";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-5">
      <Intro />
      <About />
      <Projects />
      <Skill />
    </main>
  )
}
