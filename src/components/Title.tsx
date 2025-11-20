
interface IProps {
    children: React.ReactNode
}

export const Title = ({ children } : IProps) => {
  return (
    <h1 className="text-2xl font-bold">{children}</h1>
  )
}
