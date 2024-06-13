import Image from 'next/image'

interface AnimalCardDetailsProps {
  imageUrl?: string
  name: string
}

export function AnimalCardDetails({ imageUrl, name }: AnimalCardDetailsProps) {
  return (
    <div className="cursor-pointer group transition w-[280px] h-[209px] bg-white hover:bg-[#0D3B66] rounded-3xl px-1 pt-1 pb-4">
      <header className="h-[135px] relative flex justify-center bg-[#e2b349] rounded-3xl">
        <Image
          src={imageUrl ?? '/images/dog.png'}
          fill
          style={{
            objectFit: 'contain',
          }}
          alt="Imagem de cachorro"
        />
      </header>
      <div className="flex items-center flex-col">
        <div className="trasition relative outline outline-white w-12 h-12 z-10 bg-[#F4D35E] group-hover:outline-[#0D3B66] group-hover:bg-[#F15156] flex justify-center rounded-xl -mt-5">
          <Image
            src="/icons/icon-card-details.svg"
            alt="Ícone cachorro"
            width={15}
            height={15.56}
          />
        </div>
        <span className="text-[#0D3B66] text-lg font-bold group-hover:text-white transition-all">
          {name}
        </span>
      </div>
    </div>
  )
}
