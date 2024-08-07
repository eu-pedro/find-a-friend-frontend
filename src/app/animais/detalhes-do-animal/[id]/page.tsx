'use client'

import { ArrowLeft, CircleAlert, Scan, Zap } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function AnimalDetailsPage() {
  const { back } = useRouter()

  return (
    <section className="h-full w-full flex gap-80 items-stretch  bg-pink-100">
      <aside className="fixed min-h-[620px] w-fit bg-red-light flex flex-col justify-between py-8 px-6">
        <Image src="/logo.svg" width={45} height={46.67} alt="" />

        <button
          className="bg-yellow-bold p-3 rounded-2xl"
          onClick={() => back()}
        >
          <ArrowLeft color="#0D3B66" className="font-extrabold" size={20} />
        </button>
      </aside>

      <div className="ml-80 w-[600px] bg-white border-2 border-[#D3E2E5] rounded-3xl">
        <header className="bg-zinc-300 flex justify-center w-full h-[330px]">
          <Image
            src="/dog.png"
            alt=""
            width={200}
            height={100}
            quality={100}
            className="object-contain"
          />
        </header>

        <div className="flex flex-col p-16">
          <h1 className="text-blue-bold font-extrabold text-5xl">Alfredo</h1>
          <span className="text-blue-bold font-semibold text-lg mb-10">
            Eu sou um lindo doguinho de 3 anos, um jovem bricalhão que adora
            fazer companhia, uma bagunça mas também ama uma soneca.
          </span>

          <div className="flex items-center gap-3">
            {/* {
              COMPONENTIZAR.
            } */}
            <div className="flex flex-col gap-4 p-6 border-[#E7EBF0] border-2 rounded-3xl">
              <div className="flex items-center gap-2">
                <Zap size={18} className="" />
              </div>
              <h4 className="leading-tight text-nowrap">Muita energia</h4>
            </div>

            <div className="flex flex-col gap-4 p-6 border-[#E7EBF0] border-2 rounded-3xl">
              <div className="flex items-center gap-2">
                <Scan size={18} className="" />
              </div>
              <h4 className="leading-tight text-nowrap">Ambiente amplo</h4>
            </div>

            <div className="flex flex-col gap-4 p-6 border-[#E7EBF0] border-2 rounded-3xl">
              <div className="flex items-center gap-2">
                <Image src="/full-dot.svg" alt="" width={12} height={12} />
                <Image
                  src="/transparent-dot.svg"
                  alt=""
                  width={12}
                  height={12}
                />
                <Image
                  src="/transparent-dot.svg"
                  alt=""
                  width={12}
                  height={12}
                />
              </div>
              <h4 className="leading-tight text-nowrap">Muita energia</h4>
            </div>
          </div>

          <div className="w-full h-0.5 bg-[#D3E2E5]" />

          <h3>Requesitos para adoção</h3>

          <div className="flex flex-col gap-2">
            <div className="flex gap-3 w-full border-2 border-red-light  py-3 px-8 rounded-xl bg-gradient-to-r from-[#FEEFEF] to-white">
              <CircleAlert className="text-red-light" />

              <span className="text-red-light border-red-light">
                Local grande para o animal correr e brincar.
              </span>
            </div>
            <div className="flex gap-3 w-full border-2 border-red-light  py-3 px-8 rounded-xl bg-gradient-to-r from-[#FEEFEF] to-white">
              <CircleAlert className="text-red-light" />

              <span className="text-red-light border-red-light">
                Proibido apartamento
              </span>
            </div>
            <div className="flex gap-3 w-full border-2 border-red-light  py-3 px-8 rounded-xl bg-gradient-to-r from-[#FEEFEF] to-white">
              <CircleAlert className="text-red-light" />

              <span className="text-red-light border-red-light">
                Ambiente frio, pois possui muito pelo.
              </span>
            </div>
            <div className="flex gap-3 w-full border-2 border-red-light  py-3 px-8 rounded-xl bg-gradient-to-r from-[#FEEFEF] to-white">
              <CircleAlert className="text-red-light" />

              <span className="text-red-light border-red-light">
                Cão com intolerância a lactose.
              </span>
            </div>

            <div className="w-full h-0.5 bg-[#D3E2E5]" />

            <button className="w-full bg-green-light flex items-center justify-center gap-4 font-extrabold text-white py-4 rounded-3xl">
              <Image
                src="/whatsapp.svg"
                alt="Whatsapp icon"
                width={20.29}
                height={20}
              />
              Entrar em contato
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
