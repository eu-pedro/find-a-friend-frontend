import { AnimalCardDetails } from './_components/AnimalCardDetails'
import { AnimalCard } from './_components/AnimalCard'
import { Navigation } from '@/presentation/shared/layout'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default async function AnimalsPage() {
  return (
    <section className="h-screen w-screen flex">
      <Navigation />

      <main className="bg-[#FDECED] flex-grow pr-28 pl-8 pt-36">
        <header className="flex justify-between mb-14">
          <p className="text-xl">
            Encontre{' '}
            <span className="text-[#0d3b66] font-extrabold">324 amigos</span> na
            sua cidade
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
          {[0, 1, 2, 3, 4].map((i) => (
            <AnimalCardDetails key={i} name="Alfredo" />
          ))}
        </AnimalCard>
      </main>
    </section>
  )
}
