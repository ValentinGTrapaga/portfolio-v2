import { Project } from '@/app/data'
import Image from 'next/image'
import { ProjectDescription } from './ProjectsDescription'

export const ProjectItem = ({ project }: { project: Project }) => {
  return (
    <li className="lg:grid md:grid-cols-[300px,1fr] w-full items-center p-4">
      <span className="flex items-center justify-center">
        <Image src={project.imageURL} alt={`${project.title} image`} />
      </span>
      <ProjectDescription project={project} />
    </li>
  )
}
