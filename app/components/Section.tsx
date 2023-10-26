export const Section = ({
  children,
  classes
}: {
  children: React.ReactNode
  classes?: string
}) => {
  return (
    <section
      className={`flex flex-col min-h-screen max-w-[1280px] px-12 py-24 mx-auto w-full ${classes}`}
    >
      {children}
    </section>
  )
}

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="text-7xl font-semibold w-full border-b-2 border-white pb-1">
      {title}
    </h1>
  )
}
