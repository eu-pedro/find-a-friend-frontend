interface CardProps {
  children: React.ReactNode
}

export function AnimalCard({ children }: CardProps) {
  return <div className="grid grid-cols-4 gap-8">{children}</div>
}
