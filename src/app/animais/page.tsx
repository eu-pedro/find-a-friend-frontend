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

export default async function AnimalsPage() {
  const animalsTotalLenght = data.animals.length

  return (
    <section className="h-screen w-screen flex">
      <Navigation />

      <main className="bg-[#FDECED] flex-grow pr-28 pl-8 pt-36">
        <header className="flex justify-between mb-14">
          <p className="text-xl">
            Encontre{' '}
            <span className="text-[#0d3b66] font-extrabold">
              {animalsTotalLenght} amigos
            </span>{' '}
            na sua cidade
          </p>

          <Select>
            <SelectTrigger className="w-[210px] bg-filter-animais rounded-3xl font-bold border-0 text-blue-bold text-base">
              <SelectValue placeholder="Gatos e Cachorros" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                value="MA
                  "
              >
                MA
              </SelectItem>
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
