import { AnimalCardDetails } from './_components/AnimalCardDetails'
import { AnimalCard } from './_components/AnimalCard'
import { Navigation } from '@/presentation/shared/layout'

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

          <select name="filter" id="filter">
            <option value="gato-e-cachorro">Gatos e Cachorros</option>
          </select>
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
