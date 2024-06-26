import Image from 'next/image'
import { Form } from './Form'

export function SinginSection() {
  return (
    <main className="max-w-6xl mx-auto flex items-center justify-center h-screen ">
      <section className="h-[661px] flex gap-32">
        <section className="bg-red-light min-w-[488px] min-h-[661px] flex flex-col items-center justify-between px-12 pb-10 pt-28 rounded-3xl">
          <Image
            src="/logo-with-description.svg"
            width={215}
            height={58}
            alt="Logo com descrição"
          />
          <Image
            src="/dogs.svg"
            width={384}
            height={195}
            alt="Imagem de cachorros"
            className="min-h-min"
          />
        </section>

        <div className="flex flex-col">
          <h1 className="text-blue-bold font-bold text-5xl text-left pt-20">
            Boas-vindas!
          </h1>

          <Form />
        </div>
      </section>
    </main>
  )
}
