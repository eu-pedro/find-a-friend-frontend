import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface AnimalProps {
  id: number
  name: string
  image_url: string
  age: string
  energy_level: number
  size: string
  independence_level: string
}

interface AnimalDetailsProps {
  animal: AnimalProps
}

export function AnimalDetails({ animal }: AnimalDetailsProps) {
  const { push } = useRouter()

  return (
    <button
      className="cursor-pointer group transition w-full h-[209px] bg-white hover:bg-[#0D3B66] rounded-3xl px-1 pt-1 pb-4"
      onClick={() => push(`/animais/detalhes-do-animal/${animal.id}`)}
    >
      <header className="h-[135px] relative flex justify-center bg-[#e2b349] rounded-3xl">
        <Image
          src={animal.image_url ?? '/images/dog.png'}
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
          {animal.name}
        </span>
      </div>
    </button>
  )
}
