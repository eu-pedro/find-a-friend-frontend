import Image from 'next/image'

export function Banner() {
  return (
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
  )
}

Banner.Section = Banner
