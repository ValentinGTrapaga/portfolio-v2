export const Section = ({
  children,
  classes
}: {
  children: React.ReactNode
  classes?: string
}) => {
  return (
    <section
      className={`flex flex-col min-h-screen max-w-[1280px] p-12 md:px-16 md:py-24 w-full ${classes}`}
    >
      {children}
    </section>
  )
}

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="text-4xl sm:text-7xl font-semibold w-full border-b-2 border-white pb-1">
      {title}
    </h1>
  )
}
