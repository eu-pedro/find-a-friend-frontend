import Image from 'next/image'

export default function HomePage() {
  return (
    <section className="bg-red-300">
      <main className="flex flex-col min-h-screen max-w-[1212px] mx-auto pt-20">
        <Image
          src="/logo-with-description.svg"
          width={215}
          height={58}
          alt="Logo com descrição"
        />

        <div className="flex justify-between items-center ">
          <h1 className="text-7xl max-w-[487px] text-white font-extrabold">
            Leve a felicidade para o seu lar
          </h1>
          <Image
            src="/dogs.svg"
            width={592}
            height={305}
            alt="Imagem de cachorros"
          />
        </div>

        <footer className="flex justify-between items-center mt-16">
          <h3 className="text-2xl text-white max-w-[420px]">
            Encontre o animal de estimação ideal para seu estilo de vida!
          </h3>

          <div className="flex items-center">
            <span className="text-base text-white mr-3">Busque um amigo: </span>
            <div className="flex gap-3">
              <div className="p-4 border border-white rounded-2xl">
                <select
                  name="state"
                  id="state"
                  className=" text-white outline-none font-bold bg-red-300"
                >
                  <option value="PE">MA</option>
                </select>
              </div>

              <div className="text-white w-[280px] bg-red-500 flex justify-center rounded-3xl">
                <select
                  name="city"
                  id="city"
                  className="bg-red-500 text-white text-center outline-none border-none font-bold "
                >
                  <option value="recife">São Luís</option>
                </select>
              </div>
            </div>

            <button className="bg-yellow-200 p-4 rounded-2xl border-none outline-none ml-8">
              <Image
                src="/loupe.svg"
                width={26}
                height={26}
                alt="Ícone de lupa"
              />
            </button>
          </div>
        </footer>
      </main>
    </section>
  )
}
