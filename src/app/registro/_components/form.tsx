'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

export function Form() {
  const [password, setPassword] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState(false)

  return (
    <form className="px-10 w-screen lg:p-0 lg:w-[488px] h-full flex flex-col">
      <div className="mb-20 lg:mb-28">
        <fieldset className="flex flex-col gap-2">
          <Label htmlFor="email" className="text-blue-bold text-base font-bold">
            Email
          </Label>
          <Input
            type="text"
            id="email"
            placeholder="nome@email.com"
            className="bg-light-gray border-2 border-light-gray text-blue-bold font-semibold placeholder:bold placeholder:text-blue-bold py-6"
          />
        </fieldset>

        <fieldset className="flex flex-col gap-2 mt-4 relative">
          <Label
            htmlFor="password"
            className="text-blue-bold text-base font-bold"
          >
            Senha
          </Label>
          <Input
            type={password ? 'text' : 'password'}
            id="password"
            placeholder="************"
            className="bg-light-gray border-2 border-light-gray text-blue-bold font-semibold placeholder:bold placeholder:text-blue-bold py-6"
          />
          {password ? (
            <Eye
              className="absolute right-5 top-11 hover:cursor-pointer"
              onClick={() => setPassword((state) => !state)}
            />
          ) : (
            <EyeOff
              className="absolute right-5 top-11 hover:cursor-pointer"
              onClick={() => setPassword((state) => !state)}
            />
          )}
        </fieldset>

        <fieldset className="flex flex-col gap-2 mt-4 relative">
          <Label
            htmlFor="confirmPassword"
            className="text-blue-bold text-base font-bold"
          >
            Senha
          </Label>
          <Input
            type={confirmPassword ? 'text' : 'password'}
            id="confirmPassword"
            placeholder="************"
            className="bg-light-gray border-2 border-light-gray text-blue-bold font-semibold placeholder:bold placeholder:text-blue-bold py-6"
          />
          {confirmPassword ? (
            <Eye
              className="absolute right-5 top-11 hover:cursor-pointer"
              onClick={() => setConfirmPassword((state) => !state)}
            />
          ) : (
            <EyeOff
              className="absolute right-5 top-11 hover:cursor-pointer"
              onClick={() => setConfirmPassword((state) => !state)}
            />
          )}
        </fieldset>
      </div>

      <Button
        type="submit"
        className="w-full py-7 bg-blue-bold rounded-3xl text-white font-extrabold text-base"
      >
        Cadastrar
      </Button>
    </form>
  )
}
