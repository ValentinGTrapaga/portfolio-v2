export const SkillGroupList = ({
  name,
  skills
}: {
  name: string
  skills: string[]
}) => {
  return (
    <div key={name}>
      <h2 className="font-semibold text-2xl mb-2">{name}</h2>
      <ul className="flex flex-col gap-1">
        {skills.map((skill) => (
          <li key={skill} className="">
            - {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}
