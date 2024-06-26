'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

export function Form() {
  const [isVisible, setIsVisible] = useState(false)

  console.log(isVisible)
  return (
    <form className="w-[488px] h-full flex flex-col justify-around">
      <div>
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

        <fieldset className="flex flex-col gap-2 mt-4 relative">
          <label
            htmlFor="password"
            className="text-blue-bold text-base font-bold"
          >
            Senha
          </label>
          <Input
            type={isVisible ? 'text' : 'password'}
            id="password"
            placeholder="************"
            className="bg-light-gray border-2 border-light-gray text-blue-bold font-semibold placeholder:bold placeholder:text-blue-bold py-6"
          />
          {isVisible ? (
            <Eye
              className="absolute right-5 top-11 hover:cursor-pointer"
              onClick={() => setIsVisible((state) => !state)}
            />
          ) : (
            <EyeOff
              className="absolute right-5 top-11 hover:cursor-pointer"
              onClick={() => setIsVisible((state) => !state)}
            />
          )}
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
