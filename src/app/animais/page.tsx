'use client'

import { AnimalDetails } from './_components/animal-details'
import { AnimalCard } from './_components/animal-card'
import { Navigation } from '@/presentation/shared/layout'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import data from '@/data/data.json'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function AnimalsPage() {
  const totalAnimalsLength = data.animals.length

  const { back } = useRouter()

  return (
    <section className="h-screen w-screen flex">
      <Navigation />

      <main className="bg-[#FDECED] flex-grow pr-28 pl-8">
        <Button className="rounded-full h-14 mt-9 mb-7" onClick={() => back()}>
          <ArrowLeft />
        </Button>
        <header className="flex justify-between mb-14">
          <p className="text-xl">
            Encontre{' '}
            <span className="text-[#0d3b66] font-extrabold">
              {totalAnimalsLength} amigos
            </span>{' '}
            na sua cidade
          </p>

          <Select>
            <SelectTrigger className="w-[210px] bg-filter-animais rounded-3xl font-bold border-0 text-blue-bold text-base">
              <SelectValue placeholder="Gatos e Cachorros" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Gatos e Cachorros">MA</SelectItem>
            </SelectContent>
          </Select>
        </header>

        <AnimalCard>
          {data.animals.map((animal) => (
            <AnimalDetails animal={animal} key={animal.id} />
          ))}
        </AnimalCard>
      </main>
    </section>
  )
}
