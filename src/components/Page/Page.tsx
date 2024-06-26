import { ReactNode } from 'react'

export function Page({ children }: { children: ReactNode }) {
  return (
    <main className="max-w-6xl mx-auto flex items-center justify-center h-screen">
      {children}
    </main>
  )
}
