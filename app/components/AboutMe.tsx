import { SectionTitle } from './Section'

export const AboutMe = () => {
  return (
    <>
      <SectionTitle title="About me" />
      <div className="flex flex-col gap-2">
        <p className="text-justify text-lg">
          Ever since I was a child I always got fascinated with science and
          technology and the seemingly limitless possibilties it brought to our
          lives, naturally I felt attracted to it in no time, loving the idea of
          automating things and improving what I could
        </p>
        <p className="text-justify text-lg">
          In 2021 during an university course I learnt basic programming and got
          in love with it. It was C++ that then pushed me to Python and web
          development. I really liked the experience with all three of them but
          stuck to web development and I am really glad I did.
        </p>
        <p className="text-justify text-lg">
          So after two years of learning, making things and some jobs I decided
          to create this portfolio to show my work to you. On this portfolio,
          you will find a collection of my projects, showcasing my dedication to
          learning and my enthusiasm for building software that can make a
          difference.
        </p>
      </div>
    </>
  )
}
