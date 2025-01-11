interface TitleProps {
  title: string
}

export function Title({ title }: TitleProps) {
  return (
    <h1 className="text-4xl p-10 lg:px-0 text-blue-bold font-bold lg:text-5xl text-left">
      {title}
    </h1>
  )
}
