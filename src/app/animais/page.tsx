import Image from 'next/image'

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
        <header className="flex justify-between w-full">
          <p>Encontre 324 amigos na sua cidade</p>

          <select name="filter" id="filter">
            <option value="gato-e-cachorro">Gatos e Cachorros</option>
          </select>
        </header>

        <div className="grid grid-cols-3">
          <div className="w-[280px] h-[209px] bg-white rounded-3xl px-1 pt-1 pb-4">
            <header className="h-[135px] relative flex justify-center bg-[#e2b349] rounded-3xl">
              <Image
                src="/images/dog.png"
                fill
                style={{
                  objectFit: 'contain',
                }}
                alt="Imagem de cachorro"
                blurDataURL="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcanaltech.com.br%2Fempresa%2Fgoogle%2F&psig=AOvVaw1MnacU9SUXQkEXKDWcE5gP&ust=1718305074968000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjGsK7f1oYDFQAAAAAdAAAAABAE"
                placeholder="blur"
              />
            </header>
            <div className="w-12 h-12 p-2 bg-white z-10">
              <div className="relative w-full h-full bg-[#F4D35E] flex justify-center -mt-5 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}
