
interface IProps {
    children: React.ReactNode
}

export const Button = ({ children } : IProps) => {
  return (
    <button className="bg-blue-500 text-white px-3 py-2 border rounded-md hover:bg-blue-600 text-sm">{children}</button>
  )
}
