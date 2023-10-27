import { Section, SectionTitle } from './components/Section'
import { UList } from './components/UList'
import { workExperience, projects, skills } from './data'
import { AboutMe } from './components/AboutMe'
import { ContactForm } from './components/Contact/ContactForm'
import { ProjectItem } from './components/Projects/ProjectItem'
import { Title } from './components/Title'
import { Skills } from './components/Skills/SkillsPage'
import { WorkExperienceItem } from './components/WorkExperience/WorkExperienceItem'
import { NavBar } from './components/NavBar/NavBar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-screen">
      <NavBar />
      <Section classes="justify-evenly">
        <Title />
      </Section>
      <Section classes="gap-12">
        <AboutMe />
        <Skills />
      </Section>
      <Section classes="gap-8">
        <SectionTitle title="Work experience" />
        <UList>
          {workExperience.map((workExp) => (
            <WorkExperienceItem workExp={workExp} key={workExp.company} />
          ))}
        </UList>
      </Section>
      <Section classes="gap-8">
        <SectionTitle title="Projects" />
        <UList>
          {projects.map((project) => (
            <ProjectItem project={project} key={project.link} />
          ))}
        </UList>
      </Section>
      <Section classes="gap-12 justify-center items-center">
        <SectionTitle title="Contact me" />
        <ContactForm />
      </Section>
    </main>
  )
}
