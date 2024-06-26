'use client'
import { Banner, Page } from '@/components'
import { Form } from './Form'

export function LoginSection() {
  return (
    <Page>
      <section className="h-[661px] flex gap-32">
        <Banner.Section />

        <div className="flex flex-col">
          <h1 className="text-blue-bold font-bold text-5xl text-left pt-20">
            Faça seu login
          </h1>

          <Form.Login />
        </div>
      </section>
    </Page>
  )
}
