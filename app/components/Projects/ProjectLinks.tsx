import { LineMdGithub, MaterialSymbolsLink } from '../devIcons'

export const ProjectsLinks = ({
  github,
  link
}: {
  github: string
  link: string
}) => {
  return (
    <span className="flex gap-2 justify-center w-full mt-2">
      <a
        target="_blank"
        className="px-2 py-1 border-white border-2 font-bold hover:bg-white hover:text-black transition-all"
        href={github}
      >
        <span className="flex items-center gap-2 justify-center">
          <p>GitHub</p> <LineMdGithub className="w-5 h-5" />
        </span>
      </a>
      <a
        target="_blank"
        href={link}
        className="px-2 py-1 border-white border-2 font-bold hover:bg-white hover:text-black transition-all"
      >
        <span className="flex items-center gap-2 justify-center">
          <p>Website</p>
          <MaterialSymbolsLink className="w-5 h-5" />
        </span>
      </a>
    </span>
  )
}
