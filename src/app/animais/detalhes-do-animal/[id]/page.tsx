'use client'

import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function AnimalDetailsPage() {
  const { back } = useRouter()

  return (
    <section className="h-screen w-full flex items-stretch bg-pink-100 ">
      <aside className="fixed min-h-[620px] w-fit bg-red-light flex flex-col justify-between py-8 px-6">
        <Image src="/logo.svg" width={45} height={46.67} alt="" />

        <button
          className="bg-yellow-bold p-3 rounded-2xl"
          onClick={() => back()}
        >
          <ArrowLeft color="#0D3B66" className="font-extrabold" size={20} />
        </button>
      </aside>

      <div className="w-[600px] h-auto border-2 border-[#D3E2E5] px-20 pt-16 pb-20"></div>
    </section>
  )
}
