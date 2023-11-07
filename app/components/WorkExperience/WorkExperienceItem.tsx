import { WorkExperience } from '@/app/data'
import React from 'react'

export const WorkExperienceItem = ({
  workExp
}: {
  workExp: WorkExperience
}) => {
  return (
    <li key={`${workExp.company}-${workExp.title}`}>
      <h2 className="w-full text-2xl sm:text-3xl text-left font-bold">
        {workExp.title} | {workExp.company} | {workExp.startDate} -{' '}
        {workExp.endDate ?? 'Present'}
      </h2>
      <p className="text-xs sm:text-base text-gray-300 font-semibold">
        {workExp.summary}
      </p>
      <h3 className="my-2 text-sm sm:text-xl font-bold">Responsabilities:</h3>
      <ul>
        {workExp.responsabilities.map((resp) => (
          <li
            key={`${workExp.company}-${resp}`}
            className="pl-2 text-sm sm:text-base"
          >
            - {resp}
          </li>
        ))}
      </ul>
    </li>
  )
}
