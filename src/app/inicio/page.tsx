'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const { push } = useRouter()
  return (
    <section className="bg-red-light flex justify-center items-center h-full w-full">
      <main className="flex flex-col max-w-[1212px] mx-auto ">
        <Image
          src="/logo-with-description.svg"
          width={215}
          height={58}
          alt="Find a Friend Logo"
          className="mb-16"
        />

        <div className="flex flex-row justify-between items-center gap-32">
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
              <Select>
                <SelectTrigger className="w-[72px] h-[54px] bg-red-light text-white font-bold justify-center rounded-3xl">
                  <SelectValue placeholder="MA" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MA">MA</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[280px] h-[54px] bg-red-bold rounded-3xl text-white justify-center font-extrabold border-0">
                  <SelectValue placeholder="São Luís" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value="São luís
                  "
                  >
                    São Luís
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <button
              className="bg-yellow-200 p-4 rounded-2xl border-none outline-none ml-8"
              onClick={() => push('/animais')}
            >
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
