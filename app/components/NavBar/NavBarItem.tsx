'use client'
import React, { useState } from 'react'

export const NavBarItem = ({
  children,
  name,
  href
}: {
  children: React.ReactNode
  name: string
  href: string
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => setIsOpen((prevState) => !prevState)

  return (
    <li
      className="relative hover:scale-125 duration-300"
      onMouseEnter={toggleIsOpen}
      onMouseLeave={toggleIsOpen}
    >
      <a href={href} target="_blank">
        <span
          className={`px-2 py-1 font-bold absolute md:top-1/2 md:left-4 md:translate-x-1/2 -translate-y-1/2 duration-300 hidden w-full md:inline ${
            isOpen ? 'text-white' : 'text-transparent'
          }`}
        >
          {name}
        </span>
        {children}
      </a>
    </li>
  )
}
