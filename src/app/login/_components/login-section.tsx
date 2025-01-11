'use client'
import { Banner, Page, Title } from '@/components'
import { Form } from './form'

export function LoginSection() {
  return (
    <Page>
      <section className="h-[661px] flex gap-32">
        <Banner.Section />

        <div className="flex flex-col">
          <Title title="Faça seu Login" />

          <Form.Login />
        </div>
      </section>
    </Page>
  )
}
