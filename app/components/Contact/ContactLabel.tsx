export const ContactLabel = ({ children }: { children: React.ReactNode }) => {
  return (
    <label className="flex flex-col gap-1 w-full md:w-[600px] mb-2 text-sm font-medium text-gray-900 dark:text-white">
      {children}
    </label>
  )
}
