import { StaticImageData } from 'next/image'
import EscuchaderoImage from './assets/escuchadero.jpg'
import PokedexImage from './assets/pokedex.png'
import ShoppingifyImage from './assets/shoppingify.png'

export interface WorkExperience {
  title: string,
  company: string,
  startDate: string,
  endDate: string | null,
  summary: string,
  responsabilities: string[]
}

export interface Project {
  title: string,
  stack: string[],
  imageURL: StaticImageData,
  link: string,
  github: string,
  summary: string
}

export const workExperience: WorkExperience[] = [{
  title: 'Fullstack Developer',
  company: 'Freelance',
  startDate: 'Decebember, 2022',
  endDate: null,
  summary: 'I was part of different projects as a freelancer in order to gain experience in the field',
  responsabilities: ['Developed static pages using React and NextJs', 'Developed an AI assisted business trip planner MVP', 'Copied pixel perfect designs from Figma to React', 'Developed a store manager for a client Using NextJS, Express and MongoDB', 'Conducted unit testing for the APIs of different projects']
},
{
  title: 'Fullstack Developer',
  company: 'Efrenis S.R.L.',
  startDate: 'July, 2023',
  endDate: 'September, 2023',
  summary: 'Contributed to the development of stock management and invoice generator for warehouses MVP',
  responsabilities: ['Developed database models with MySQL and Prisma', 'Developed Express API for product stock control, storage and users', 'Used Zod and Typescript for correct data insertion and validation', 'Applied Agile and SCRUM methodologies for efficient project management']
},
{
  title: 'Frontend development',
  company: 'No Country',
  startDate: 'March, 2023',
  endDate: 'June 2023',
  summary: 'Contributed to the development of stock management and invoice generator for warehouses MVP',
  responsabilities: ['Developed Home and medics  appointment pages  and components', 'Developed Firebase database model, connection, CRUD functionality and authentication', 'Pixel perfect design from Figma File with Tailwind CSS and styled-components', 'Conducted sight and comprehensive testing throughout the project lifecycle']
},
]

export const projects: Project[] = [
  {
    title: 'Shoppingify',
    stack: [
      'HTML',
      'CSS',
      'Tailwind CSS',
      'JavaScript',
      'React',
      'NextJS',
      'Zustand',
      'Supabase',
    ],
    imageURL: ShoppingifyImage,
    link: 'https://shoppingify-snowy.vercel.app/',
    github: 'https://github.com/ValentinGTrapaga/shoppingify/',
    summary:
      'WebApp to create your shopping lists and share with anyone. Developed in NextJS 13 with Supabase, Tailwind and Zustand for the global state.devchallenges.io challenge done to learn about NextJS 13 routing and server actions and components, supabase and authentication as well as practice design'
  },
  {
    title: 'Escuchadero',
    stack: [
      'HTML',
      'CSS',
      'React',
      'ReactRouter',
      'Context API',
      'JavaScript',
      'Firebase',
      'Styled-components'
    ],
    imageURL: EscuchaderoImage,
    link: 'https://c10-58-m-reactchallenge-mern.vercel.app//',
    github: 'https://github.com/No-Country/c10-58-m-reactchallenge-mern',
    summary:
      'An application dedicated to connecting mental health professionals with clients in need. Developed in React with React Router. Responsible for database development and authentication with Firebase, as well as development of appointment scheduling components, Home page, user profile following a design based on a Figma file. WebApp done as a joint project for No Country.'
  },
  {
    title: 'PokedexApp',
    stack: [
      'React',
      'PokeAPI',
      'HTML',
      'Tailwind CSS',
      'REST API',
      'JavaScript'
    ],
    imageURL: PokedexImage,
    link: 'https://pokedex-nextjs-valentingtrapaga.vercel.app/',
    github: 'https://github.com/ValentinGTrapaga/pokedex-nextjs',
    summary:
      'Developed an MPA Pokedex application that retrieves data from PokeAPI. Implemented the use of Tailwind CSS and Next.js to enhance styling and functionality. PokedexApp to learn API calls, JSON handling, pagination. Made with Tailwind CSS and NextJS. This project was particularly difficult because of the rendering of the evolution chain, since it was an evolution inside another with its details in it. I am particularly proud of the function made to fetch and format the data'
  }
]

export const skills = [
  {
    name: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'NextJS', 'Tailwind CSS', 'Redux']
  },
  {
    name: 'Misc',
    skills: ['Git', 'Docker', 'styled-components']
  },
  {
    name: 'Backend and Databases',
    skills: ['NodeJS', 'Express', 'MongoDB', 'MySQL', 'Prisma.io', 'Zod', 'Firebase']
  }
]