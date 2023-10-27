import { skills } from '@/app/data'
import { SkillGroupList } from './SkillGroupList'

export const SkillGroupGrid = () => {
  return (
    <div className="sm:grid sm:grid-cols-3 flex flex-col gap-6">
      {skills.map(({ name, skills }) => (
        <SkillGroupList name={name} skills={skills} key={name} />
      ))}
    </div>
  )
}
