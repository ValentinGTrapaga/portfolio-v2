import { Project } from '@/app/data'
import { ProjectsLinks } from './ProjectLinks'
import { ProjectTags } from './Tags'

export const ProjectDescription = ({ project }: { project: Project }) => {
  console.log(project.github)
  return (
    <div className="px-4 flex flex-col gap-2 w-full">
      <h2 className="text-xl font-bold">{project.title}</h2>
      <p className="text-sm text-justify">{project.summary}</p>
      <div className="flex gap-2 items-center flex-wrap justify-center my-2">
        {project.stack.map((tag) => (
          <ProjectTags tag={tag} key={`${project.title}-${tag}`} />
        ))}
      </div>
      <ProjectsLinks github={project.github} link={project.link} />
    </div>
  )
}
