import { Input } from '@/components/ui/input'

export function Form() {
  return (
    <form className="w-[488px]">
      <fieldset className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-blue-bold text-base font-semibold"
        >
          Email
        </label>
        <Input
          type="text"
          id="email"
          placeholder="nome@email.com"
          className="bg-light-gray border-2 border-light-gray text-blue-bold font-semibold placeholder:bold placeholder:text-blue-bold"
        />
      </fieldset>

      <fieldset className="flex flex-col gap-2 mt-4">
        <label
          htmlFor="password"
          className="text-blue-bold text-base font-semibold"
        >
          Senha
        </label>
        <Input
          type="password"
          id="password"
          placeholder="************"
          className="bg-light-gray border-2 border-light-gray text-blue-bold font-semibold placeholder:bold placeholder:text-blue-bold"
        />
      </fieldset>

      <button>Login</button>
    </form>
  )
}
