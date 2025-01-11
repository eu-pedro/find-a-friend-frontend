import Image from 'next/image'

export function Banner() {
  return (
    <section className="bg-red-light min-w-[488px] min-h-[661px] hidden px-12 pb-10 pt-28 rounded-3xl lg:flex-col lg:flex lg:items-center lg:justify-between">
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
