import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const createUserFormSchema = z
  .object({
    name: z.string().min(1, {
      message: 'Preencha todos os campos!',
    }),
    email: z
      .string()
      .min(1, {
        message: 'Preencha todos os campos!',
      })
      .email('Formato de e-mail inválido!')
      .min(1, {
        message: 'Preencha todos os campos!',
      }),
    password: z
      .string()
      .min(1, {
        message: 'Preencha todos os campos!',
      })
      .max(6, {
        message: 'Senha deve ter no máximo 6 caracteres!',
      }),
    confirm_password: z
      .string()
      .min(1, {
        message: 'Preencha todos os campos!',
      })
      .max(6, {
        message: 'Senha deve ter no máximo 6 caracteres!',
      }),
  })
  .refine(({ password, confirm_password }) => password === confirm_password, {
    message: 'As senhas devem ser iguais!',
    path: ['confirm_password'],
  })

type CreateUserFormData = z.infer<typeof createUserFormSchema>

export function Form() {
  const [isVisible, setIsVisible] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
    mode: 'all',
  })

  function handleSubmitForm(data: CreateUserFormData) {
    alert('usuário criado com sucesso' + JSON.stringify(data))
    clearErrors()
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="w-[488px] h-full flex flex-col justify-around"
    >
      <div className="flex flex-col gap-2">
        <fieldset className="flex flex-col gap-2">
          <label htmlFor="name" className="text-blue-bold text-base font-bold">
            Nome
          </label>
          <Input
            type="text"
            id="name"
            placeholder="Digite seu nome"
            className="bg-light-gray border-2 border-light-gray text-blue-bold font-semibold placeholder:bold placeholder:text-blue-bold py-6"
            {...register('name')}
          />
          {errors.name && (
            <span className="text-red-500 text-xs">{errors.name.message}</span>
          )}
        </fieldset>
        <fieldset className="flex flex-col gap-2">
          <label htmlFor="email" className="text-blue-bold text-base font-bold">
            Email
          </label>
          <Input
            type="text"
            id="email"
            placeholder="nome@email.com"
            className="bg-light-gray border-2 border-light-gray text-blue-bold font-semibold placeholder:bold placeholder:text-blue-bold py-6"
            {...register('email')}
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </fieldset>

        <fieldset className="flex flex-col gap-2 relative">
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
            {...register('password')}
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
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
        </fieldset>

        <fieldset className="flex flex-col gap-2 relative">
          <label
            htmlFor="confirm_password"
            className="text-blue-bold text-base font-bold"
          >
            Confirme sua senha
          </label>
          <Input
            type={isVisible ? 'text' : 'password'}
            id="confirm_password"
            placeholder="************"
            className="bg-light-gray border-2 border-light-gray text-blue-bold font-semibold placeholder:bold placeholder:text-blue-bold py-6"
            {...register('confirm_password')}
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
          {errors.confirm_password && (
            <span className="text-red-500 text-xs">
              {errors.confirm_password.message}
            </span>
          )}
        </fieldset>
      </div>

      <Button
        type="submit"
        className="w-full py-7 bg-blue-bold rounded-3xl text-white font-extrabold text-base"
      >
        Entrar
      </Button>
    </form>
  )
}

Form.Singin = Form
