export const ContactTextInput = ({
  name,
  type
}: {
  name: string
  type: string
}) => {
  return (
    <input
      name={name}
      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-sm block w-full p-2.5"
      type={type}
      required
    />
  )
}

export const ContactTextArea = ({ name }: { name: string }) => {
  return (
    <textarea
      name={name}
      required
      rows={8}
      className="p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-sm resize-none"
    />
  )
}
