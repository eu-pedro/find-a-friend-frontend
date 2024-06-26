import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Form() {
  return (
    <form className="w-[488px] h-full flex flex-col justify-around">
      <div className="">
        <fieldset className="flex flex-col gap-2">
          <label htmlFor="email" className="text-blue-bold text-base font-bold">
            Email
          </label>
          <Input
            type="text"
            id="email"
            placeholder="nome@email.com"
            className="bg-light-gray border-2 border-light-gray text-blue-bold font-semibold placeholder:bold placeholder:text-blue-bold py-6"
          />
        </fieldset>

        <fieldset className="flex flex-col gap-2 mt-4">
          <label
            htmlFor="password"
            className="text-blue-bold text-base font-bold"
          >
            Senha
          </label>
          <Input
            type="password"
            id="password"
            placeholder="************"
            className="bg-light-gray border-2 border-light-gray text-blue-bold font-semibold placeholder:bold placeholder:text-blue-bold py-6"
          />
        </fieldset>
      </div>

      <Button
        type="submit"
        className="w-full py-7 bg-blue-bold rounded-3xl text-white font-extrabold text-base"
      >
        Login
      </Button>
    </form>
  )
}
