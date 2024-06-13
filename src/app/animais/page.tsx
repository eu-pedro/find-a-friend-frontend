import Image from 'next/image'
import { AnimalCardDetails } from './_components/AnimalCardDetails'
import { AnimalCard } from './_components/AnimalCard'

export default async function AnimalsPage() {
  return (
    <section className="h-screen w-screen flex">
      <nav className="flex flex-col h-full w-[392px]">
        <header className="bg-red-400 flex items-center py-8">
          <div className="flex flex-col gap-7 mx-auto">
            <Image
              src="/logo.svg"
              alt="Logo da aplicação"
              width={45}
              height={46.67}
            />
            <div className="flex gap-3">
              <div className="p-1 border border-red-300 rounded-2xl flex items-center">
                <select
                  name="state"
                  id="state"
                  className="text-white outline-none font-bold bg-red-400"
                >
                  <option value="PE">MA</option>
                </select>
              </div>

              <div className="text-white w-[145px] border border-red-300 flex justify-center rounded-3xl">
                <select
                  name="city"
                  id="city"
                  className="bg-red-400 text-white text-center outline-none border-none font-bold"
                >
                  <option value="recife">São Luís</option>
                </select>
              </div>

              <button className="bg-yellow-200 p-2 rounded-2xl border-none outline-none">
                <Image
                  src="/loupe.svg"
                  width={26}
                  height={26}
                  alt="Ícone de lupa"
                />
              </button>
            </div>
          </div>
        </header>

        <div className="flex flex-col bg-red-300 py-5 pl-14 pr-10 flex-grow">
          <h2 className="font-extrabold text-xl text-white pb-4">Filtros</h2>

          <form action="" className="w-full flex flex-col gap-5">
            <fieldset className="flex flex-col gap-3">
              <label htmlFor="" className="text-xs text-white font-medium">
                Idade
              </label>
              <div className="w-full px-4 py-4 rounded-2xl flex justify-center items-center bg-red-200">
                <select
                  name="age"
                  id="age"
                  className="w-full bg-red-200 outline-none text-white font-extrabold"
                >
                  <option value="filhote">Filhote</option>
                </select>
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-3">
              <label htmlFor="" className="text-xs text-white font-medium">
                Nível de Energia
              </label>
              <div className="w-full px-4 py-4 rounded-2xl flex justify-center items-center bg-red-200">
                <select
                  name="energy-level"
                  id="energy-level"
                  className="w-full bg-red-200 outline-none text-white font-extrabold"
                >
                  <option value="03">03</option>
                </select>
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-3">
              <label htmlFor="" className="text-xs text-white font-medium">
                Porte do animal
              </label>
              <div className="w-full px-4 py-4 rounded-2xl flex justify-center items-center bg-red-200">
                <select
                  name="animal-size"
                  id="animal-size"
                  className="w-full bg-red-200 outline-none text-white font-extrabold"
                >
                  <option value="pequenino">Pequenino</option>
                </select>
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-3">
              <label htmlFor="" className="text-xs text-white font-medium">
                Nível de Independência
              </label>
              <div className="w-full px-4 py-4 rounded-2xl flex justify-center items-center bg-red-200">
                <select
                  name="independence-level"
                  id="independence-level"
                  className="w-full bg-red-200 outline-none text-white font-extrabold"
                >
                  <option value="medio">Médio</option>
                </select>
              </div>
            </fieldset>
          </form>
        </div>
      </nav>

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
