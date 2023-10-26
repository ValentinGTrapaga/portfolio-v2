import { skills } from '@/app/data'
import { SkillGroupList } from './SkillGroupList'

export const SkillGroupGrid = () => {
  return (
    <div className="grid grid-cols-3">
      {skills.map(({ name, skills }) => (
        <SkillGroupList name={name} skills={skills} key={name} />
      ))}
    </div>
  )
}
