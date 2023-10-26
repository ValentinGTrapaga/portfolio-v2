import {
  BxlGithub,
  GrommetIconsLinkedin,
  MdiFileDocumentEdit,
  MdiGmail
} from '../devIcons'
import { NavBarItem } from './NavBarItem'

export const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 h-screen flex flex-col items-center justify-center pl-4">
      <ul className="flex flex-col gap-4 text-white z-10">
        <NavBarItem href="https://github.com/ValentinGTrapaga" name="GitHub">
          <BxlGithub className="w-10 h-10" />
        </NavBarItem>
        <NavBarItem
          href="https://www.linkedin.com/in/valentin-gonzalez-trapaga/"
          name="LinkedIn"
        >
          <GrommetIconsLinkedin className="w-10 h-10" />
        </NavBarItem>
        <NavBarItem href="mailto:gonzaleztrapagav@gmail.com" name="Gmail">
          <MdiGmail className="w-10 h-10" />
        </NavBarItem>
        <NavBarItem
          name="Download resume"
          href="https://docs.google.com/document/d/1RE4QViP6qmnONd1YLdHhe8Jo7HYn4yYzOXhV1pMBX9k/edit?usp=sharing"
        >
          <MdiFileDocumentEdit className="w-10 h-10" />
        </NavBarItem>
      </ul>
    </nav>
  )
}
