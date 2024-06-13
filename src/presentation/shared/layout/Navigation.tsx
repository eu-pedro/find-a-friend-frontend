import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Image from 'next/image'

export function Navigation() {
  return (
    <nav className="flex flex-col h-full w-[392px]">
      <header className="bg-red-bold flex items-center py-8">
        <div className="flex flex-col gap-7 mx-auto">
          <Image
            src="/logo.svg"
            alt="Logo da aplicação"
            width={45}
            height={46.67}
          />
          <div className="flex gap-3">
            <Select>
              <SelectTrigger className="w-[67px] bg-[#f75f64] rounded-3xl text-white justify-center font-extrabold border-0 outline outline-[#f15156]">
                <SelectValue placeholder="MA" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  value="MA
                  "
                >
                  MA
                </SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className=" w-[145px] bg-[#f75f64] rounded-3xl text-white justify-center font-extrabold border-0 outline outline-[#f15156]">
                <SelectValue placeholder="Maranhão" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  value="maranhao
                  "
                >
                  Maranhão
                </SelectItem>
              </SelectContent>
            </Select>

            <button className="bg-yellow-200 p-2 rounded-2xl border-none outline-none">
              <Image
                src="/loupe.svg"
                width={26}
                height={26}
                alt="Ícone de lupa"
              />
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-col bg-red-light py-5 pl-14 pr-10 flex-grow gap-10">
        <h2 className="font-extrabold text-xl text-white">Filtros</h2>

        <form className="w-full flex flex-col gap-8">
          <fieldset className="flex flex-col gap-3">
            <label htmlFor="age" className="text-xs text-white font-medium">
              Idade
            </label>
            <Select>
              <SelectTrigger
                className="w-full bg-[#f75f64] rounded-3xl text-white font-extrabold border-0 outline outline-[#f15156] px-5 py-6 text"
                id="age"
              >
                <SelectValue placeholder="Filhote" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  value="filhote
                  "
                >
                  Filhote
                </SelectItem>
              </SelectContent>
            </Select>
          </fieldset>

          <fieldset className="flex flex-col gap-3">
            <label
              htmlFor="energy-level"
              className="text-xs text-white font-medium"
            >
              Nível de Energia
            </label>
            <Select>
              <SelectTrigger
                className="w-full bg-[#f75f64] rounded-3xl text-white font-extrabold border-0 outline outline-[#f15156] px-5 py-6"
                id="energy-level"
              >
                <SelectValue placeholder="03" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  value="01
                  "
                >
                  01
                </SelectItem>
                <SelectItem
                  value="02
                  "
                >
                  02
                </SelectItem>
                <SelectItem
                  value="03
                  "
                >
                  03
                </SelectItem>
              </SelectContent>
            </Select>
          </fieldset>

          <fieldset className="flex flex-col gap-3">
            <label
              htmlFor="animal-size"
              className="text-xs text-white font-medium"
            >
              Porte do animal
            </label>
            <Select>
              <SelectTrigger
                className="w-full bg-[#f75f64] rounded-3xl text-white font-extrabold border-0 outline outline-[#f15156] px-5 py-6"
                id="animal-size"
              >
                <SelectValue placeholder="Pequenino" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  value="pequenino
                  "
                >
                  Pequenino
                </SelectItem>
              </SelectContent>
            </Select>
          </fieldset>

          <fieldset className="flex flex-col gap-3">
            <label
              htmlFor="independence-level"
              className="text-xs text-white font-medium"
            >
              Nível de Independência
            </label>
            <Select>
              <SelectTrigger
                className="w-full bg-[#f75f64] rounded-3xl text-white font-extrabold border-0 outline outline-[#f15156] px-5 py-6"
                id="independence-level"
              >
                <SelectValue placeholder="Médio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  value="medio
                  "
                >
                  Médio
                </SelectItem>
              </SelectContent>
            </Select>
          </fieldset>
        </form>
      </div>
    </nav>
  )
}
