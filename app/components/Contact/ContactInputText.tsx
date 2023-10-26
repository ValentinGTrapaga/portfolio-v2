export const ContactTextInput = () => {
  return (
    <input
      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-sm block w-full p-2.5"
      type="text"
      required
    />
  )
}

export const ContactTextArea = () => {
  return (
    <textarea
      required
      rows={6}
      className="p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-sm resize-none"
    />
  )
}
