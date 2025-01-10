'use client'

import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FeatureCard } from '../_components/feature-card'
import { AdoptionRequirement } from '../_components/adoption-requirement'
import { Separator } from '../_components/separator'

export default function AnimalDetailsPage() {
  const { back } = useRouter()

  return (
    <section className="min-h-screen w-full flex gap-80 items-stretch bg-pink-100">
      <aside className="fixed min-h-[620px] w-fit bg-red-light flex flex-col justify-between py-8 px-6">
        <Image src="/logo.svg" width={45} height={46.67} alt="" />

        <button
          className="bg-yellow-bold p-3 rounded-2xl hover:cursor-pointer"
          onClick={() => back()}
        >
          <ArrowLeft color="#0D3B66" className="font-extrabold" size={20} />
        </button>
      </aside>

      <div className="ml-80 mt-16 w-[704px] bg-white border-none rounded-3xl">
        <header className="bg-slate-300 flex justify-center w-full h-[330px] rounded-t-3xl">
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
            <FeatureCard type="energy" feature="Muita energia" />
            <FeatureCard type="space" feature="Ambiente amplo" />
            <FeatureCard type="size" feature="Pequenino" />
          </div>

          <Separator />

          <h3 className="mb-14 font-bold text-blue-bold text-3xl	">
            Requesitos para adoção
          </h3>

          <div className="flex flex-col gap-2">
            <AdoptionRequirement requirement="Local grande para o animal correr e brincar." />
            <AdoptionRequirement requirement="Proibido apartamento." />
            <AdoptionRequirement requirement="Ambiente frio, pois possui muito pelo.." />
            <AdoptionRequirement requirement="Cão com intolerância a lactose." />

            <Separator />

            <button className="w-full text-lg bg-green-light flex items-center justify-center gap-4 font-extrabold text-white py-4 rounded-3xl">
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
