import "./Main.css"
import HeroSection from "../../components/heroSection/HeroSection"
import AboutSection from "../../components/aboutSection/AboutSection"
import ProjectsSection from "../../components/projectsSection/ProjectsSection"
import ContactSection from "../../components/contactSection/ContactSection"
import MainFocusSection from "../../components/mainFocusSection/MainFocusSection"

export default function Main() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <MainFocusSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  )
}
